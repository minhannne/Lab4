# Project Rules

## Project Structure

- Keep the form source code in `Ex2/src`.
- Use React, Vite, and JavaScript. Use the `.jsx` extension for React components.
- Run `npm run dev` from `Ex2` to start the development server.

## Form State and Validation

- Keep field values in `SimpleForm`. Use `FormContext` to share values, errors,
  and the update function with `InputField`.
- Use the field's `name` prop to look up and update its value.
- Calculate validation errors directly from current field values. Avoid
  `useEffect` chains for synchronizing values and errors.
- Require a full name that contains at least one non-whitespace character.
  Validate the email using the pattern in `SimpleForm`.
- Show a field's error as the user edits it. After the first submission
  attempt, show errors for all invalid fields, including untouched fields.
- Update `ShowData` only after a valid submission. Subsequent edits and invalid
  submissions preserve the JSON from the latest valid submission.

## Verification

- Reload the page and submit with both fields empty. Both fields should show
  an error, and the JSON inspector should remain hidden.
- Enter `abc` in the email field. An error should appear while typing. Change
  it to `abc@example.com` and confirm the email error disappears.
- Enter a valid full name and email, then submit. The JSON should contain
  both `fullName` and `email`.
- Edit a field after a valid submission. The JSON should retain its previous
  values until the next valid submission.
- Run `git log -3 --oneline -- .` from `Ex2` and confirm that the three required
  implementation commits appear in the log.