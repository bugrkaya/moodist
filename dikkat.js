'use strict'

module.exports = (sequelize, DataTypes) => {
    const Dikkat = sequelize.define('dikkat', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        patient_name: {
            type: DataTypes.STRING,
            required: true
        },
        hata_orani: {
            type: DataTypes.FLOAT,
            required: true
        },
        tepki_suresi: {
            type: DataTypes.FLOAT,
            required: true
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
    return Dikkat;
};
