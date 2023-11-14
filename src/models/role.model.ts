import Sequelize from 'sequelize';
import db from '../config/database';

const RoleModel = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type:Sequelize.STRING,
        field: 'name',
    },
});

export default RoleModel;