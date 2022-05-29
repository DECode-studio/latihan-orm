require('dotenv').config() // untuk membaca file env

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": "juevowfamkhyos",
    "password": "626b4ff4929bbc0bfcdff3e847e5d98770e85a56fbccd177f51f70b67334daa2",
    "database": "d4q8iad6pchj95",
    "host": "ec2-52-3-2-245.compute-1.amazonaws.com",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    }
  }
  // "production": {
  //   "username": process.env.DB_USERNAME,
  //   "password": process.env.DB_PASSWORD,
  //   "database": process.env.DB_NAME,
  //   "host": process.env.DB_HOST,
  //   "dialect": process.env.DB_DIALECT
  // }
}

