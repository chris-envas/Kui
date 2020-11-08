import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonType, ButtonSize } from './button'

const defaultProps = {
  onClick: jest.fn()
}
const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'test'
}
const disabledPorps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}
/*
*   Common UI component test process
*   1、exist
*   2、get text
*   3、get DOM
*   4、judgement link tag
*   5、class match
*   Optional event 
*/ 
describe("test button component", () => {
    it("should render the correct default button", () => {
        const wrapper = render(<Button {...defaultProps}>btn</Button>)
        const element = wrapper.getByText("btn") as HTMLButtonElement // 获取DOM元素并合并原生属性
        expect(element).toBeInTheDocument() // 是否存在
        expect(element.tagName).toEqual("BUTTON") // 标签
        expect(element).toHaveClass("btn btn-default") // class
        expect(element.disabled).toBeFalsy() // disabled是否默认为false
        // 测试事件
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it("should render the correct component based on different props", () => {
        const wrapper = render(<Button {...testProps}>diffent props</Button>)
        const element = wrapper.getByText("diffent props")
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg test')
    })
    it("should render a link when btnType equals link and href is provided", () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>)
        const element = wrapper.getByText("Link")
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })  
    it("should render disbled button when disabled seted to true", () => {
        const waraper = render(<Button {...disabledPorps}>disabled</Button>)
        const element = waraper.getByText("disabled") as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledPorps.onClick).not.toHaveBeenCalled()
    })
})