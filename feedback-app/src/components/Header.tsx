type HeaderProps = {
  text: string
}

function Header({ text }: HeaderProps) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header
