const BranchModel = require("../../database/models/BranchModel");

/*
    RESPONSIBLE FOR BRANCH RULES AND VALIDATION
*/

interface IBranchProps {
    phonenumber: string;
    schedule: string;
    description: string;
    zipcode: string;
    state: string;
    city: string;
    street: string
}

class BranchService {
    async create({phonenumber, schedule, description, zipcode, state, city, street }: IBranchProps){

        const branchAlreadyExists = await BranchModel.findOne({
            where: {
                phonenumber,
                schedule,
                description,
                zipcode,
                state,
                city,
                street
            },
            // includes: [EnterpriseModel]
        });

        if(branchAlreadyExists){
            throw new Error("Branch already exists!");
        }

        const branch = await BranchModel.create({
            phonenumber,
            schedule,
            description,
            zipcode,
            state,
            city,
            street
        });

        return branch;
    }

    async listBranches(){
        const branches = await BranchModel.findAll();

        return branches;
    }

    async getABranch({id}){
        const branch = await BranchModel.findOne({
            where: {
                id
            },
            // includes: [EnterpriseModel]
        });

        return branch;
    }

    async update(){
        // TO-DO
    }

    async delete(){

    }
}

export { BranchService }