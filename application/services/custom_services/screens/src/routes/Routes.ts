import { Request, Response, NextFunction } from "express";
import { addsController } from '../controller/addsController';


export class Routes {
    private adds: addsController = new addsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/adds').post(this.adds.GpCreate);
app.route('/adds/userid/created_by').get(this.adds.GpGetNounCreatedBy);
     }

}