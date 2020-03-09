import UserService from "../services/UserService";

export default new (class AuthController {
  async signup(req, res) {
    try {
      const { email, password, password_confirmation } = req.body;
      const newUser = await UserService.signup(
        email,
        password,
        password_confirmation
      );
      const data = newUser.dataValues;

      delete data.passwordDigest;

      res.setHeader("Authorization", "Bearer " + newUser.token);
      res.json(data);
    } catch (e) {
      res.status(422).send(e);
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserService.login(email, password);
      const data = user.dataValues;

      delete data.passwordDigest;

      res.setHeader("Authorization", "Bearer " + user.token);
      res.json(data);
    } catch (e) {
      res.status(422).send(e);
    }
  }
})();
