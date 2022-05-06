import './profile1.css';

function Myprofile() {
    return (
      <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <link rel="stylesheet" href="profile1.css" />
      <title>Document</title>
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
            <a className="nav-link active clg" aria-current="page" href="#">
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
          <div className="container logoutBtn">
            <a className="navbar-brand" href="#">
              logout
            </a>
            <a className="navbar-brand" href="addpolicy.html">
              Admin
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="form-container">
          <form>
            <div className="input-name">
              <input
                type="text"
                className="name"
                placeholder="Enter Applicant Name"
              />
              <span>
                <input
                  type="text"
                  className="name"
                  placeholder="Enter Applicant Age"
                />
              </span>
            </div>
            <div className="input-name">
              <input
                type="text"
                className="Add"
                placeholder="Enter Applicant Address"
                required=""
              />
              <span>
                <input
                  type="text"
                  className="Add"
                  placeholder="Enter Applicant insurance ongoing id"
                  required=""
                />
              </span>
            </div>
            <div className="input-name">
              <input
                type="text"
                className="text-name"
                placeholder="Enter Applicant Mobile"
                required=""
              />
            </div>
            <div className="input-name">
              <input
                type="text"
                className="text-name"
                placeholder="Enter Applicant Email"
                required=""
              />
            </div>
            <div className="input-name">
              <input
                type="text"
                className="text-name"
                placeholder="Enter Applicant Adhaar no."
                required=""
              />
            </div>
            <div className="input-name">
              <input type="submit" className="button" defaultValue="1 | 2" />
            </div>
          </form>
        </div>
      </div>
      </div>
    
  );
    }
  export default Myprofile
  