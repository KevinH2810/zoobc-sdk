import {
  GetAccountDatasetsResponse,
  GetAccountDatasetsRequest,
  AccountDataset,
  GetAccountDatasetRequest,
} from '../grpc/model/accountDataset_pb';
import { AccountDatasetServiceClient } from '../grpc/service/accountDataset_pb_service';
import { Pagination, OrderBy } from '../grpc/model/pagination_pb';
import Network from './Network';
import { grpc } from '@improbable-eng/grpc-web';
import { PostTransactionRequest, PostTransactionResponse } from '../grpc/model/transaction_pb';
import { TransactionServiceClient } from '../grpc/service/transaction_pb_service';
import { setupDatasetBuilder, SetupDatasetInterface } from './helper/transaction-builder/setup-account-dataset';
import { BIP32Interface } from 'bip32';

export type AccountDatasetsResponse = GetAccountDatasetsResponse.AsObject;
export type AccountDatasetResponse = AccountDataset.AsObject;
export type SetupDatasetResponse = PostTransactionResponse.AsObject;

export interface AccountDatasetListParams {
  property?: string;
  value?: string;
  recipientAccountAddress?: string;
  setterAccountAddress?: string;
  height?: number;
  pagination?: {
    limit?: number;
    page?: number;
    orderBy?: 0 | 1;
  };
}

export interface AccountDatasetParams {
  property: string;
  recipientAccountAddress: string;
}

export function getList(params?: AccountDatasetListParams): Promise<AccountDatasetsResponse> {
  return new Promise((resolve, reject) => {
    const networkIP = Network.selected();
    const request = new GetAccountDatasetsRequest();
    if (params) {
      const { property, value, recipientAccountAddress, setterAccountAddress, height, pagination } = params;
      if (property) request.setProperty(property);
      if (value) request.setValue(value);
      if (recipientAccountAddress) request.setValue(recipientAccountAddress);
      if (setterAccountAddress) request.setSetteraccountaddress(setterAccountAddress);
      if (recipientAccountAddress) request.setRecipientaccountaddress(recipientAccountAddress);
      if (height) request.setHeight(height);
      if (pagination) {
        const reqPagination = new Pagination();
        reqPagination.setLimit(pagination.limit || 10);
        reqPagination.setPage(pagination.page || 1);
        reqPagination.setOrderby(pagination.orderBy || OrderBy.DESC);
        request.setPagination(reqPagination);
      }
    }
    const client = new AccountDatasetServiceClient(networkIP.host);
    client.getAccountDatasets(request, (err, res) => {
      if (err) reject(err);
      if (res) resolve(res.toObject());
    });
  });
}

export function get(params: AccountDatasetParams): Promise<AccountDatasetResponse> {
  return new Promise((resolve, reject) => {
    const networkIP = Network.selected();
    const request = new GetAccountDatasetRequest();
    request.setProperty(params.property);
    request.setRecipientaccountaddress(params.recipientAccountAddress);
    const client = new AccountDatasetServiceClient(networkIP.host);
    client.getAccountDataset(request, (err, res) => {
      if (err) {
        const { code, message } = err;
        if (code == grpc.Code.NotFound) {
          return resolve({
            setteraccountaddress: '',
            recipientaccountaddress: '',
            property: '',
            value: '',
            height: 0,
            isactive: true,
            latest: true,
          });
        } else if (code != grpc.Code.OK) return reject(message);
      }
      if (res) resolve(res.toObject());
    });
  });
}

export function setupDataset(data: SetupDatasetInterface, childSeed: BIP32Interface): Promise<SetupDatasetResponse> {
  return new Promise((resolve, reject) => {
    const bytes = setupDatasetBuilder(data, childSeed);

    const request = new PostTransactionRequest();
    request.setTransactionbytes(bytes);

    const networkIP = Network.selected();
    const client = new TransactionServiceClient(networkIP.host);
    client.postTransaction(request, (err, res) => {
      if (err) reject(err);
      if (res) resolve(res.toObject());
    });
  });
}

export default { getList, get, setupDataset };
