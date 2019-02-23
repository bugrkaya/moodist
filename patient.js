'use strict'

module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('patient', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            required: true,
        },
        doctor_name: {
            type: DataTypes.STRING,
            required: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        paranoid: true,
        underscored: true
    });
    return Patient;
};
