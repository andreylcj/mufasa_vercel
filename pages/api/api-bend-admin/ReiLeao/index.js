// import ReiLeao from '../../ReiLeao'

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await middleWareReiLeao(req, res);
      break;
    default:
  }
};

const middleWareReiLeao = async (req, res) => {
  try {
    // do stuff
  // get user to update

    const users = [
      {
        CPF: '1231231',
        CEIPassword: '123',
        _id: '23132313',
        lastTransaction: '1231232132',
      },
      {
        CPF: '1231231',
        CEIPassword: '123',
        _id: '23132313',
        lastTransaction: '1231232132',
      },
      {
        CPF: '1231231',
        CEIPassword: '123',
        _id: '23132313',
        lastTransaction: '1231232132',
      },
      {
        CPF: '1231231',
        CEIPassword: '123',
        _id: '23132313',
        lastTransaction: '1231232132',
      },
    ];

    // const response = await ReiLeao(users)

    // do stuff
    // logica para salvar
    // for(){} ...
    // save on mongoDB

    res.json({
      success: 'Success',
      users,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
