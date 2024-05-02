class CardRequest {
  number;
  expiry;
  cvv;
  installment;
  constructor(number, expiry, cvv, installment) {
    this.number = number;
    this.expiry = expiry;
    this.cvv = cvv;
    this.installmen = installment;
  }
}

export default CardRequest;
