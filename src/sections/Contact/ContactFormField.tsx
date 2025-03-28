import { useFormContext } from 'react-hook-form'
import { ContactFormValues } from './ContactForm'

export type ContactFormFieldProps = {
  Element: 'input' | 'textarea'
  type: string
  name: keyof ContactFormValues
  label: string
  placeholder: string
  required?: boolean
  rows?: number
}

const ContactFormField = (props: ContactFormFieldProps) => {
  const {
    Element,
    type,
    name,
    label,
    placeholder,
    required = false,
    rows,
  } = props

  const { register, formState } = useFormContext()

  const error =
    (formState.touchedFields[name] || formState.isSubmitted) &&
    formState.errors[name]?.message

  const labelStyles = 'group'
  const labelDivStyles = `mb-1 block font-medium text-gray-700 ${required ? 'after:content-["*"] after:ml-1 after:text-rose-600' : ''}`
  const inputStyles = `block w-full p-2 text-lg rounded-lg outline-0 border-2 border-white bg-white shadow-md text-md focus:border-purple-600 focus:ring-purple-600 transition ${error ? '!ring-rose-500 !border-rose-500' : ''}`

  return (
    <label className={labelStyles}>
      <div className={labelDivStyles}>{label}</div>
      <Element
        {...register(name)}
        type={type}
        name={name}
        className={inputStyles}
        placeholder={placeholder}
        rows={rows}
      />

      {error && (
        <span className="text-sm text-rose-800">{error as string}</span>
      )}
    </label>
  )
}

export default ContactFormField
