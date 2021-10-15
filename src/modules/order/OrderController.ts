import { Request, Response } from "express";
import { OrderService } from "./OrderService";

class OrderController {
    async handle(req: Request, res: Response){
        const { status, date } = req.body;

        const orderService = new OrderService();

        const orders = await orderService.execute({
            status,
            date,
        });

        return res.json(orders);
    }

    async list(req: Request, res: Response){
        const orderService = new OrderService();

        const orders = await orderService.listOrders();

        return res.json(orders);
    }

    async get(req: Request, res: Response){
        const { id } = req.params;

        const orderService = new OrderService();

        const order = await orderService.getAOrder({ id });

        return res.json(order);
    }
}

export { OrderController }