'use strict';

import { Model, DataTypes } from 'sequelize';

interface UserAttributes {
    id: number;
    name: string;
    whatsapp: string;
    email: string;
    type: string;
    excluded_at: Date;
}

module.exports = (sequelize: any) => {
    class UserModel extends Model<UserAttributes> implements UserAttributes {
        id!: number;
        name!: string;
        whatsapp!: string;
        email!: string;
        type!: string;
        excluded_at: Date;
        

        static associate(models: any) {
            UserModel.hasOne(models.EnterpriseModel, {
                onDelete: 'CASCADE', 
            });
        }
    };

    UserModel.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        whatsapp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        type: {
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
        modelName: 'UserModel',
        tableName: 'users',
    });

    return UserModel;
}