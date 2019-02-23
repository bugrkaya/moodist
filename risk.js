module.exports = (sequelize, DataTypes) => {
    const Risk = sequelize.define('risk', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        patient_name: {
            type: DataTypes.STRING,
            required: true
        },
        ortalama_balon: {
            type: DataTypes.FLOAT,
            required: true
        },
        balon_sisirme_sayisi: {
            type: DataTypes.FLOAT,
            required: true
        },
        patlayan_balon_sayisi: {
            type: DataTypes.FLOAT,
            required: true
        },
        balondan_sonra_gelen_balon: {
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
    return Risk;
};
