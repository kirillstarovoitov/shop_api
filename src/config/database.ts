import {Sequelize} from "sequelize-typescript";
import {db_name,db_password,db_user,db_host, db_port} from "./env"

const sequelize = new Sequelize({
        dialect: 'postgres',
        host: "localhost",
        port: db_port,
        database: db_name,
        username: db_user,
        password: db_password
    }
);

export default sequelize