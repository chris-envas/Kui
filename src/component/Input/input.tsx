import React, { FC, ReactElement, InputHTMLAttributes } from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import classNames from "classnames"
import Icon from "../Icon/icon"

type InputSize = "lg" | "sm"

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>,"size"> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepand?: string | ReactElement;
    append?: string | ReactElement
}

export const Input: FC<InputProps> = (props) => {
    const {
        disabled,
        size,
        icon,
        prepand,
        append,
        style,
        ...restProps
    } = props

    const classNameTotal = classNames("k-input-wrapper", {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepand || append,
        'input-group-prepand': !!prepand,
        'input-group-append': !!append
    })

    return (
        <div className={classNameTotal} style={style} >
            {prepand && <div className="k-group-prepand">{prepand}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}></Icon></div>}
            <input 
                className="k-input-inner"
                disabled={disabled}
                {...restProps}
            />
            {append && <div className="viking-input-group-append">{append}</div>}
        </div>
    )
}

Input.defaultProps = {
    size: 'sm'
}

export default Input