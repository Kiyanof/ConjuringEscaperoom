import path from 'path';
import multer from 'multer';
import { Request } from 'express';
import { getDate } from '../../utils/date';

const uploadFile = (uploadDir: string = '', prefix: string = getDate() + '_') => {
  const storage = multer.diskStorage({
    destination: (req: Request, file, cb) => {
      cb(null, path.join(__dirname, `../../storage/${uploadDir}`));
    },
    filename: (req: Request, file, cb) => {

      cb(null, prefix + file.originalname);
    },
  });

  return multer({ storage });
};

export default uploadFile;
