# Decomposition

## Scope

Ex2 implements the multi-field React form for Lab 4. It applies the validation
approach discussed in Exercise 1.3 and adds the JSON inspector required by
Sprint 2.

## Exercise 1.3 — Legacy Validation

The Exercise 1.3 slide describes a chain of `useEffect` hooks that copies field
values to `SimpleForm`, validates them, and sends errors back to `InputField`.
When each effect updates state, a single keystroke can trigger several render
cycles. Effects that update state they depend on can also cause an update loop.

Ex2 started as an empty folder, so the form was built from scratch. `SimpleForm`
owns the field values and calculates errors directly from those values during
render. `InputField` reads its value and error through React Context and calls
`updateField` when the user types.

## File Responsibilities

| File | Responsibility |
| --- | --- |
| `src/App.jsx` | Renders `SimpleForm`. |
| `src/FormContext.js` | Defines the shared form context. |
| `src/SimpleForm.jsx` | Stores field values, calculates errors, handles submission, and saves the latest valid submission. |
| `src/InputField.jsx` | Renders a controlled input, forwards changes to the form, and displays the field's error. |
| `src/ShowData.jsx` | Displays submitted data as formatted JSON. |

## Form Flow

1. When the user types, `InputField` calls `updateField(name, value)`.
2. `SimpleForm` updates the field value and recalculates validation errors.
3. A field displays its error after the user edits it or submits the form.
4. On an invalid submission, the form displays errors and preserves any
   previously submitted data.
5. On a valid submission, `SimpleForm` saves the trimmed full name and email.
   `ShowData` displays the saved values as JSON.

## Required Commits

1. `feat: form context` — Set up Ex2 and connect the input fields to Context.
2. `feat: input field validation` — Validate input while typing and show all
   relevant errors on submission.
3. `feat: inspector output` — Display JSON after a valid submission.