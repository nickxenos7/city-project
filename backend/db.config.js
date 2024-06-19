module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: 'Pepel!@17',
    DB: 'parks_and_recreatin',
    dialect: 'mysql', 
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
    };