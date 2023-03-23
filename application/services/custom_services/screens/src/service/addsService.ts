import { Request, Response } from 'express';
import {addsDao} from '../dao/addsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let adds = new addsDao();

export class addsService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addsService.ts: GpCreate')
     let  addsData = req.body;
     adds.GpCreate(addsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addsService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addsService.ts: GpGetNounCreatedBy')
     let  addsData = { created_by: req.query.createdby };
     adds.GpGetNounCreatedBy(addsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addsService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}