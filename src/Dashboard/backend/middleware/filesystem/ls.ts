import { NextFunction, Request, Response } from 'express';
import fs from 'fs'
import path from 'path'

const ls = (dir: string) => {
    const rootDirectory = path.join(__dirname, `../../storage/${dir}`);
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const list = fs.readdirSync(rootDirectory, {withFileTypes: true});
            res.status(200).json({
                state: true,
                result: list
            })
        } catch (error) {
            res.status(200).json({
                state: false,
                result: []
            }) 
        }  
        next()
    }
}

export default ls