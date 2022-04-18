const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const chaiJsonSchemaAjv = require('chai-json-schema-ajv');
chai.use(chaiJsonSchemaAjv);

const menus = require('../schemas/menus')
const orders = require('../schemas/orders')

describe('GET /menus', function () {
    it('should return all menus', function (done) {
      chai.request('http://localhost:8080')
          .get('/menus')
          .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);

          expect(res.body).to.be.jsonSchema(menus)

          done();
      })
    });
    it('should return all orders', function (done) {
      chai.request('http://localhost:8080')
          .get('/orders')
          .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);

          expect(res.body).to.be.jsonSchema(orders)

          done();
      })
    });
});