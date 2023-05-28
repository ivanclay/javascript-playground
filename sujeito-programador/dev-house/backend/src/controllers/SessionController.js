import User from "../models/User/User";

export default class SessionController{

    
    static store(req,res){
        const email = req.body.email;
        console.log(email)
        return res.json({ message: 'minha api' })
    }
}

