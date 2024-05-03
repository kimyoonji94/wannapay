class CardRequest {
  number: string;
  expiry: string;
  cvv?: string;
  installment: number;
  constructor(number: string, expiry: string, cvv: string, installment: number) {
    this.number = number;
    this.expiry = expiry;
    this.cvv = cvv;
    this.installment = installment;
  }
}

export default CardRequest;
