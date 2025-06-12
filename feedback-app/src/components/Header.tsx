type HeaderProps = {
  text: string
  bgColor: string
  textColor: string
}

function Header({ text, bgColor, textColor }: HeaderProps) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header
