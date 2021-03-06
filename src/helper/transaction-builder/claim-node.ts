// Licensed to the Quasisoft Limited - Hong Kong under one or more agreements
// The Quasisoft Limited - Hong Kong licenses this file to you under MIT license.

import { writeInt64, writeInt32, getZBCAddress, ZBCAddressToBytes, addressToBytes, generateTransactionHash } from '../utils';
import { ADDRESS_LENGTH, POOWN_LENGTH, VERSION } from './constant';
import { BIP32Interface } from 'bip32';
import { EscrowTransactionInterface } from './send-money';
import { Address } from '../interfaces';
import { TransactionType } from '../../../grpc/model/transaction_pb';
import { AccountType } from '../../../grpc/model/accountType_pb';
import { addEscrowBytes } from './escrow-transaction';

const TRANSACTION_TYPE = writeInt32(TransactionType.CLAIMNODEREGISTRATIONTRANSACTION);

export interface ClaimNodeInterface extends EscrowTransactionInterface {
  accountAddress: Address;
  fee: number;
  nodePublicKey: Buffer;
  nodeAddress: string;
  message?: string;
}

export function claimNodeBuilder(data: ClaimNodeInterface, poown: Buffer, seed?: BIP32Interface) {
  let bytes: Buffer;

  const timestamp = writeInt64(Math.trunc(Date.now() / 1000));
  const sender = addressToBytes(data.accountAddress);
  const recipient = writeInt32(AccountType.EMPTYACCOUNTTYPE);

  const fee = writeInt64(data.fee * 1e8);

  const nodePublicKey = data.nodePublicKey;
  const bodyLength = writeInt32(nodePublicKey.length + poown.length);

  bytes = Buffer.concat([TRANSACTION_TYPE, VERSION, timestamp, sender, recipient, fee, bodyLength, nodePublicKey, poown]);

  // Add Escrow Bytes
  bytes = addEscrowBytes(bytes, data);

  // Add message
  let message = writeInt32(0);
  if (data.message) {
    message = writeInt32(data.message.length);
    message = Buffer.concat([message, Buffer.from(data.message)]);
  }

  bytes = Buffer.concat([bytes, message]);

  if (seed) {
    const txHash = ZBCAddressToBytes(generateTransactionHash(bytes));
    const signature = seed.sign(txHash);
    return Buffer.concat([bytes, signature]);
  } else return bytes;
}

export function readClaimNodeBytes(txBytes: Buffer, offset: number) {
  const nodepublickey = getZBCAddress(txBytes.slice(offset, offset + ADDRESS_LENGTH), 'ZNK');
  offset += ADDRESS_LENGTH;

  const poown = txBytes.slice(offset, offset + POOWN_LENGTH);
  return { nodepublickey, poown };
}
