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

  it('posts messages', done => {
    const data = { name: 'some name', message: 'new message' };
    // make a post request with const data
    server
      .post(`${BASE_URL}/messages`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        // expect a status of 200 and returned array
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        // for each array we assert it contains id, name, message
        res.body.messages.forEach(m => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('name', data.name);
          expect(m).to.have.property('message', data.message);
        });
        done();
      });
  });
});
