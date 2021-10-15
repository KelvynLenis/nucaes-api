'use strict';

import { Model, DataTypes } from "sequelize";

interface EnterpriseAttributes {
    id: number;
    cnpj: string;
    phoneNumber: string;
    fantasyName: string;
    corporateName: string;
    status: string;
    excluded_at: Date;
}

module.exports = (sequelize: any) => {
    class EnterpriseModel extends Model<EnterpriseAttributes> implements EnterpriseAttributes {
        id!: number;
        cnpj!: string;
        phoneNumber!: string;
        fantasyName!: string;
        corporateName!: string;
        status!: string;
        excluded_at: Date;

        static associate(models: any) {
            EnterpriseModel.belongsTo(models.UserModel);
            EnterpriseModel.hasMany(models.BranchModel, {
                onDelete: 'CASCADE',
            });
        }
    };

    EnterpriseModel.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        cnpj: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fantasyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        corporateName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        excluded_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        modelName: 'EnterpriseModel',
        tableName: 'enterprises',
    });

    return EnterpriseModel;
}