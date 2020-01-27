const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

const url = "http://localhost:3000";

describe("Request Test", () => {
  it("request to server", done => {
    chai
      .request(url)
      .get("/")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("GET", () => {
  it("fetch all users", done => {
    chai
      .request(url)
      .get("/users")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("fetch one user", done => {
    chai
      .request(url)
      .get("/users")
      .query({ id: 1 })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body[0]).to.deep.equal({
          id: 1,
          name: "Dongho",
          age: 27,
          job: "Developer"
        });
        done();
      });
  });
});

// describe("POST", () => {
//     it("add user", done => {
//       chai
//         .request(url)
//         .post("/users")
//         .send({ id: 4, name: "Marshall", age: 45, job: "musician" })
//         .end((err, res) => {
//           expect(err).to.be.not.ok;
//           expect(res).to.have.status(201);
//           user = res.body;
//           done();
//         });
//     });
// });

describe("PUT", () => {
  it("update user", done => {
    chai
      .request(url)
      .put("/users/2")
      .send({ id: 2, name: "Kristina", age: 26, job: "seller" })
      .end((err, res) => {
        expect(err).to.be.not.ok;
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("DELETE", () => {
  it("delete user", done => {
    chai
      .request(url)
      .delete("/users/4")
      .end((err, res) => {
        expect(err).to.be.not.ok;
        expect(res).to.have.status(200);
        done();
      });
  });
});
