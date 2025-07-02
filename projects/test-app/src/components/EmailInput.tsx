import { useState, type FocusEvent } from 'react'

export function EmailInput() {
  const [errorInfo, setErrorInfo] = useState('')

  // input validation
  function validateEmail(event: FocusEvent<HTMLInputElement>) {
    console.log('validating input')
    const enteredEmail = event.target.value
    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setErrorInfo('The entered email address is invalid.')
    } else {
      setErrorInfo('')
    }
  }

  return (
    <div>
      <input placeholder="Your email" type="email" onBlur={validateEmail} />
      <p>{errorInfo}</p>
    </div>
  )
}
