import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action='https://getform.io/f/286ae03c-efd3-4d81-ada8-5d7532a4669c' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contacat</p>
                <p className='text-gray-300 py-4'>submit the form below shoot me an email - ilham.adi78@gmail.com</p>
            </div>
            <input type="text" className='my-4 p-2 bg-[#ccd6f6]' placeholder='Name' name="name" />
            <input type="email" className='my-4 p-2 bg-[#ccd6f6]' placeholder='Email' name="email" />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type='submit'> Let's Collaborate</button>

        </form>
    </div>
  )
}

export default Contact