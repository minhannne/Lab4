import { useState } from 'react'
import { FormContext } from './FormContext.js'
import InputField from './InputField.jsx'

export default function SimpleForm() {
  const [values, setValues] = useState({})
  const [submitAttempted, setSubmitAttempted] = useState(false)

  const fullName = (values.fullName ?? '').trim()
  const email = (values.email ?? '').trim()

  const errors = {
    fullName: fullName ? '' : 'Vui lòng nhập họ và tên.',
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? ''
      : 'Vui lòng nhập email hợp lệ.',
  }

  function updateField(name, value) {
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitAttempted(true)
  }

  return (
    <FormContext.Provider value={{ values, errors, updateField, submitAttempted }}>
      <form noValidate onSubmit={handleSubmit}>
        <h1>Thông tin cá nhân</h1>
        <InputField name="fullName" label="Họ và tên" />
        <InputField name="email" label="Email" type="email" />
        <button type="submit">Submit</button>
      </form>
    </FormContext.Provider>
  )
}