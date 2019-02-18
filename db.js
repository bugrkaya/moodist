'use strict'
var pg = require('pg');
pg.defaults.ssl = true;
const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    dialect: env.DATABASE_DIALECT,
    define: {
        underscored: true
    }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.doctor = require('./doctor.js')(sequelize, Sequelize);
db.patient = require('./patient.js')(sequelize, Sequelize);
db.dikkat = require('./dikkat.js')(sequelize, Sequelize);
db.durtu = require('./durtu.js')(sequelize, Sequelize);
db.hafiza = require('./hafiza.js')(sequelize, Sequelize);
db.risk = require('./risk.js')(sequelize, Sequelize);

//Relations
db.patient.belongsTo(db.doctor);
db.doctor.hasMany(db.patient);

db.dikkat.belongsTo(db.patient);
db.patient.hasMany(db.dikkat);

db.durtu.belongsTo(db.patient);
db.patient.hasMany(db.durtu);

db.hafiza.belongsTo(db.patient);
db.patient.hasMany(db.hafiza);

db.risk.belongsTo(db.patient);
db.patient.hasMany(db.risk);


module.exports = db;
