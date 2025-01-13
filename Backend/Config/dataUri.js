import DataUriParser from "datauri/parser.js";
import path from 'path';

const getDataUri = (file) => {
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname); // Fixed typo (originalname instead of orginalname)
  return parser.format(extName, file.buffer); // Create and return data URI
};

export default getDataUri;
