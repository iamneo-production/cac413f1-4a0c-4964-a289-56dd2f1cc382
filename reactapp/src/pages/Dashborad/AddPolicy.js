import './addPolicy.css';

function AddPolicy () {
  return   (

    
    <>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      {/* Custome CSS */}
      <link rel="stylesheet" href="addpolicy.css" />
      <title>Admin DashBoard | Add Policy</title>
      <nav className="navbar navbar-expand-lg nav-con">
        <div className="container-fluid">
          {/* <div class="nav-cont"> */}
          <div className="flex-grow-1">
            <a href="#" className="navbar-brand brand">
              HIP
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link act" aria-current="page" href="#">
                  Add Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="policyDetail.html">
                  Policy Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="ApplicantDetails.html">
                  Applicants Details
                </a>
              </li>
            </ul>
            <button className="btn">Logout</button>
            <button className="btn">
              <a className="nav-link" href="rename.html">
                LogIn
              </a>
            </button>
          </div>
        </div>
      </nav>
      <main>
        <section>
          <div className="policy-con">
            <form action="" className="row m-5 form-con">
              <div className="col-md-6 ml-2">
                <input
                  type="text"
                  name="Policy Name"
                  id="policyName"
                  placeholder="Enter Policy Name"
                  className="form-control form-ip"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="Age"
                  id="applicableAge"
                  placeholder="Enter Applicable Age"
                  className="form-control form-ip"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="rateOfIntrest"
                  id="rateOfIntrest"
                  placeholder="Enter rate Of Intrest"
                  className="form-control form-ip"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="Amount"
                  id="claimAmount"
                  placeholder="Enter Claim Amount"
                  className="form-control form-ip"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="number"
                  name="years"
                  id="noOfYearsPlan"
                  placeholder="Enter No Of Years Plan"
                  className="form-control form-ip"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  name="policy Details"
                  id="enterPolicyDetails"
                  cols={20}
                  rows={3}
                  className="form-control form-ip"
                  placeholder="Enter policy Details"
                  defaultValue={""}
                />
              </div>
              <div className="col-md-12">
                <textarea
                  name="terms and conditions"
                  id="enterTermsAndConditions"
                  cols={20}
                  rows={7}
                  className="form-control form-ip"
                  placeholder="Enter terms and conditions"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary"
                  id="addPolicyButton"
                  type="submit"
                >
                  Add Policy
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      {/* Optional JavaScript; choose one of the two! */}
      {/* Option 1: Bootstrap Bundle with Popper */}
    </>
  );
    }
    export default AddPolicy;
    

  