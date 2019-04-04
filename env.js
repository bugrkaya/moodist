'use strict';

const env = {
  PORT: process.env.PORT || 2323,
//  DATABASE_URL: process.env.DATABASE_URL || 'jdbc:postgresql://localhost:5432/deneme',
  DATABASE_NAME: process.env.DATABASE_NAME || 'phxpoyea',
  DATABASE_HOST: process.env.DATABASE_HOST || 'baasu.db.elephantsql.com',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'phxpoyea',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '1mgk3t0uGNQksKypbikCmXxUgCUKl1TV',
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

//const env = {
//    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
//    
//    
//    PORT: process.env.PORT || 3000,  //local
//    DATABASE_NAME: process.env.DATABASE_NAME || 'lebron', //local
//    DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root', //local
//    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "",  //local
//    
//    
//    DATABASE_PORT: process.env.DATABASE_PORT || 8080,
//    DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
//
//    NODE_ENV: process.env.NODE_ENV || 'development',
//};

module.exports = env;