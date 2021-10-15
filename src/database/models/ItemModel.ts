'use strict';

import { DataTypes, Model } from 'sequelize';

interface ItemAttributes {
    id: number;
    final_price: number;
    amount: number;
    excluded_at: Date;
}

module.exports = (sequelize: any) => {
    class ItemModel extends Model<ItemAttributes> implements ItemAttributes {
        id!: number;
        final_price!: number;
        amount!: number;
        excluded_at: Date;


        static associate(models: any){
            ItemModel.belongsTo(models.OrderModel)
        }
    }

    ItemModel.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        final_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        excluded_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        sequelize,
        modelName: 'ItemModel',
        tableName: 'items',
    });

    return ItemModel;
}
