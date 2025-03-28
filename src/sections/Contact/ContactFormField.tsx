export interface ContactFormFieldProps {
  Element: 'input' | 'textarea'
  type: string
  name: string
  label: string
  placeholder: string
  required?: boolean
  rows?: number
}

const labelStyles = 'group'
const labelDivStyles =
  'mb-1 block font-medium text-gray-700 group-has-[:required]:after:content-["*"] group-has-[:required]:after:ml-1 group-has-[:required]:after:text-rose-600'
const inputStyles = `block w-full p-2 text-lg rounded-lg outline-0 border-2 border-white bg-white shadow-md text-md focus:border-purple-600 focus:ring-purple-600 transition`

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

  return (
    <label className={labelStyles}>
      <div className={labelDivStyles}>{label}</div>
      <Element
        type={type}
        name={name}
        className={inputStyles}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </label>
  )
}

export default ContactFormField
