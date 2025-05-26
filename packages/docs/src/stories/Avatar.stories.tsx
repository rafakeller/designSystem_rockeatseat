import { Avatar, AvatarProps } from '@andromeda/react'
import type { Meta, StoryObj } from '@storybook/react'




export default {
    title:'Data Display/Avatar',
    component:Avatar,
    args:{
       src:'https://github.com/diego3g.png',
       alt:'Diego Fernandez'
    }

} as Meta<AvatarProps>

export const Primary:StoryObj<AvatarProps>={}

export const WithFallBack:StoryObj<AvatarProps>={
    args:{
        src:undefined
    }
}


