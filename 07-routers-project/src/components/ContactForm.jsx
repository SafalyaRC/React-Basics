import React from 'react'

function ContactForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder='Name' />
        <br />
        <input type="text" placeholder='email'/>
        <br />
        <textarea placeholder='message'></textarea>
        <button type="submit" onSubmit={(e)=>e.preventDefault()}>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
