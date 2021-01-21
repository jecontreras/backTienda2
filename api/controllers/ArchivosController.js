/**
 * ArchivosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let Procedures = Object();
const skipper = require('skipper-better-s3'); //require('skipper-s3');
Procedures.file = async(req, res)=>{

    /*req.file('file').upload({
      dirname: require('path').resolve(sails.config.appPath, 'assets/images')
    },function (err, uploadFiles) {
      if (err) return res.serverError(err);
      //sails.log.info(98, uploadFiles);
      uploadFiles = uploadFiles[0].fd;
      uploadFiles = (uploadFiles.split("images"))[1];
      res.ok('images'+uploadFiles);
    });*/
    // return res.ok({
    //     status: 200,
    //     files: "https://i.postimg.cc/G2D8pVg3/018c0b26-4206-433c-8cef-943d3426e550.jpg",
    //     textParams: req.allParams()
    // });
     req.file('file').upload({
       adapter: skipper,
       key: 'AKIAJAN2FGXT4W6WA4QA',
       secret: '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',
       s3params:{ ACL: 'public-read' },
       bucket: 'fotosmas',
     }, async (err, filesUploaded) => {
         if (err) return res.serverError(err);
        //   console.log(filesUploaded[0].extra)
         return res.ok({
             status: 200,
             files: filesUploaded[0].extra.Location,
             textParams: req.allParams()
         });
     });

    /*req.file('file').upload({
        //dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        dirname: require('path').resolve(sails.config.appPath, '.tmp/public/images')
    },function (err, uploadFiles) {
        if(err){
            return reject(err);
        }
        // sails.log.info(98, uploadFiles);
        req.file('file').upload(function (err, uploadFiles) {
            if(err){
                return reject(err);
            }
            // sails.log.info(98, uploadFiles);
            uploadFiles = uploadFiles[0].fd;
            uploadFiles = (uploadFiles.split("images"))[1];
            res.ok('images'+uploadFiles);
        })
        ;
        //res.ok(uploadFiles);
    })
    ;*/
}

module.exports = Procedures;

