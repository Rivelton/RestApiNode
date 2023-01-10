import User from '../models/User';

class UserContoller {
  async create(req, res) {
    const novoUser = await User.create({
      nome: 'Rivelton',
      email: 'rivelton@gmail.com',
      password: '12345678',
    });
    res.json(novoUser);
  }
}

export default new UserContoller();
