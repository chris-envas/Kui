import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from "./input"

const defaultInput = () => (
    <Input 
        style={{width: "300px"}}
        placeholder={"placeholder"}
        onChange={action('changed')}
    />
)   

const disabledInput = () => (
    <Input 
        style={{width: "300px"}}
        placeholder="disabled input"
        disabled
    />
)

export default {
    title: 'Basic',
    component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {

}