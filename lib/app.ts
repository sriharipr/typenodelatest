import * as express from 'express';
import * as bodyparser from 'body-parser';
import { Request, Response } from 'express';
class App {

  constructor() {
    this.app = express();
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({extended:false}));
    this.routes();
  }
  public app: express.Application;

  private routes () : void{
    const router = express.Router();
    router.get('/',(req:Request, res:Response) => {
      res.status(200).send({
        message: 'Hellow ts node srcp world!!!'
      })
    })

    router.post('/',(req:Request, res:Response) => {
      const data = req.body;
      res.status(200).send(data);
    })

    this.app.use('/', router);

  }

}

export default new App().app;
