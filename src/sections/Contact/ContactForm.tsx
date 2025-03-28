import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formFieldsArr } from '../../utilities/utilities'
import ContactFormField from './ContactFormField'

const ContactSchema = z.object({
  name: z
    .string()
    .min(5, { message: 'Must be 5 or more characters long' })
    .max(50, { message: 'Must be 50 or less characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z
    .string()
    .min(5, { message: 'Must be 5 or more characters long' })
    .max(500, { message: 'Must be 500 or less characters long' }),
})

export type ContactFormValues = z.infer<typeof ContactSchema>

const ContactForm = () => {
  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  })

  const handleFormSubmit = (data) => console.log(data)

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className="text-normal mx-auto grid w-sm gap-4 text-gray-800"
      >
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
    </FormProvider>
  )
}

export default ContactForm
