import React, { FC, AnchorHTMLAttributes } from "react"
import classNames from "classnames"

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link"

export interface BaseButtonFromProps {
    /**
    *  Alow mixing of class names (Optional)
    */
    className?: string,
    /**
    * Checks if the button should be disabled (Optional)
    */
    disabled?: boolean,
    /**
    * About size of the button (Optional)
    */
    size?:  ButtonSize,
    /**
    * About type of the button (Optional)
    */
    btnType?: ButtonType,
    /**
    * Checks if the button should be link (Optional)
    */
    href?: string,
    /**
    * This is content of the button
    */
    children: React.ReactNode,
    /**
    * Allow setting content via label (Optional)
    */
    label?: string
}

type NativeButtonProps = BaseButtonFromProps & React.ButtonHTMLAttributes<HTMLElement> 
type AnchorButtonProps = BaseButtonFromProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
* To trigger an operation.
*/
export const Button: FC<ButtonProps> = (props) => {
    const {
        btnType,
        className,
        disabled,
        size,
        href,
        children,
        style,
        label,
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
                {children ? children : label}
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
                {children ? children : label}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: "default"
}
