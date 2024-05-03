import CardRequest from './CardRequest';
import Metadata from './Metadata';
import Product from './Product';

class PayRequestDetail {
  payerName: string;
  payerEmail?: string;
  payerTel: string;
  card: CardRequest;
  products: Product[];
  trxId?: string;
  trxType?: string;
  trackId?: string;
  udf1?: string;
  udf2?: string;
  amount: number;
  metadata: Metadata;
  constructor(
    payerName: string,
    payerEmail: string,
    payerTel: string,
    card: CardRequest,
    products: Product[],
    trxId: string,
    trxType: string,
    trackId: string,
    udf1: string,
    udf2: string,
    amount: number,
    metadata: Metadata
  ) {
    this.payerName = payerName;
    this.payerEmail = payerEmail;
    this.payerTel = payerTel;
    this.card = card;
    this.products = products;
    this.trxId = trxId;
    this.trxType = 'ONTR';
    this.trackId = '';
    this.udf1 = '';
    this.udf2 = '';
    this.amount = amount;
    this.metadata = metadata;
  }
}
export default PayRequestDetail;
