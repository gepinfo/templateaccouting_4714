import * as mongoose from 'mongoose';
import addsModel from '../models/daomodels/adds';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class addsDao {
    private adds = addsModel;
    constructor() { }
    
    public async GpCreate(addsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addsDao.ts: GpCreate');

    let temp = new addsModel(addsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from addsDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(addsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addsDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.adds.aggregate(([
                        { $match: { $and: [{ created_by: addsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from addsDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}