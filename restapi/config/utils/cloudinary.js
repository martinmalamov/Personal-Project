const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'tender',
    api_key: '182447728618774',
    api_secret: 'sLYtqV81nV1El_5HHo9LWiVBthE',
    // cloud_name: process.env.CLOUDINARY_NAME,
    // api_key: process.env.CLOUDINARY_API_KEY,
    // api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = { cloudinary };