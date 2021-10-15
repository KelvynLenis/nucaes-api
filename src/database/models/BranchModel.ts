'use strict';

import { DataTypes, Model } from 'sequelize';

interface BranchAttributes {
    id: number;
    number: number;
    schedule: string;
    description: string;
    zipcode: string;
    state: string;
    city: string;
    street: string;
    excluded_at: Date;
}

module.exports = (sequelize: any) => {
    class BranchModel extends Model<BranchAttributes> implements BranchAttributes {
        id!: number;
        number!: number;
        schedule!: string;
        description!: string;
        zipcode!: string;
        state!: string;
        city!: string;
        street!: string;
        excluded_at: Date;

        static associate(models: any) {
            BranchModel.belongsTo(models.EnterpriseModel)
        }
    }

    BranchModel.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        schedule: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        excluded_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        sequelize,
        modelName: 'BranchModel',
        tableName: 'branchs',
    });

    return BranchModel;
}
