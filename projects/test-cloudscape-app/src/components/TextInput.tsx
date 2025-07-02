import { useState } from 'react'
import { Input } from '@cloudscape-design/components'

function TextInput() {
  const [value, setValue] = useState('')

  return (
    <Input
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      autoFocus
    />
  )
}

export default TextInput
