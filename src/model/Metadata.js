class Metadata {
  cardAuth;
  authPw;
  authDob;
  constructor(authPw, authDob) {
    this.cardAuth = true;
    this.authPw = authPw;
    this.authDob = authDob;
  }
}

export default Metadata;
