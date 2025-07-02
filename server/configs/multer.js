import multer from "multer";

// multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.
// It is used in the server-side code to handle file uploads, such as product images in this case.

export const upload = multer({ storage: multer.diskStorage({}) });
