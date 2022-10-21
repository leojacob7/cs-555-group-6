const bcrypt = require('bcrypt');
const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const salt = 12;

const errChkIsStr = function errChkIsStr(inputStr){
    if(typeof inputStr !== 'string'){
        throw inputStr+", in the argument is not a string";
    }
}

const userValidationChk = function userValidationChk(userName){
    
    errChkIsStr(userName);
   
    if(/\s/g.test(userName)){
        throw "Username should not contain empty spaces"
    }
    
    if(userName.length < 4){
        throw "Length of username : "+userName+", in the argument should have atleast 4 characters";
    }
   
    if(!userName.match("^[a-zA-Z0-9_]*$")){
        throw(userName+": is not valid, Username should have only Alphanumeric characters");
    }
   
}

const userPasswordValidationChk = function userPasswordValidationChk(passwd){
    
    errChkIsStr(passwd);
   
    if(/\s/g.test(passwd)){
        throw "Password should not contain empty spaces"
    }
    
    if(passwd.length < 6){
        throw "Length of Password : "+passwd+"  in the argument should have atleast 6 characters";
    }
    
}


module.exports = {
    
    async loginCheck(userName, password){
        if(arguments.length < 2){
            throw "Username, Password (both) have to be provided";
        }
        if(arguments.length > 2){
            throw "Too many Aruguments, should pass two arguments";
        }
        
        userValidationChk(userName);
        userPasswordValidationChk(password);
        

        const usersCollection = await users();
        const loginUser = await usersCollection.findOne({ username: userName.toLowerCase()});
        if (loginUser === null || loginUser === undefined) {
        throw "Either the Username or Password is invalid";
        }
        let comparePasswd = false;
        comparePasswd = await bcrypt.compare(password, loginUser.password);
        if(!comparePasswd){
            throw "Either Username or Password provided is invalid";
        }
        return "{authenticated: true}";

    },
    userValidationChk,
    userPasswordValidationChk
}
