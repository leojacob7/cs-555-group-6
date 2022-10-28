const express = require('express');
const { ConnectionClosedEvent } = require('mongodb');
const router = express.Router();
const userData = require('../data/users');

router.route('/login').post(async (request, response) => {
	const userName = request.body.username;
	const passwd = request.body.password;

	try {
		if (!userName || !passwd) {
			throw 'Username, Password (both) have to be provided';
		}

		userData.userValidationChk(userName);
		userData.userPasswordValidationChk(passwd);

		const usrLoginChkResponse = await userData.loginCheck(userName, passwd);
		//console.log("usrLoginChkResponse : "+usrLoginChkResponse);

            if (usrLoginChkResponse === '{authenticated: true}') {
                request.session.user = { username: userName };
                response.status(200).json({status:'User Succesfully logged in'});
            }
        } catch (e) {
            response.status(400).json('Error logging in : ' + e);
            return;
        }
    });

router.route('/logout').get(async (request, response) => {
	if (request.session.user) {
		request.session.destroy();
		response.status(200).json('User Succesfully logged out');
	} else {
		response.status(400).json('User in not logged in');
		return;
	}
});

<<<<<<< HEAD
       router.route('/logout')
       .get(async (request,response) => {
        if(request.session.user){
            request.session.destroy();
            response.status(200).send({status:"User Succesfully logged out"});
        }
        else{
            response.status(400).send("User in not logged in");
            return;
        }
       });
   
    module.exports = router;
=======
module.exports = router;
>>>>>>> 4f559e1f66919c53c3300cbb35c1c94797da7209
