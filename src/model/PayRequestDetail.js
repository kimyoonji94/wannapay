class PayRequestDetail {
  payerName;
  payerEmail;
  payerTel;
  cardRequest;
  products;
  amount;
  metadata;
  constructor(payerName, payerEmail, payerTel, cardRequest, products, amount, metadata) {
    this.payerName = payerName;
    this.payerEmail = payerEmail;
    this.payerTel = payerTel;
    this.cardRequest = cardRequest;
    this.products = products;
    this.amount = amount;
    this.metadata = metadata;
  }
}
export default PayRequestDetail;
