import React from 'react'

const Email = () => {
  return (
    <div className='container'>
       <div className='card'>
      <div className='card-body'>
      <input type="email" name="to" placeholder="Recipient" onChange={handleChange} />
      <input type="text" name="subject" placeholder="Subject" onChange={handleChange} />
      <textarea name="text" placeholder="Text content" onChange={handleChange} />
      <textarea name="html" placeholder="HTML content" onChange={handleChange} />
      </div>
      <button onClick={sendEmail}>Send Email</button>
    </div>
    </div>
  )
}

export default Email
