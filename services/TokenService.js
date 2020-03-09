import crypto from "crypto";

export default new (class TokenService {
  async generate() {
    return crypto.randomBytes(64).toString("base64");
  }
})();
