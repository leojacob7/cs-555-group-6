let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
chai.use(chaiHttp);

var Cookies;
var req;

describe('Users', () => {
 
  /*
  * Test the /POST login
  */
  describe('/POST login', () => {
      it('It should login the user ', (done) => {
          let user = {
            "username": "ssrimant",
            "password" : "Sit#9090"
        }
        chai.request('http://localhost:3000')
            .post('/login')
            .send(user)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('status').eql('User Succesfully logged in');
                  Cookies = res.headers['set-cookie'].pop().split(';')[0];
              done();
            });
      });

  });

   /*
  * Test the /POST addlike
  */
  describe('/POST addlike', () => {
    it('it should addLike ', (done) => {
      let cmntId = {
        "cmntId": "63520558750267624f8f76ec"
    }

       req = chai.request('http://localhost:3000')
          .post('/addlike')
          .send(cmntId);

          req.cookies = Cookies;
          req.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.be.property('status').eql('User Liked sucessfully');
            done();
          });
    });
});

 /*
  * Test the /GET logout
  */
 describe('/GET logout', () => {
  it('it should logout the user', (done) => {
   
     req = chai.request('http://localhost:3000')
        .get('/logout');
        req.cookies = Cookies;
      
        req.end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('status').eql('User Succesfully logged out');
          done();
        });
  });
});


});