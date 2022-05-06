import './AdminPolicyDetail.css';

function AdminPolicyDetail() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <title>View Policy</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    {/* Font Awesome Icon Library */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
    <link rel="stylesheet" href="adminPolicyDetail.css" />
    <nav className="navbar navbar-expand-lg nav-con">
      <div className="container-fluid">
        {/* <div class="nav-cont"> */}
        <div className="flex-grow-1">
          <a href="#1" className="navbar-brand brand">HIP</a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link act" aria-current="page" href="addpolicy.html">Add Policy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="policyDetail.html">Policy Details</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="ApplicantDetails.html">Applicants Details</a>
            </li>
          </ul>
          <button className="btn">Logout</button>
          <button className="btn">
            <a className="nav-link" href="rename.html">LogIn</a>
          </button>
        </div>
      </div>
    </nav>
    <div className="row serBar">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Type Here To Search Policy" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
      </div>
    </div>
    <div className="row policy_info">
      <div className="col-12 rowctn1">
        <div className="row row-cols-2 ">
          <div className="col ">
            <p className="card-text">Policy name    : Health insurance</p>
          </div>
          <div className="col">
            <p className="card-text">Your policy id   : 12345679</p>
          </div>
          <div className="col">
            <p className="card-text">Applicable age   : 5 to 50</p>
          </div>
          <div className="col">
            <p className="card-text">Policy Details    : Lic </p>
          </div>
          <div className="col">
            <p className="card-text">Number of years plan    : 10years</p>
          </div>
          <div className="col">
            <p className="card-text">Terms and Conditions   : zz</p>
          </div>
          <div className="col">
            <p className="card-text">Clam Amount    : 2,00</p>
          </div>
        </div>
      </div>
      <div className="row row-cols-3 btnpl">
        <div className="col">
        </div>
        <div className="col">
        </div>
        <div className="col colright">
          <i className="fa fa-trash" />
          <i className="fa fa-edit" />
        </div>
      </div>
    </div>
    <div className="row policy_info">
      <div className="col-12 rowctn1">
        <div className="row row-cols-2 ">
          <div className="col ">
            <p className="card-text">Policy name    : Health insurance</p>
          </div>
          <div className="col">
            <p className="card-text">Your policy id   : 12345679</p>
          </div>
          <div className="col">
            <p className="card-text">Applicable age   : 5 to 50</p>
          </div>
          <div className="col">
            <p className="card-text">Policy Details    : Lic </p>
          </div>
          <div className="col">
            <p className="card-text">Number of years plan    : 10years</p>
          </div>
          <div className="col">
            <p className="card-text">Terms and Conditions   : zz</p>
          </div>
          <div className="col">
            <p className="card-text">Clam Amount    : 2,00</p>
          </div>
        </div>
      </div>
      <div className="row row-cols-3 btnpl">
        <div className="col">
        </div>
        <div className="col">
        </div>
        <div className="col colright">
          <i className="fa fa-trash" />
          <i className="fa fa-edit" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default AdminPolicyDetail;