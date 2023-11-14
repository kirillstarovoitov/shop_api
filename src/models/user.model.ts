import Sequelize from 'sequelize';
import db from '../config/database';

const UserModel = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type:Sequelize.STRING,
        field: 'first_name',
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false,
        field: 'last_name',
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    },
    password:{
        type: Sequelize.STRING,
    },
    role: Sequelize.STRING,
});

export default UserModel;