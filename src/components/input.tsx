import React from "react"

type Props = {
  holder: string
  setter: Function
  value?: string | number
  onBlur?: Function
  type?: string
  className?: string
  size?: string
}

export const Input: React.FC<Props> = ({ holder, setter, value, type, className, size }: Props) => {
  const handleValueChange = (event: any) => {
    const inputValue = event.target.value
    setter(inputValue)
  }

  return (
    <div className={className}>
      <input placeholder={holder} value={value} onChange={handleValueChange} type={type} className={size} />
    </div>
  )
}
