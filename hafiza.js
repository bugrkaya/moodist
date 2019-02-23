module.exports = (sequelize, DataTypes) => {
    const Hafiza = sequelize.define('hafiza', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        patient_name: {
            type: DataTypes.STRING,
            required: true
        },
        total_saniye: {
            type: DataTypes.FLOAT,
            required: true
        },
        kacta_patladi: {
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
    return Hafiza;
};
