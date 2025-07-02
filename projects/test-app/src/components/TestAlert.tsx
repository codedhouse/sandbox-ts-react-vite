import { useState } from 'react'

// use interfaces or type aliases depending on preference
type TestAlertProps = {
  type?: string
  heading: string
  children: React.ReactNode // allows JSX elements & strings
  closable?: boolean
  onClose?: () => void
}

export function TestAlert({
  type = 'information',
  heading,
  children,
  closable,
  onClose,
}: TestAlertProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) {
    return null
  }

  // onClick event handler
  function handleCloseClick() {
    setVisible(false)
    if (onClose) {
      onClose()
    }
  }

  return (
    <div>
      <span
        role="img"
        aria-label={type === 'warning' ? 'Warning' : 'Information'}
      >
        {type === 'warning' ? '⚠' : 'ℹ️'}
      </span>
      <span>{heading}</span>
      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  )
}
