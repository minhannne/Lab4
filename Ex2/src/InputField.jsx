import { useContext } from 'react'
import { FormContext } from './FormContext.js'

export default function InputField({ name, label, type = 'text' }) {
  const { values, updateField } = useContext(FormContext)

  return (
    <div>
      <label>
        {label}
        <input
          name={name}
          type={type}
          value={values[name] ?? ''}
          onChange={(event) => updateField(name, event.target.value)}
        />
      </label>
    </div>
  )
}