import React from "react"
// import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from "./button"

// export const defaultButton = () => (
//   <Button onClick={action("click")}>default</Button>
// )
// export const buttonWithSize = () => (
//   <>
//      <Button size="sm"> small button </Button>
//      <Button size="lg"> large button </Button>
//   </>
// )
// export const buttonWithType = () => (
//   <>
//     <Button btnType="primary">primary button</Button>
//     <Button btnType="danger">danger button</Button>
//     <Button btnType="link" href="#">link button</Button>
//   </>
// )


// storiesOf("Button Component", module)
//   .add("default button", defaultButton)
//   .add("different button size", buttonWithSize)
//   .add("different button type", buttonWithType)
export default {
  title: 'Basic',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({})
Default.args = {
  onClick: action("click"),
  label: 'Button',
}

// const someFunction = (someValue?: string) => {
//   return `i am a ${someValue}`;
// };

// export const ExampleStory: Story<ButtonProps> = (args) => {
//   // destructure the label from the args object
//   const { label } = args;
//   //
//   // assigns the function result to a variable and pass it as a prop into the component
//   const functionResult = someFunction();
//   return (
//     <>
//       <Button {...args} label={functionResult} />
//       <Button {...args} label={functionResult} />
//     </>
//   );
// };
// ExampleStory.args = {
//   size: 'sm',
//   label: 'button'
// };

// export const buttonWithSize = Template.bind({})
// Default.args = {
//   onClick: action("click"),
//   label: 'Button',
//   size: 'lg'
// }
