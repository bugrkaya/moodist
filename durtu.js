'use strict'

module.exports = (sequelize, DataTypes) => {
    const Durtu = sequelize.define('durtu', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        patient_name: {
            type: DataTypes.STRING,
            required: true
        },
        dogru_basis_sayisi: {
            type: DataTypes.FLOAT,
            required: true
        },
        yanlis_basis_sayisi: {
            type: DataTypes.FLOAT,
            required: true
        },
        total_dogru_sayisi: {
            type: DataTypes.FLOAT,
            required: true
        },
        total_yanlis_sayisi: {
            type: DataTypes.FLOAT,
            required: true
        },
        hata_orani: {
            type: DataTypes.FLOAT,
            required: true
        },
        dogrularda_tepki_suresi_ort: {
            type: DataTypes.FLOAT,
            required: true
        },
        yanlislarda_tepki_suresi_ort: {
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
    return Durtu;
};
