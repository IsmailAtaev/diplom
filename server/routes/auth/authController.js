const users = [
    {
        fullName: 'Atayev Ismayyl',
        password: 'qwerty123',
        role: 'ADMIN',
        email: 'ataewisma@gmail.com'
    },
    {
        fullName: 'Atayev Muhammed',
        password: 'ahum123',
        role: 'USER',
        email: 'ahum@gmail.com'
    },

]

class AuthController {
    async getUsers(req, res) {
        try {
            res.json(users);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new AuthController();