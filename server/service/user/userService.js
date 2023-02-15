const UserModel = require("../../models/user/userModel");


class UserService {

    async registration(email, password, role, fio) {
        const user = await UserModel.create({
            email, password, role, fio
        })
        return user;
    }

}

module.exports = new UserService();