const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: process.env.PORT || 3000,
    prefix: process.env.PREFIX || "/api",
    jwtName: process.env.JWT_NAME || "Authorization",
    jwtSecret: process.env.JWT_SECRET,
    // db: {
    //     host: process.env.DB_HOST,
    //     user: process.env.DB_USER,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DATABASE,
    // },
};
