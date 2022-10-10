const express = require('express');
const router = express.Router();
const userData = require('../data/users');



router.route('/login')
    .post(async (request,response) => {

        const userName = request.body.username;
        const passwd = request.body.password;

        console.log("userName : "+userName);
        console.log("passwd : "+passwd);
              
        try{
            if(!userName || !passwd){
                throw 'Username, Password (both) have to be provided';
        
            }
            
            userData.userValidationChk(userName);
            userData.userPasswordValidationChk(passwd);
            
            const usrLoginChkResponse = await userData.loginCheck(userName,passwd);
            //console.log("usrLoginChkResponse : "+usrLoginChkResponse);

            if(usrLoginChkResponse === "{authenticated: true}"){
                request.session.user = {username: userName};
                response.status(200).send("User Succesfully logged in");
            }
                      
        }
        catch(e){
            console.log("error : "+typeof e === 'string' ? e : e.message);
            response.status(400).send("Error logging in : "+typeof e === 'string' ? e : e.message);
            return;
        }
       });


       router.route('/logout')
       .get(async (request,response) => {
        if(request.session.user){
            request.session.destroy();
            response.status(200).send("User Succesfully logged out");
        }
        else{
            response.status(400).send("User in not logged in");
            return;
        }
       });
   
    module.exports = router;