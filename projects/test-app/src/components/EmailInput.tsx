import { type FocusEvent } from 'react'

export function EmailInput() {
  let errorMsg = ''

  // input validation
  function validateEmail(event: FocusEvent<HTMLInputElement>) {
    console.log('validating input')
    const enteredEmail = event.target.value
    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      errorMsg = 'The entered email address is invalid.'
    } else {
      errorMsg = ''
    }
  }

  return (
    <div>
      <input placeholder="Your email" type="email" onBlur={validateEmail} />
      <p>{errorMsg}</p>
    </div>
  )
}
