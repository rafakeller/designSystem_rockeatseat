import { Meta, StoryObj } from "@storybook/react";
import { Box, TextInput,TextInputProps } from '@andromeda/react'


export default {

    title:'Form/TextInput',
    component:TextInput,
    args:{},
    decorators:[(Story)=>{
        return(
            <Box as="label" css={{display:'flex', flexDirection:'column', gap:'$2'}}>
                <Text size='sm'>Email adress</Text>
                {Story()}
            </Box>
        )
    }]
} as Meta<TextInputProps>

export const Primary:StoryObj<TextInputProps>={
    args:{
        placeholder:'Add any observations...'
    }
}

export const Disabled:StoryObj<TextInputProps>={
    args:{
        disabled:true
    }
}


