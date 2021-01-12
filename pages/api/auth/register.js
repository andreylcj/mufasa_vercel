import ConnectDB from '../../../assets/utils/ConnectDB'
import bcrypt from 'bcrypt'
import Users from '../../../assets/models/UserModel'

ConnectDB()

export default async (req, res) => {
    switch (req.method) {
        case 'POST':
            await register(req, res)
            break
    }
}

const register = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await Users.findOne({ email })
        if (user) return res.status(405).json({ emailMessage: 'Email já cadastrado' })

        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = new Users({ email, password: passwordHash })

        console.log(newUser)

        await newUser.save()
        res.json({ msg: 'Register Success' })
    } catch (err) {
        return res.status(500).json({ err: err.message, status: 500 })
    }
}
