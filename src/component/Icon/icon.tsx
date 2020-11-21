import React from "react"
import classNames from "classnames"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

export type ThemeProps = "primary" | "secondary" | "success" | "info" | "warning"

export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps
} 

const Icon: React.FC<IconProps> = (props) => {
    const {
        className,
        theme,
        ...otherProps
    } = props

    const classNamesTotal = classNames("k-icon", className, {
        [`icon-${theme}`]: theme
    })

    return (
        <FontAwesomeIcon  className={classNamesTotal} {...otherProps} />
    )
}

export default Icon