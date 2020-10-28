import React from 'react'
import {Button} from '@chakra-ui/core'

export default {
    title: 'Chakra Button',
    component:Button,
    argTypes: {
        variantColor: {control:"text"}
    }
}
 const Template = args => <Button {...args} />

 export const Success = Template.bind({})

 Success.args = {
     variantColor : 'green',
     childre: 'Success'
 }

 export const Danger = () => <Button variantColor="red">Danger</Button>

 Danger.args = {
     variantColor : "red",
     children:"Danger"
 }
