import React, { AnchorHTMLAttributes } from "react"
import classNames from "classnames"

export enum ButtonSize {
    Large = "lg",
    Small = "sm"
}

export enum ButtonType  {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
}

interface BaseButtonFromProps {
    className?: string,
    disabled?: boolean,
    size?:  ButtonSize,
    btnType?: ButtonType,
    href?: string,
    children: React.ReactNode,
}

// join Native all the button props
type NativeButtonProps = BaseButtonFromProps & React.ButtonHTMLAttributes<HTMLElement> 
type AnchorButtonProps = BaseButtonFromProps & React.AnchorHTMLAttributes<HTMLElement>
// set all the props is partial
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disabled,
        size,
        href,
        children,
        ...otherProps
    } = props

    const classNamesTotal = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if(btnType === ButtonType.Link) {
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
                {...otherProps}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button