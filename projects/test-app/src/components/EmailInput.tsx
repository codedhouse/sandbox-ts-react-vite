import { useState, type FocusEvent } from 'react'

export function EmailInput() {
  // 1st element is always the current value
  // 2nd element is always a function that sets the state to a new value
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
