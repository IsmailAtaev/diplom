const users = [
  {
    fullName: "Atayev Ismayyl",
    password: "qwerty123",
    role: "ADMIN",
    email: "ataewisma@gmail.com",
  },
  {
    fullName: "Atayev Muhammed",
    password: "ahum123",
    role: "USER",
    email: "ahum@gmail.com",
  },
];

const UserService = require("../../service/user/userService");

class AuthController {
  async getUsers(req, res) {
    try {
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }

  async registration(req, res, next) {
    try {
        const {email, password, role, fio} = req.body;
        const userData = await UserService.registration(email, password, role, fio);
        return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AuthController();
