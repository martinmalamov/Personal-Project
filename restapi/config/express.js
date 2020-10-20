const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';

const { cloudinary } = require('./utils/cloudinary');

module.exports = (app) => {
    app.use(cors({
        exposedHeaders:'Authorization'
    }));

    app.use(express.json())
    app.use(express.urlencoded({
        extended:true
    }))

    app.use(cookieParser(secret))


    // app.get('/api/images', async (req, res) => {
    //     const { resources } = await cloudinary.search
    //         .expression('folder:martin')
    //         .sort_by('public_id', 'desc')
    //         .max_results(30)
    //         .execute();
            
    
    //     const publicIds = resources.map((file) => file.public_id);
    //     res.send(publicIds);
    // });

    // app.post('/api/upload', async (req, res) => {
    //     try {
    //         const fileStr = req.body.data;
    //         console.log('FileSTR from SERVER(9000)', fileStr)
    //         const uploadResponse = await cloudinary.uploader.upload(fileStr, {
    //             upload_preset: 'martin',
    //         });
    //         console.log(uploadResponse);
    //         res.json({ msg: 'yaya' });
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ err: 'Something went wrong' });
    //     }
    // });

}