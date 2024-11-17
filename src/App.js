// import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    state: "",
    zip_code: "",
    cno: "",
    email: "",
    gender: "Male",
    photo: "",
    aadhar: "",
    declare: "",
  });

  const handleChange = (event) => {
    const { name, type } = event.target;

    if (type === "file") {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      const { value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("Basic-Information", JSON.stringify(formData));
    alert("Data saved in your Local Storage");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center my-4 ">Basic Information</h1>
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="fname" className="form-label fs-5">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter first name"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="mname" className="form-label fs-5">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mname"
                  placeholder="Enter middle name"
                  name="mname"
                  value={formData.mname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="lname" className="form-label fs-5">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter last name"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="mb-3">
                <label htmlFor="address" className="form-label fs-5">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mb-3">
                <label htmlFor="apartment" className="form-label fs-5">
                  Apartment
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apartment"
                  placeholder="Enter apartment"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="city" className="form-label fs-5">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="select" className="form-label fs-5">
                  Country
                </label>
                <select
                  className="form-select"
                  id="select"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select Your Country</option>
                  <option value="United-States">United States</option>
                  <option value="India">India</option>
                  <option value="United-Kingdom">United Kingdom</option>
                  <option value="Japan">Japan</option>
                  <option value="China">China</option>
                  <option value="Russia">Russia</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="state" className="form-label fs-5">
                  State
                </label>
                <select
                  className="form-select"
                  id="select"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select Your State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                </select>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="mb-3">
                <label htmlFor="zip_code" className="form-label fs-5">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip_code"
                  placeholder="Enter zip code"
                  name="zip_code"
                  value={formData.zip_code}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="mb-3">
                <label htmlFor="cno" className="form-label fs-5">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cno"
                  placeholder="Enter contact number"
                  name="cno"
                  value={formData.cno}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label fs-5">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-12 ">
              <label htmlFor="gender" className="form-label fs-5">
                Gender
              </label>
              <div className="row my-2">
                <div className="col-xl-2 col-md-3">
                  <div className="form-check form-check-inline d-flex justify-content-center align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      onChange={handleChange}
                      checked={formData.gender === "Male"}
                    />
                    <label className="form-check-label fs-5" htmlFor="male">
                      Male
                    </label>
                  </div>
                </div>
                <div className="col-xl-2 col-md-3">
                  <div className="form-check form-check-inline d-flex justify-content-center align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      onChange={handleChange}
                      checked={formData.gender === "Female"}
                    />
                    <label className="form-check-label fs-5" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
                <div className="col-xl-2 col-md-3">
                  <div className="form-check form-check-inline d-flex justify-content-center align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="other"
                      value="Other"
                      onChange={handleChange}
                      checked={formData.gender === "Other"}
                    />
                    <label className="form-check-label fs-5" htmlFor="other">
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <label className="form-label fs-5" htmlFor="photo">
                Choose Passport size photo
              </label>
              <input
                type="file"
                id="photo"
                className="form-control"
                name="photo"
                onChange={handleChange}
              />
            </div>
            <div className="col-xl-4 col-md-6">
              <label className="form-label fs-5" htmlFor="aadhar">
                AadharCard Number
              </label>
              <input
                type="text"
                id="aadhar"
                className="form-control"
                placeholder="Enter your aadharcard number"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-12 form-check form-check-inline d-flex justify-content-center align-items-center gap-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="check"
                name="declare"
                value={formData.declare}
                onChange={handleChange}
              />
              <label className="form-check-label fs-5" htmlFor="check">
                I hereby declare that all Information are correct.
              </label>
            </div>
          </div>
          <div className="row mt-4 mb-5">
            <div className="d-grid col-xl-2 col-md-4 mx-auto">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
