import Express from 'express';
import UsersService from '../services/users.service'

class UsersController {
    async getUsers(req: Express.Request, res:Express.Response) {


        let usersData = await UsersService.getUsers()

        if(usersData) {
            return res.status(200).send(usersData);
        } else {
            return res.status(500).send({
                message: 'Cant get users.',
            });
        }
    }
    createUser(req: Express.Request, res:Express.Response) {

    }
    updateUser(req: Express.Request, res:Express.Response) {

    }
    deleteUser(req: Express.Request, res:Express.Response) {

    }
    getUser(req: Express.Request, res:Express.Response) {

    }
}

export default new UsersController();