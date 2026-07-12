import React, { useState } from 'react';

export default function StudentForm() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [mothername, setMothername] = useState("");
    const [fathername, setFathername] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("state data in handler function", "fname=", fname, "lname=", lname, "mothername=", mothername, "fathername=", fathername, "mobileno=", mobileno);    
        setSubmitted(true);
    };

    const handleReset = () => {
        setFname("");
        setLname("");
        setMothername("");
        setFathername("");
        setMobileno("");
        setSubmitted(false);
    };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 p-4 p-md-5">
            <div className="card-body">
              <h2 className="text-center mb-4 fw-bold" style={{ color: 'var(--primary)' }}>Student Registration</h2>
              
              {submitted && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  Form submitted successfully! Check console for data.
                  <button type="button" className="btn-close" onClick={() => setSubmitted(false)} aria-label="Close"></button>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted fw-semibold">First Name</label>
                    <input 
                      type="text" 
                      className="form-control"
                      name="firstName"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      required 
                      placeholder="Enter first name"
                       pattern="[a-zA-Z]{1,100}"
                    title="Please enter alphabets"
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label text-muted fw-semibold">Last Name</label>
                    <input 
                      type="text" 
                      className="form-control"
                      name="lastName"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      required 
                      placeholder="Enter last name"
                       
                    title="Please enter alphabets"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold">Father's Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    name="fatherName"
                    value={fathername}
                    onChange={(e) => setFathername(e.target.value)}
                    required 
                    placeholder="Enter father's name"
                     pattern="[a-zA-Z]{1,100}"
                    title="Please enter alphabets"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold">Mother's Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    name="motherName"
                    value={mothername}
                    onChange={(e) => setMothername(e.target.value)}
                    required 
                    placeholder="Enter mother's name"
                     pattern="[a-zA-Z]{1,100}"
                    title="Please enter alphabets"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-muted fw-semibold">Mobile Number</label>
                  <input 
                    type="tel" 
                    className="form-control"
                    name="mobileNo"
                    value={mobileno}
                    onChange={(e) => setMobileno(e.target.value)}
                    required 
                    placeholder="Enter 10-digit mobile number"
                    pattern="[0-9]{10}"
                    title="Please enter exactly 10 digits"
                  />
                </div>
                
                <div className="d-flex gap-3 mt-4">
                  <button type="submit" className="btn btn-primary w-50 py-2">
                    Submit
                  </button>
                  <button type="button" onClick={handleReset} className="btn btn-outline-secondary w-50 py-2">
                    Reset
                  </button>
                </div>

                const Handel
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
