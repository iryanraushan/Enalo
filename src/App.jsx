import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    date: '',
    message: ''
  });

  const validateEmail = () => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      console.log(`Form Data: `, formData);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <h2>Make an Appointment</h2>

      <form id="contactForm" onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Full name*"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <select
            name="department"
            className="input-field"
            value={formData.department}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select Department</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <input
            type="date"
            name="date"
            className="input-field"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <textarea
          name="message"
          className="textarea-field"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default App;

