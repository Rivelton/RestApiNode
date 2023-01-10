import Aluno from '../models/Aluno';

class HomeContoller {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rivelton',
      sobrenome: 'Otávio',
      email: 'rivelton@gmail.com',
      idade: 25,
      peso: 96,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeContoller();
