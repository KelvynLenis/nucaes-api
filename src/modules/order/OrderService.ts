const OrderModel = require("../../database/models/OrderModel");

/*
    RESPONSIBLE FOR USERS RULES AND VALIDATION
*/

interface IOrderProps {
    status: string;
    date: Date;
}

class OrderService {
    async create({ status, date }: IOrderProps){

        const orderAlreadyExists = await OrderModel.findOne({
            where: {
                status,
                date,
            },
        });

        if(orderAlreadyExists){
            throw new Error("Item already exists!");
        }

        const order = await OrderModel.create({
            status,
            date,
        });

        return order;
    }

    async listOrders(){
        const orders = await OrderModel.findAll();

        return orders;
    }

    async getAOrder({ id }){
        const order = await OrderModel.findOne({
            where: {
                id
            },
        });

        return order;
    }

    async update(){
        // TO-DO
    }

    async delete(){
        
    }
}

export { OrderService }