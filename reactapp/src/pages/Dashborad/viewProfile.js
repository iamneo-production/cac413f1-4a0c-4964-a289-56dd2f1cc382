import './viewPolicy.css';

function  ViewPolicy  () {
  return  (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>View Policy</title>
      {/* Font Awesome Icon Library */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="mypolicy.css" />
      <div className="row cfluid">
        <div className="col-10">
          <div className="subHeader">
            <a
              className="nav-link active clg"
              aria-current="page"
              href="viewPolicy.html"
            >
              View policy
            </a>
            <a
              className="nav-link active clg"
              aria-current="page"
              href="profile1.html"
            >
              Profile
            </a>
            <a
              className="nav-link active clg"
              aria-current="page"
              href="mypolicy.html"
            >
              My Policy
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="container logoutBtn ">
            <a className="navbar-brand" href="#h">
              logout
            </a>
            <a className="navbar-brand" href="addpolicy.html">
              Admin
            </a>
          </div>
        </div>
      </div>
      <div className="row policy_info">
        <div className="col-12 rowctn1">
          <div className="row row-cols-2 ">
            <div className="col ">
              <p className="card-text">Policy name : Health insurance</p>
            </div>
            <div className="col">
              <p className="card-text">Your policy id : 12345679</p>
            </div>
            <div className="col">
              <p className="card-text">Applicable age : 5 to 50</p>
            </div>
            <div className="col">
              <p className="card-text">Policy Details : Lic </p>
            </div>
            <div className="col">
              <p className="card-text">Number of years plan : 10years</p>
            </div>
            <div className="col">
              <p className="card-text">Terms and Conditions : zz</p>
            </div>
            <div className="col">
              <p className="card-text">Clam Amount : 2,00</p>
            </div>
          </div>
        </div>
        <div className="row row-cols-3 btnpl">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col colright">
            <button type="button" className="btn btn-primary btn-sm">
              Select Plan
            </button>
          </div>
        </div>
      </div>
      <div className="row policy_info">
        <div className="col-12 rowctn1">
          <div className="row row-cols-2 ">
            <div className="col ">
              <p className="card-text">Policy name : Health insurance</p>
            </div>
            <div className="col">
              <p className="card-text">Your policy id : 12345679</p>
            </div>
            <div className="col">
              <p className="card-text">Applicable age : 5 to 50</p>
            </div>
            <div className="col">
              <p className="card-text">Policy Details : Lic </p>
            </div>
            <div className="col">
              <p className="card-text">Number of years plan : 10years</p>
            </div>
            <div className="col">
              <p className="card-text">Terms and Conditions : zz</p>
            </div>
            <div className="col">
              <p className="card-text">Clam Amount : 2,00</p>
            </div>
          </div>
        </div>
        <div className="row row-cols-3 btnpl">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col colright">
            <button type="button" className="btn btn-primary btn-sm">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default  ViewPolicy;
  