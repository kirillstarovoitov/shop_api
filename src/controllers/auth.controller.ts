import Express from 'express';
import UsersService from "../services/users.service";

class AuthController {
    async logIn(req:Express.Request, resp: Express.Response) {
        const email = req.body.email
        const user = await UsersService.findByEmail(email)
        if(!user) {
            resp.status(404).json({
                message: `User with emails address ${email} was not found`
            })
        } else {
            resp.status(200).json({
                status: "ok"
            })
        }
    }

    async signUp(req:Express.Request, resp: Express.Response) {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const email = req.body.email
        const password = req.body.password

        const user = await UsersService.findByEmail(email)

        if(!user) {
            UsersService.createUser({
                firstName,
                lastName,
                email,
                password
            }).then((response: any) => {
                resp.status(200).json({
                    status: "ok",
                    message: "New user created",
                    id: response.id
                })
            }).catch(err => {
                resp.status(500).json({
                    status: "err",
                    message: err.message
                })
            })
        } else {
            resp.status(500).json({
                status: "err",
                message: `User with email ${email} already exists`
            })
        }

    }
}

export default new AuthController()