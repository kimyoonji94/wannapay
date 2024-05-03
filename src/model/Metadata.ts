class Metadata {
  cardAuth: boolean;
  authPw: string;
  authDob: string;
  constructor(authPw: string, authDob: string) {
    this.cardAuth = true;
    this.authPw = authPw;
    this.authDob = authDob;
  }
}

export default Metadata;
