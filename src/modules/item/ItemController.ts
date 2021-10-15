import { Request, Response } from "express";
import { ItemService } from "./ItemService";

class ItemController {
    async handle(req: Request, res: Response){
        const { final_price, amount } = req.body;

        const itemService = new ItemService();

        const items = await itemService.create({
            final_price,
            amount,
        });

        return res.json(items);
    }

    async list(req: Request, res: Response){
        const itemService = new ItemService();

        const items = await itemService.listItems();

        return res.json(items);
    }

    async get(req: Request, res: Response){
        const { id } = req.params;
        const itemService = new ItemService();

        const item = await itemService.getAItem({ id });

        return res.json(item);
    }
}

export { ItemController }