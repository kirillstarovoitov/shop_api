import UserModel from '../models/user.model';

class UsersService {
    async getUsers() {
        const allUsers = await UserModel.findAll()
        console.log('allUsers',allUsers)
        return allUsers
    }

    findById(){

    }

    findByEmail(email: string){
        return UserModel.findOne({ where: { email: email } });
    }

    createUser(data: any) {
        const {firstName, lastName, email, password} = data

        return new Promise((res, rej)=> {
            if(!firstName) {
                rej(new Error('First name is required'))
            }
            if(!lastName) {
                rej(new Error('Last name is required'))
            }
            if(!email) {
                rej(new Error('Email is required'))
            }
            if(!password) {
                rej(new Error('Password is required'))
            }

            res({
               id: 1, firstName, lastName, email, password
            })
        })
    }

    updateUser() {

    }

    deleteUser() {

    }
}

export default new UsersService();