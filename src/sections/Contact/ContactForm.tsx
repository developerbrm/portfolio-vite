const ContactForm = () => {
  const labelStyles = 'group'
  const labelDivStyles =
    'mb-1 block font-medium text-gray-700 group-has-[:required]:after:content-["*"] group-has-[:required]:after:ml-1 group-has-[:required]:after:text-rose-600'
  const inputStyles = `block w-full p-2 text-lg rounded-lg outline-0 border-2 border-white bg-white shadow-md text-md focus:border-purple-600 focus:ring-purple-600 transition`

  return (
    <form className="text-normal mx-auto grid w-sm gap-4 text-gray-800">
      <label className={labelStyles}>
        <div className={labelDivStyles}>Your full name</div>
        <input
          type="text"
          name="name"
          className={inputStyles}
          placeholder="John Doe"
          required
        />
      </label>

      <label className={labelStyles}>
        <div className={labelDivStyles}>Your email</div>
        <input
          type="email"
          name="email"
          className={inputStyles}
          placeholder="abc@xyz.com"
          required
        />
      </label>

      <label className={labelStyles}>
        <div className={labelDivStyles}>Your message</div>
        <textarea
          name="message"
          rows={4}
          className={inputStyles}
          placeholder="Leave a comment..."
        ></textarea>
      </label>

      <button
        type="submit"
        className="mt-5 cursor-pointer rounded-lg bg-purple-200 p-3 text-center text-lg font-medium text-purple-600 shadow-md transition hover:bg-purple-600 hover:text-white focus:bg-purple-600 focus:text-white"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
