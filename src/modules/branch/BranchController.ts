import { Request, Response } from "express";
import { BranchService } from "./BranchService";

interface IBranchProps {
    phonenumber: string;
    schedule: string;
    description: Text;
    zipcode: string;
    state: string;
    city: string;
    street: string
}

class BranchController {
    async handle(req: Request, res: Response){
        const { phonenumber, schedule, description, zipcode, state, city, street } = req.body;

        const branchService = new BranchService();

        const branches = await branchService.create({
            phonenumber,
            schedule,
            description,
            zipcode,
            state,
            city,
            street
        });

        return res.json(branches);
    }

    async list(req: Request, res: Response){
        const branchService = new BranchService();

        const branches = await branchService.listBranches();

        return res.json(branches);
    }

    async get(req: Request, res: Response){
        const { id } = req.params;

        const branchService = new BranchService();

        const branch = await branchService.getABranch({
            id 
        });

        return res.json(branch);
    }
}

export { BranchController }