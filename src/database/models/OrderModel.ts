'use strict';

import { DataTypes, Model } from 'sequelize';

interface OrderAttributes {
    id: number;
    status: string;
    date: Date;
    excluded_at: Date;
}

module.exports = (sequelize: any) => {
    class OrderModel extends Model<OrderAttributes> implements OrderAttributes {
        id!: number;
        status!: string;
        date!: Date;
        excluded_at: Date;

        static associate(models: any){
            OrderModel.hasMany(models.ItemModel, {
                onDelete: 'CASCADE',
            });
        }
    }
    OrderModel.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        excluded_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        sequelize,
        modelName: 'OrderModel',
        tableName: 'orders', 
    });

    return OrderModel;
};
