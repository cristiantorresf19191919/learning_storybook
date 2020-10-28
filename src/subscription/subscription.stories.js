import React from 'react'
import { Primary } from '../components/Button/Button.stories'
import { Large } from '../components/Input/Input.stories'


export default {
    title:"form/Subscription"
}
// you dont take advantage of args mechanism
export const PrimarySubscription = () =>(
    <>
    <Large />
    <Primary />
    </>
)



