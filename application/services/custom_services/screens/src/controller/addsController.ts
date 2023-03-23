import { Request, Response } from 'express';
import { addsService } from '../service/addsService';
import { CustomLogger } from '../config/Logger'
let adds = new addsService();

export class addsController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    adds.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addsController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    adds.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addsController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addsController.ts: GpGetNounCreatedBy');
    })}


}