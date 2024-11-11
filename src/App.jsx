import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")

 const validateEmail = () => {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, }$/
  return regex.test(email)
 }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateEmail){
      console.log(`name : ${name} email : ${email} department : ${department} date:${date} message${message}`);
    }

  }

  const setNameValue = (e) => {
    setName(e.target.value)
  }
  const setEmailValue = (e) => {
    setEmail(e.target.value)
  }
  const setDepartmentValue = (e) => {
    setDepartment(e.target.value)
  }
  const setDateValue = (e) => {
    setDate(e.target.value)
  }
  const setMessageValue = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div>
      <p>Contact Us</p>
      <h2>Make an appointment</h2>

      <form  id="contactForm" onSubmit={handleSubmit}>
        <div className='inputValue1'>
          <input type="text" id='name' className='text_box' placeholder='Full name*' value={name} onChange={setNameValue}/>
          <input type="email" id="email" className='text_box' placeholder='Email*' value={email} onChange={setEmailValue}/>
        </div>
        <div className='inputValue1'>
          <select name="department" id="department" value={department} onChange={setDepartmentValue}>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
          </select>


          <input type="date" value={date} onChange={setDateValue}/>
        </div>
        <textarea name="message" id="notes" onChange={setMessageValue} className='text_box' placeholder='Message' value={message}></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
