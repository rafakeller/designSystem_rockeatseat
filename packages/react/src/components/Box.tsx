import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '$gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
