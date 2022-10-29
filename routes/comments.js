const express = require('express');
const router = express.Router();
const userData = require('../data/users');
const cmntData = require('../data/comments');
const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
let { ObjectId } = require('mongodb');

router.route('/addlike/')
    .post(async (request,response) => {
           
        try{   
            
            //let cmntId = request.params.cmntId;
            let cmntId = request.body.cmntId;

            if (!cmntId) {
                throw "commentId parameter has to be provided";
              }
              if (typeof cmntId !== 'string' || cmntId.trim().length === 0) {
                throw "commentId should be a string and not an empty string";
              }
              cmntId = cmntId.trim();
          
              if (!ObjectId.isValid(cmntId)) {
                throw "commentId : "+cmntId+" is not a valid ObjectId";
              } 

              if (request.session.user) {
                
                const usersCollection = await users();
                const usrList = await usersCollection.find({username: request.session.user.username}).toArray();
                
                if (usrList.length === 0) 
                {
                    throw 'No user exist with username : ${username}';
                }
                let usrId = usrList[0]._id.toString();

                if (!usrId) {
                    throw "usrId parameter has to be provided";
                  }
                  if (typeof usrId !== 'string' || usrId.trim().length === 0) {
                    throw "usrId should be a string and not an empty string";
                  }
                  usrId = usrId.trim();
              
                  if (!ObjectId.isValid(usrId)) {
                    throw "usrId is not a valid ObjectId";
                  }

                const newLike = await cmntData.addLikeToComments(cmntId, usrId);
                response.status(200).send({status:"User Liked sucessfully"});

                //let url = ''
                //res.redirect(url);

            } else {
                response.status(400).send("User must be logged in to like : ");

                return;

            }
        }
        catch(e){
            response.status(400).send("Error in making a like: "+e.toString());
            return;
        }
       });

       module.exports = router;

