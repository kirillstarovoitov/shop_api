module.exports =  {
    development: {
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DB_NAME,
        host: '127.0.0.1',
        port: process.env.PG_PORT,
        dialect: 'postgres',
    }
}
