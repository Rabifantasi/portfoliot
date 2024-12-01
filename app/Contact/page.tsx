import React from 'react'

const Contact = () => {
  return (
    <div className='w-10/12 mx-auto py-12'>
      <h1 className='text-4xl md:text-5xl font-bold text-center'>Contact Me</h1>
      <p className='pt-4 text-neutral-500 text-center'>
        Have questions or want to work together? Feel free to reach out.
      </p>
      <div className='mt-12'>
        <form className='space-y-6 max-w-xl mx-auto'>
          <div>
            <label htmlFor="name" className='block text-sm font-medium text-neutral-300'>
              Name
            </label>
            <input
              id="name"
              type="text"
              className='mt-2 w-full p-3 rounded-lg border border-neutral-500 bg-neutral-800 focus:outline-none focus:border-neutral-300'
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className='block text-sm font-medium text-neutral-300'>
              Email
            </label>
            <input
              id="email"
              type="email"
              className='mt-2 w-full p-3 rounded-lg border border-neutral-500 bg-neutral-800 focus:outline-none focus:border-neutral-300'
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className='block text-sm font-medium text-neutral-300'>
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className='mt-2 w-full p-3 rounded-lg border border-neutral-500 bg-neutral-800 focus:outline-none focus:border-neutral-300'
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className='w-full p-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition duration-200'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact