type ButtonProps = {
  children: string
  version?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  isDisabled?: boolean
}

function Button({
  children,
  version = 'primary',
  type = 'button',
  isDisabled = false,
}: ButtonProps) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

export default Button
