import { useContext, useId } from 'react'
import { FormContext } from './FormContext.js'

export default function InputField({ name, label, type = 'text' }) {
  const { values, errors, updateField, submitAttempted } = useContext(FormContext)
  const errorId = useId()
  const showError = submitAttempted || values[name] !== undefined
  const error = showError ? errors[name] : ''

  return (
    <div>
      <label>
        {label}
        <input
          name={name}
          type={type}
          value={values[name] ?? ''}
          onChange={(event) => updateField(name, event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
      </label>
      {error && <p id={errorId}>{error}</p>}
    </div>
  )
}