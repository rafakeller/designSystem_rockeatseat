import { Meta, StoryObj } from "@storybook/react";
import { Text,TextProps } from '@andromeda/react'


export default {

    title:'Typography/Text',
    component:Text,
    args:{
        children:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
} as Meta<TextProps>

export const Primary:StoryObj<TextProps>={}

export const CustomTag:StoryObj<TextProps>={args:{
    children:'Strong Text',
    as:'strong'
}}