import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

/*
    Create directory on ./storage/{newDirs} to control access on storage dir
*/
const storageDir = process.env.STORAGE_PATH

const createDir = (directroyPath: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const fullPath = path.join(__dirname, `../../${storageDir}/`, directroyPath);

        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true });
        }

        next();
    };
};

export default createDir;
