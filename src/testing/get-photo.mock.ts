import { join } from 'path';
import { getFileToBuffer } from './file-to-buffer';

export const getPhoto = async () => {
  const { buffer, stream } = await getFileToBuffer(join(__dirname, 'photo.png'));
  const photo: Express.Multer.File = {
    fieldname: 'file',
    originalname: 'photo.png',
    encoding: '7bit',
    mimetype: 'image/png',
    size: 1024 * 50,
    stream: stream,
    destination: '',
    filename: 'file-name',
    path: 'file-path',
    buffer: buffer,
  };
  return photo;
};