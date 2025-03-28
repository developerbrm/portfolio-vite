import ContactFormField, { ContactFormFieldProps } from './ContactFormField'

const formFieldsArr: ContactFormFieldProps[] = [
  {
    Element: 'input',
    type: 'text',
    name: 'name',
    label: 'Your full name',
    placeholder: 'John Doe',
    required: true,
  },

  {
    Element: 'input',
    type: 'email',
    name: 'email',
    label: 'Your email',
    placeholder: 'abc@xyz.com',
    required: true,
  },

  {
    Element: 'textarea',
    type: 'text',
    name: 'message',
    label: 'Your message',
    placeholder: 'Your message',
    // required: true,
    rows: 3,
  },
]

const ContactForm = () => {
  return (
    <form className="text-normal mx-auto grid w-sm gap-4 text-gray-800">
      {formFieldsArr.map((field) => {
        return <ContactFormField key={field.name} {...field} />
      })}

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
