module.exports = {
    enviroment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8081,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST
}
