import { NextFunction, Request, Response } from 'express';
import fs from 'fs'
import path from 'path'

const rmdir = (dir: string) => {

    const rootDirectory = path.join(__dirname, `../../storage/${dir}`);

    return (req: Request, res: Response, next: NextFunction) => {

        if(fs.existsSync(rootDirectory)){
            try {
                fs.rmdirSync(rootDirectory, {recursive: true})
                res.status(200).json({
                    state: true,
                    msg: 'Directory remove successfully.',
                    error: null
                })
            } catch (error) {
                res.status(200).json({
                    state: false,
                    msg: 'Directory remove terminated!',
                    error: error
                })
            }
        }
        next()
    }
}

export default rmdir