const Check = () => {
  return (
      <div className="container_hero">
          <div className="row">
              <div className="col-sm-12">
                  <img
                      src="https://picsum.photos/id/1056/1424/562"
                      alt="test"
                      className="img-fluid"
                  />
                  <div className="heroContent">
                      <h1>Jumbotron H1 goes here</h1>
                      <p className="pHero">
                          This is the first line in the jumbotron.
                          <br />
                          The second line appears underneath the first line.
                      </p>
                      <button type="button" className="btn btn-primary">
                          Chat With Us
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Check;
