import { UserModel } from './UserModel';

export const SyncModels = () => {
    UserModel.sync();
}