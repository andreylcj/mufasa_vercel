import connectDB from '../../../assets/utils/ConnectDB';
import auth from '../../../assets/middleware/auth';
import Results from '../../../assets/models/ResultsModel';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'PATCH':
      await updateRole(req, res);
      break;
    case 'DELETE':
      await deleteUser(req, res);
      break;
    case 'GET':
      await getUser(req, res);
      break;
    case 'PUT':
      await uploadInfo(req, res);
      break;
    default:
  }
};

const updateRole = async (req, res) => {
  try {
    const result = await auth(req, res);

    if (result.role !== 'master admin') return res.status(400).json({ err: 'Autenticação inválida' });

    const { id } = req.query;
    const { role } = req.body;
    const admin = !!((req.body.role === 'admin' || req.body.role === 'master admin'));

    await Results.findOneAndUpdate({ _id: id }, { role, admin });

    res.json({ msg: 'Update Success' });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await auth(req, res);
    if (result.role !== 'master admin') return res.status(400).json({ err: 'Autenticação inválida' });

    const { id } = req.query;

    await Results.findByIdAndDelete(id);
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    // eslint-disable-next-line no-unused-vars
    // const result = await auth(req, res);
    // if (result.role !== 'admin' && result.role !== 'master admin')
    // return res.status(400).json({ err: 'Autenticação inválida' });

    const { id } = req.query;

    const user = await Results.findById(id).select('-password');

    if (!user) return res.status(400).json({ success: false, err: 'User not found' });

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const uploadInfo = async (req, res) => {
  try {
    // const result = await auth(req, res);

    const { id } = req.query;

    const { mes } = req.body;

    const newUser = await Results.findOneAndUpdate({ _id: id }, { mes }, {
      returnNewDocument: true,
      new: true,
      strict: false,
    }).select('-password');

    res.json({
      message: 'Update Success',
      user: {
        /* name: newUser.name,
        email: newUser.email,
        CPF,
        CEIpassword,
        role: newUser.role, */
        mes,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
