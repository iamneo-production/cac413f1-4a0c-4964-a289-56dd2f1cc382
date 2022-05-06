import './Register.css';

function Register() {
  return (
    <div>
    <link rel="stylesheet" href="register.css" />
    <title>Regsiter</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    {/* Font Awesome */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
    <br />
    <div>
      <section className="container min-container mt-5 " style={{width: '450px'}}>
        <div className="card-panel p-sm-5 position-relative">
          <div className="text-center">
            <h2 className="mt-2">Register!</h2><br />
            <img alt="" width="45px" src="signuplogo.png" />
          </div>
          <form id="SignupForm" className="mt-4">
            <div className="form-group position-relative">
              <input className="form-control input-lg" id="admin/user" name="admin" type="text" placeholder="Admin/User" maxLength={5} required />
              <i className="fa fa-user fa-lg position-absolute" />
            </div>
            <br />
            <div className="form-group position-relative">
              <input className="form-control input-lg" id="email" name="email" type="email" placeholder="Enter email address" maxLength={50} required />
              <i className="fa fa-envelope fa-lg position-absolute" />
            </div>
            <br />
            <div className="form-group position-relative">
              <input className="form-control input-lg" id="username" name="username" type="text" placeholder="Enter Username" maxLength={20} required />
              <i className="fa fa-user fa-lg position-absolute" />
            </div>
            <br />
            <div className="form-group position-relative">
              <input className="form-control input-lg" id="mobileNumber" name="mobileNumber" type="number" placeholder="Enter Mobile Number" maxLength={20} required />
              <i className="fa fa-mobile fa-lg position-absolute" />
            </div>
            <br />
            <div className="form-group position-relative">
              <input className="form-control input-lg" id="password" name="password" type="password" placeholder="Password" maxLength={20} required />
              <i className="fa fa-lock fa-lg position-absolute" />
            </div>
            <br />
            <div className="form-group position-relative">
              <input className="form-control input-lg" id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" maxLength={20} required />
              <i className="fa fa-lock fa-lg position-absolute" />
            </div>
            <br />
            <div className="text-center my-4">
              <button id="submitButton" type="button" className="btn btn-primary" name="submitButton">Submit</button>
            </div>
          </form>
          <p className="mt-3 text-center">
            Already a User? <a href="rename.html" className="custom_color">Login</a>
          </p>
        </div>
      </section>
    </div></div>
  );
}

export default Register;