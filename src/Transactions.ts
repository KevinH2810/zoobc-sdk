import Network from './Network';
import {
  GetTransactionsRequest,
  PostTransactionRequest,
  PostTransactionResponse,
  GetTransactionsResponse,
  GetTransactionRequest,
  Transaction,
} from '../grpc/model/transaction_pb';
import { Pagination, OrderBy } from '../grpc/model/pagination_pb';
import { TransactionServiceClient } from '../grpc/service/transaction_pb_service';
import { SendMoneyInterface, sendMoneyBuilder } from './helper/transaction-builder/send-money';
import { BIP32Interface } from 'bip32';

export interface TransactionListParams {
  address?: string;
  height?: number;
  transactionType?: number;
  timestampStart?: string;
  timestampEnd?: string;
  pagination?: {
    limit?: number;
    page?: number;
    orderBy?: 0 | 1;
  };
}

function getList(params?: TransactionListParams): Promise<GetTransactionsResponse.AsObject> {
  return new Promise((resolve, reject) => {
    const request = new GetTransactionsRequest();
    const networkIP = Network.selected;

    if (params) {
      const { address, height, transactionType, timestampStart, timestampEnd, pagination } = params;

      if (address) request.setAccountaddress(address);
      if (height) request.setHeight(height);
      if (transactionType) request.setTransactiontype(transactionType);
      if (timestampStart) request.setTimestampstart(timestampStart);
      if (timestampEnd) request.setTimestampend(timestampEnd);
      if (pagination) {
        const reqPagination = new Pagination();
        reqPagination.setLimit(pagination.limit || 10);
        reqPagination.setPage(pagination.page || 1);
        reqPagination.setOrderby(pagination.orderBy || OrderBy.DESC);
        request.setPagination(reqPagination);
      }
    }

    const client = new TransactionServiceClient(networkIP);
    client.getTransactions(request, (err, res) => {
      if (err) reject(err);
      if (res) resolve(res.toObject());
    });
  });
}

function get(id: string): Promise<Transaction.AsObject> {
  return new Promise((resolve, reject) => {
    const networkIP = Network.selected;
    const request = new GetTransactionRequest();
    request.setId(id);

    const client = new TransactionServiceClient(networkIP);
    client.getTransaction(request, (err, res) => {
      if (err) reject(err.message);
      if (res) resolve(res.toObject());
    });
  });
}

function sendMoney(
  data: SendMoneyInterface,
  seed: BIP32Interface,
): Promise<PostTransactionResponse.AsObject> {
  const txBytes = sendMoneyBuilder(data, seed);

  return new Promise((resolve, reject) => {
    const networkIP = Network.selected;

    const request = new PostTransactionRequest();
    request.setTransactionbytes(txBytes);

    const client = new TransactionServiceClient(networkIP);
    client.postTransaction(request, (err, res) => {
      if (err) reject(err);
      if (res) resolve(res.toObject());
    });
  });
}

export default { sendMoney, get, getList };
