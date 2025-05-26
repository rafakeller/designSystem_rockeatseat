import { Box,BoxProps } from '@andromeda/react'
import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@andromeda/react'




export default {
    title:'Surfaces/Box',
    component:Box,
    args:{
       children:(
        <>
            <Text as={'strong'}>Testando Elemento Box</Text>
        </>
       )
    }

} as Meta<BoxProps>

export const Primary:StoryObj<BoxProps>={

}

