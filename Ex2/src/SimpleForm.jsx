import { useState } from 'react'
import { FormContext } from './FormContext.js'
import InputField from './InputField.jsx'
export default function SimpleForm() {
  const [values, setValues] = useState({})

  function updateField(name, value) {
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  return (
    <FormContext.Provider value={{ values, updateField }}>
      <form>
        <h1>Thông tin cá nhân</h1>
        <InputField name="fullName" label="Họ và tên" />
<InputField name="email" label="Email" type="email" />
      </form>
    </FormContext.Provider>
  )
}