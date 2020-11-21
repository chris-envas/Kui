import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withInfo } from '@storybook/addon-info';

import Button from "./button"

const defaultButton = () => (
  <Button onClick={action("click")}>default</Button>
)
const buttonWithSize = () => (
  <>
     <Button size="sm"> small button </Button>
     <Button size="lg"> large button </Button>
  </>
)
const buttonWithType = () => (
  <>
    <Button btnType="primary">primary button</Button>
    <Button btnType="danger">danger button</Button>
    <Button btnType="link" href="#">link button</Button>
  </>
)


storiesOf("Button Component", module)
  .add("default button", defaultButton)
  .add("different button size", buttonWithSize)
  .add("different button type", buttonWithType)