import connectDB from '../../../assets/utils/ConnectDB'
import auth from '../../../assets/middleware/auth'
import Users from '../../../assets/models/UserModel'

connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getUsers(req, res)
            break
    }
}

const getUsers = async (req, res) => {
    try {

        const result = await auth(req, res)
        if (result.role !== 'admin' && result.role !== 'master admin') return res.status(400).json({ err: 'Autenticação inválida' })

        const users = await Users.find().select('-password')
        res.json({ users })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}