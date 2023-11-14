import Express from 'express';

class RootController {
    getInitialData(req: Express.Request, res:Express.Response){
        res.status(200).json({
            someData: 'data'
        })
    }
}

export default new RootController()