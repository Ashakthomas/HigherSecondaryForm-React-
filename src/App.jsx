import { 
  Button, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  Radio, 
  RadioGroup, 
  Select, 
  MenuItem, 
  Stack, 
  TextField 
} from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [courses, setCourses] = useState("");

  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    // Name validation
    if (!name.trim()) newErrors.name = "Name is required.";

    // Address validation
    if (!address.trim()) newErrors.address = "Address is required.";

    // Mobile number validation
    if (!mobile.match(/^\d{10}$/)) newErrors.mobile = "Enter a valid 10-digit mobile number.";

    // Email validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Enter a valid email address.";

    // Gender validation
    if (!gender) newErrors.gender = "Gender is required.";

    // DOB validation
    if (!dob) newErrors.dob = "Date of Birth is required.";

    // Courses validation
    if (!courses) newErrors.courses = "Please select a course.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleRegister = () => {
    if (validateInputs()) {
      const formData = { name, address, mobile, email, gender, dob, courses };
      alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);
    } else {
      console.log("Validation failed");
    }
  };

  const handleReset = () => {
    setName("");
    setAddress("");
    setMobile("");
    setEmail("");
    setGender("");
    setDob("");
    setCourses("");
    setErrors({});
  };

  return (
    <>
      <div
        style={{ width: '100%', minHeight: '100vh' }}
        className="d-flex justify-content-center align-items-center bg-dark"
      >
        <div style={{ width: '600px' }} className="bg-light rounded p-5">
          <h1>Registration Form for Higher Secondary Admission </h1>
          <p>Enter your details carefully</p>
          <form className="mt-5">
            {/* Name */}
            <div className="mt-3">
              <TextField
                className="w-100"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>

            {/* Address */}
            <div className="mt-3">
              <TextField
                className="w-100"
                label="Address"
                multiline
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                error={!!errors.address}
                helperText={errors.address}
              />
            </div>

            {/* Mobile */}
            <div className="mt-3">
              <TextField
                className="w-100"
                label="Mobile"
                variant="outlined"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                error={!!errors.mobile}
                helperText={errors.mobile}
              />
            </div>

            {/* Email */}
            <div className="mt-3">
              <TextField
                className="w-100"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </div>

            {/* Gender */}
            <div className="mt-3">
              <FormControl error={!!errors.gender}>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                {errors.gender && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.gender}</p>}
              </FormControl>
            </div>

            {/* DOB */}
            <div className="mt-3">
              <TextField
                className="w-100"
                label="Date of Birth"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                error={!!errors.dob}
                helperText={errors.dob}
              />
            </div>

            {/* Courses Dropdown */}
            <div className="mt-3">
              <FormControl className="w-100" error={!!errors.courses}>
                <Select
                  value={courses}
                  onChange={(e) => setCourses(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select a Course
                  </MenuItem>
                  <MenuItem value="Biology">Biology</MenuItem>
                  <MenuItem value="Computer Science">Computer Science</MenuItem>
                  <MenuItem value="Commerce">Commerce</MenuItem>
                  <MenuItem value="Humanities">Humanities</MenuItem>
                </Select>
                {errors.courses && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.courses}</p>}
              </FormControl>
            </div>

            {/* Buttons */}
            <div className="my-4">
              <Stack direction="row" spacing={4}>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleRegister();
                  }}
                  style={{ width: '50%', height: '70px' }}
                  className="bg-dark"
                  variant="contained"
                >
                  Register
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleReset();
                  }}
                  style={{ width: '50%', height: '70px' }}
                  variant="outlined"
                >
                  CANCEL
                </Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
