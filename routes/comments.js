const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');
const verifyToken = require('../utils/verifyToken');

// router.route('/addlike/').post(async (request, response) => {
// 	try {
// 		//let cmntId = request.params.cmntId;
// 		let cmntId = request.body.cmntId;

// 		if (!cmntId) {
// 			throw 'commentId parameter has to be provided';
// 		}
// 		if (typeof cmntId !== 'string' || cmntId.trim().length === 0) {
// 			throw 'commentId should be a string and not an empty string';
// 		}
// 		cmntId = cmntId.trim();

// 		if (!ObjectId.isValid(cmntId)) {
// 			throw 'commentId : ' + cmntId + ' is not a valid ObjectId';
// 		}

// 		if (request.session.user) {
// 			const usersCollection = await users();
// 			const usrList = await usersCollection
// 				.find({ username: request.session.user.username })
// 				.toArray();

// 			if (usrList.length === 0) {
// 				throw 'No user exist with username : ${username}';
// 			}
// 			let usrId = usrList[0]._id.toString();

// 			if (!usrId) {
// 				throw 'usrId parameter has to be provided';
// 			}
// 			if (typeof usrId !== 'string' || usrId.trim().length === 0) {
// 				throw 'usrId should be a string and not an empty string';
// 			}
// 			usrId = usrId.trim();

// 			if (!ObjectId.isValid(usrId)) {
// 				throw 'usrId is not a valid ObjectId';
// 			}

// 			const newLike = await cmntData.addLikeToComments(cmntId, usrId);
// 			response.status(200).send({ status: 'User Liked sucessfully' });

// 			//let url = ''
// 			//res.redirect(url);
// 		} else {
// 			response.status(400).send('User must be logged in to like : ');

// 			return;
// 		}
// 	} catch (e) {
// 		response.status(400).send('Error in making a like: ' + e.toString());
// 		return;
// 	}
// });

router.post('/', async (req, res) => {
	const commentId = req.body.comment;

	if (!commentId) {
		return res.status(400).send({
			error: 'CommentID must be provided!',
		});
	}

	try {
		if (ObjectId.isValid(commentId)) {
			const comment = await Comment.findById(commentId).populate([
				'user',
				'post',
				'replies',
				'hearts',
			]);

			return res.send({ comment });
		} else {
			return res
				.status(400)
				.send({ error: 'UserID is not a valid ObjectId' });
		}
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

router.post('/replies', async (req, res) => {
	const commentId = req.body.comment;

	if (!commentId) {
		return res.status(400).send({
			error: 'CommentID must be provided!',
		});
	}

	try {
		if (ObjectId.isValid(commentId)) {
			const comment = await Comment.findById(commentId).populate({
				path: 'replies',
				populate: { path: 'user', model: 'User' },
			});

			return res.send({ replies: comment.replies });
		} else {
			return res
				.status(400)
				.send({ error: 'UserID is not a valid ObjectId' });
		}
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

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
       router.route('/adddislike/')
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

                const newLike = await cmntData.addDisLikeToComments(cmntId, usrId);
                response.status(200).send({status:"User DisLiked sucessfully"});

                //let url = ''
                //res.redirect(url);

            } else {
                response.status(400).send("User must be logged in to dislike : ");

                return;

            }
        }
        catch(e){
            response.status(400).send("Error in making a Dislike: "+e.toString());
            return;
        }
       });


module.exports = router;