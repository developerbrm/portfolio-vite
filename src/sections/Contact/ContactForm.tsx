import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'
import LoadingSpinner from '../../components/LoadingSpinner'
import { APP_ROUTES, constructApiUrl } from '../../utilities/route-helpers'
import { commonToastOptions } from '../../utilities/utilities'
import ContactFormField from './ContactFormField'
import { formFieldsArr } from '../../utilities/constants'

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
  website: z.string().nullable().optional(),
  createdAt: z.date().optional(),
})

export type ContactFormValues = z.infer<typeof ContactSchema>

const ContactForm = () => {
  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  })

  const handleFormSubmit = async (data: ContactFormValues) => {
    const toastId = toast.loading('Submitting the form ...')

    const body = {
      ...data,
      website: window.location.href,
      createdAt: new Date().toString(),
    }

    await axios
      .post(constructApiUrl(APP_ROUTES.SUBMIT_FORM), body)
      .then((res) => {
        methods.reset()

        toast.update(toastId, {
          ...commonToastOptions,
          render: res.data,
          type: 'success',
          isLoading: false,
        })
      })
      .catch((err) =>
        toast.update(toastId, {
          ...commonToastOptions,
          render: err?.data ?? 'Failed to submit form',
          type: 'error',
          isLoading: false,
        })
      )
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className="text-normal mx-auto grid w-full gap-4 text-gray-800 md:w-sm"
      >
        {formFieldsArr.map((field) => {
          return <ContactFormField key={field.name} {...field} />
        })}

        <button
          disabled={methods.formState.isSubmitting}
          type="submit"
          className="mt-5 grid cursor-pointer grid-flow-col place-content-center items-center gap-2 rounded-lg bg-white p-3 text-center text-lg font-medium text-amber-600 shadow-md transition hover:scale-105 hover:bg-amber-500 hover:text-white focus:bg-amber-500 focus:text-white"
        >
          {methods.formState.isSubmitting && (
            <LoadingSpinner svgStyles="!h-5 !w-5 !fill-amber-600" />
          )}
          <span>Submit</span>
        </button>
      </form>
    </FormProvider>
  )
}

export default ContactForm
