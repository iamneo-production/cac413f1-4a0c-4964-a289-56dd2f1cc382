import './ApplicantDetails.css';

function ApplicantDetails() {
  return (
    <div>
    {/* Required meta tags */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Bootstrap CSS */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
    {/* Custome CSS */}
    <link rel="stylesheet" href="ApplicantDetails.css" />
    <title>Admin DashBoard | Add Policy</title>
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
              <a className="nav-link" href="#1">Policy Details</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="ApplicantDetails.html">Applicants Details</a>
            </li>
          </ul>
          <button className="btn">Logout</button>
          <button className="btn">
            <a className="nav-link" href="rename.html">Login</a>
          </button>
        </div>
      </div>
    </nav>
    <div id="first">
      <input type="text" id="fpolicy" placeholder="Enter Applicant Name" /><br />
      <input type="text" id="fage" placeholder="Enter Applicant Address" /><br />
      <input type="text" id="fclaim" placeholder="Enter Applicant Mobile" /><br />
      <input type="text" id="fyears" placeholder="Enter Applicant Email Id" /><br />
      <input type="text" id="fclaim" placeholder="Enter Applicant Aadhar No" /><br />
      <input type="text" id="fclaim" placeholder="Enter the Applicant age" /><br />
      <input type="text" id="fclaim" placeholder="Applicants insurance ongoing id" /><br />
    </div>
    <div id="second">
      <br /><br />
      <label id="rates">Upload documents(Mandatory*)</label><br />
      <select id="rate">
        <option>Please pick a type</option>
        <option>Aadhar</option>
        <option>Driving licence</option>
        <option>Voter card</option>
      </select><br />
      <label id="detail">Images or Documents (Upload below 2mb)</label><br />
      <div className="file-upload">
        <div className="file-select">
          <div className="file-select-button" id="fileName">Choose File</div>
          <div className="file-select-name" id="noFile">No file chosen...</div>
          <input type="file" name="chooseFile" id="chooseFile" />
        </div>
      </div>
      <br />
      <button type="Submit" className="ggwp">Upload documents</button><br />
      <button type="submit" className="update">Update</button>
    </div>
    {/* Optional JavaScript; choose one of the two! */}
    {/* Option 1: Bootstrap Bundle with Popper */}
  </div>
  );
}

export default ApplicantDetails;