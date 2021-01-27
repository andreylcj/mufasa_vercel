import connectDB from '../../../assets/utils/ConnectDB'
import auth from '../../../assets/middleware/auth'
import Users from '../../../assets/models/UserModel'

connectDB()

export default async (req, res) => {
    const {
        query: { id },
        method
    
    } = req;
    switch (req.method) {
        case "PATCH":
            await updateRole(req, res)
            break
        case "DELETE":
            await deleteUser(req, res)
            break
        case 'GET':
            await getUser(req, res)
            break;
        /*case 'PUT':
            await modifyUser(req, res)
            break;*/
            
        case "PUT":
            await uploadInfor (req, res)
            break;
    }
}

const updateRole = async (req, res) => {
    try {

        const result = await auth(req, res)
        if (result.role !== 'master admin') return res.status(400).json({ err: 'Autenticação inválida' })

        const { id } = req.query
        const { role } = req.body
        const admin = (req.body.role === 'admin' || req.body.role === 'master admin') ? true : false

        await Users.findOneAndUpdate({ _id: id }, { role, admin })

        res.json({ msg: 'Update Success' })


    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const deleteUser = async (req, res) => {
    try {

        const result = await auth(req, res)
        if (result.role !== 'master admin') return res.status(400).json({ err: 'Autenticação inválida' })

        const { id } = req.query

        await Users.findByIdAndDelete(id)

        res.json({ msg: 'Delete Success' })


    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.query

        //const result = await auth(req, res)
        //if (result.role !== 'admin' && result.role !== 'master admin') return res.status(400).json({ err: 'Autenticação inválida' })

        const user = await Users.findById(id)

        if (!user) {
            return res.status(400).json({succes: false})
    
        }

        res.status(200).json({succes: true, data: user})
    }catch(err){
        return res.status(500).json({ err: err.message })
    }
}

/*const modifyUser = async (req, res) => {
    try {
        const { id } = req.query
        
        const user = await Users.findByIdAndUpdate(id, req, req.body , {
            new: true,
            runValidators:true
        })
    if (!user) {
        return res.status(400).json({succes: false})

    }
    res.status(200).json({succes: true, data: user})
    }catch(err){
        return res.status(500).json({ err: err.message })
    }
}*/

const uploadInfor = async (req, res) => {
    try {

        //const result = await auth(req, res)
        //if (result.role !== 'master admin') return res.status(400).json({ err: 'Autenticação inválida' })

        const { id } = req.query
        
        const {CPF, CEIpassword} =req.body

        const newUser = await Users.findOneAndUpdate({ _id: id }, { CPF,CEIpassword }).select("-password")

        res.json({ 
            msg: 'Update Success' ,
            user:{
                CPF,
                CEIpassword,
                role:newUser.role,
                name:newUser.name,
                email:newUser.email,
                avatar_image:newUser.avatar_image,
                admin:newUser.admin
            }
    
    })


    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}