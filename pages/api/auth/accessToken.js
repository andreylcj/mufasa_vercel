import ConnectDB from '../../../assets/utils/ConnectDB'
import Users from '../../../assets/models/UserModel'
import { createAccessToken } from '../../../assets/utils/GenerateToken'
import jwt from 'jsonwebtoken'


ConnectDB()

export default async (req, res) => {
    try {

        const rf_token = req.cookies.refreshToken
        if (!rf_token) return res.status(400).json({ err: 'Por favor, faça login' })

        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
        if (!result) return res.status(400).json({ err: 'Seu token esta incorreto ou expirou' })

        const user = await Users.findById(result.id)
        if (!user) return res.status(400).json({ err: 'Usuário não existe' })

        const accessToken = createAccessToken({ id: user._id })

        res.json({
            accessToken,
            user: {
                email: user.email,
                role: user.role,
                avatar_image: user.avatar_image,
                admin: user.admin,
            }
        })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}
