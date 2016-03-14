/* NOTE: part of this feels as if I'm testing express-restify-mongoose, but I think all the tests should be run
to make sure that the model is setup correctly*/

const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

const app = require('../lib/app');
const Employee = require('../models/Img');
const expect = chai.expect;

const mongoose = require('mongoose');

chai.use(chaiHttp);

describe ('Image Gallery REST API', () => {
  var testJson = {
    url: "http://testing.test.png",
    caption: "testing"
  }

  before((done) => {
    const db = mongoose.connection;
    mongoose.connect('mongodb://localhost/test');
    db.once('open', () => {
      done();
    });
  });

  //POST
  it('should post the json obj to database and return the json obj back', (done) => {

    chai.request(app)
        .post('/api/v1/images')
        .send(testJson)
        .end((err, res) => {
          expect(err).to.be.null;
          var receivedObj = res.body;
          Object.keys(testJson).forEach((key) => {
            assert.equal(testJson[key], receivedObj[key], `it failed at ${key}`);
          });
          done();
        });
  });

  //GET
  it('should get an array of json objects back with /GET', (done) => {
    chai.request(app)
        .get('/api/v1/images')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.length).to.not.be.undefined;
          done();
        });
  });

});
