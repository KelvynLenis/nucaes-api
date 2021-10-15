const ItemModel = require("../../database/models/ItemModel");

/*
    RESPONSIBLE FOR USERS RULES AND VALIDATION
*/

interface IItemProps {
    final_price: number;
    amount: number;
}

class ItemService {
    async execute({ final_price, amount }: IItemProps){

        const itemAlreadyExists = await ItemModel.findOne({
            where: {
                final_price,
                amount,
            },
        });

        if(itemAlreadyExists){
            throw new Error("Item already exists!");
        }

        const item = await ItemModel.create({
            final_price,
            amount,
        });

        return item;
    }

    async listItems(){
        const items = await ItemModel.findAll();

        return items;
    }

    async getAItem({ id }){
        const item = await ItemModel.findOne({
            where: {
                id
            },
        });

        return item;
    }

    async update(){
        // TO-DO
    }

    async delete(){
        
    }
}

export { ItemService }