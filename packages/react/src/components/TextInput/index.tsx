import { ComponentProps } from 'react'
import { Prefix, TextInputContainer, Input } from './style'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefixo?: string
}

export const TextInput = ({ prefixo, ...props }: TextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefixo && <Prefix>{prefixo}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}
