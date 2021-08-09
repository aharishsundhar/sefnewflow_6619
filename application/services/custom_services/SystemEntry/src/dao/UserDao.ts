import * as mongoose from 'mongoose';
import UserModel from '../models/User';
import { CustomLogger } from '../config/Logger'


export class UserDao {
    private User = UserModel;
    constructor() { }
public (){
new CustomLogger().showLogger('info', 'Enter into UserDao.ts: ')

}


}