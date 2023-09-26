import { NextFunction, Request, Response } from 'express';
import fs from 'fs'
import path from 'path'

const rm = (dir: string) => {

    const rootDirectory = path.join(__dirname, `../../storage/${dir}`);

    return (req: Request, res: Response, next: NextFunction) => {

        if(fs.existsSync(rootDirectory)){
            try {
                fs.unlinkSync(rootDirectory)
                res.status(200).json({
                    state: true,
                    msg: 'File remove successfully.',
                    error: null
                })
            } catch (error) {
                res.status(200).json({
                    state: false,
                    msg: 'File remove terminated!',
                    error: error
                })
            }
        }
        next()
    }
}

export default rm