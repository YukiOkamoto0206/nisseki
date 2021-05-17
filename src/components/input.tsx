import React from "react"

type Props = {
  holder: string
  setter: Function
  value?: string | number
  onBlur?: Function
  type?: string
}

export const Input: React.FC<Props> = ({ holder, setter, value, type }: Props) => {
  const handleValueChange = (event: any) => {
    const inputValue = event.target.value
    setter(inputValue)
  }

  return (
    <div>
      <input placeholder={holder} value={value} onChange={handleValueChange} type={type} />
    </div>
  )
}
