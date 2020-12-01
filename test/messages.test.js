import { expect, server, BASE_URL } from './setup';

describe('Messages', () => {
  it('get messages page', done => {
    server
      .get(`${BASE_URL}/messages`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        // expect result of call to message to be an array
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach(m => {
          // for each message we assert it has a name and message property.
          expect(m).to.have.property('name');
          expect(m).to.have.property('message');
        });
        done();
      });
  });
});
