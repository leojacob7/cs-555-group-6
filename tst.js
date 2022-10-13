const userData = require('./data/users');
const bcrypt = require('bcrypt');
const saltRounds = 12;
async function main(){
  
    try{
        const hashedPassword =  await bcrypt.hash("Sit#9090", saltRounds);
        console.log("hashedPassword : "+hashedPassword);
    }
    catch(e){
        console.error("Rejected : "+e);
        }
        


}
main()