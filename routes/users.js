const express = require('express');
const router = express.Router();
const userData = require('../data/users');



router.route('/login')
    .post(async (request,response) => {

        const userName = request.body.username;
        const passwd = request.body.password;
              
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
            response.status(400).send("Error logging in : "+e);
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