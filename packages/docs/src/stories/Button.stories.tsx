import { Button, ButtonProps, } from "@andromeda/react";
import { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "phosphor-react";


export default{
    title:'Form/Button',
    component:Button,
    args:{
        children:'Send'
    }
} as Meta<ButtonProps>


export const Primary:StoryObj<typeof Button>={}

export const Secondary:StoryObj<typeof Button>={
    
    args:{
        variant:'secondary',
        children:'Create New'
    }
}

export const Terciary:StoryObj<typeof Button>={
    args:{
        variant:'tertiary',
        children:'Cancel'
    }
}

export const Small:StoryObj<typeof Button>={
    args:{
        size:'$sm'
    }
}

export const WithIcon:StoryObj<typeof Button>={
    args:{
        children:(
            <>
                Proximo Passo
                <ArrowRight weight="bold"/>
            </>
        )
    }
}

export const Disabled:StoryObj<typeof Button>={
    args:{
        disabled:true
    }
}