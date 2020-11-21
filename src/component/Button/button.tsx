import React, { AnchorHTMLAttributes } from "react"
import classNames from "classnames"

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link"

interface BaseButtonFromProps {
    className?: string,
    disabled?: boolean,
    size?:  ButtonSize,
    btnType?: ButtonType,
    href?: string,
    children: React.ReactNode,
}

// join Native all the button props 继承原生标签所有属性
type NativeButtonProps = BaseButtonFromProps & React.ButtonHTMLAttributes<HTMLElement> 
type AnchorButtonProps = BaseButtonFromProps & React.AnchorHTMLAttributes<HTMLElement>
/*
*   set all the props optional by Partial
*   Partial 是由TypsScript提供快速遍历所有属性为可选项的 API
*/
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disabled,
        size,
        href,
        children,
        style,
        ...otherProps
    } = props
    const classNamesTotal = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === "link") && disabled
    })
    if(btnType === "link") {
        return (
            <a 
                className={classNamesTotal}
                href={href}
                {...otherProps}
            >
                {children}
            </a>
        )
    }else{
        return (
            <button
                className={classNamesTotal}
                disabled={disabled}
                style={style}
                {...otherProps}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: "default"
}

export default Button