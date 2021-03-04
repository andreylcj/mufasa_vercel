import connectDB from '../../../assets/utils/ConnectDB';
import auth from '../../../assets/middleware/auth';
import Results from '../../../assets/models/ResultsModel';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getUser(req, res);
      break;
    case 'PATCH':
      await uploadInfo(req, res);
      break;
      case 'POST':
        await putResults(req, res);
        break;
    default:
  }
};

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = { ...this.queryString };

    const excludeFields = ['sort'];
    excludeFields.forEach((el) => delete (queryObj[el]));

    if (queryObj.role !== 'all' && queryObj.role) this.query.find({ role: queryObj.role });
    if (queryObj.search !== 'all' && queryObj.search) this.query.find({ email: { $regex: queryObj.search } });

    this.query.find();
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join('');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }
}

const getUser = async (req, res) => {
  try {
    //const result = await auth(req, res);
    //if (result.role !== 'admin' && result.role !== 'master admin') return res.status(400).json({ err: 'Autenticação inválida' });
    const {test} = req.body;

    const features = new APIfeatures(Results.find({ 'test.stockHistory.date': {$gt: test} }, {email:1}), req.query)
      .filtering().sorting();

    const users = await features.query;

    //send info as json:
    res.json({ users });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};


const uploadInfo = async (req, res) => {
  try {
    //const result = await auth(req, res);

    const { id } = req.body;

    const { CPF, CEIpassword } = req.body;



    const {data} = req.body;

    const newUser = await Results.findOneAndUpdate({ _id: id }, { CPF, CEIpassword, data },{
      returnNewDocument: true,
      new: true,
      strict: false
    }).select('-password');

    res.json({
      message: 'Update Success',
      user: {
        name: newUser.name,
        email: newUser.email,
        CPF,
        CEIpassword,
        role: newUser.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const putResults = async (req, res) => {
  try {
    const { mes } = req.body;

    const name =  mes.name;
    //const user = await Users.findOne({ email });
    //if (user) return res.status(405).json({ emailMessage: 'Email já cadastrado' });

    const newUser = new Results({ 'mes.name': name });

    console.log(newUser);

    await newUser.save();

   // const accessToken = createAccessToken({ id: newUser._id });
   // const refreshToken = createRefreshToken({ id: newUser._id });

    res.json({
      msg: 'Register Success',
      //refreshToken,
      //accessToken,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message, status: 500 });
  }
};
