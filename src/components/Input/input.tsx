import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import classNames from "classnames";
import Icon from "../icon/icon";

type InputSize = "lg" | "sm"

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /** 是否禁用Input */
  disabled?: boolean;
  /** 设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /** 添加图标，在右侧悬浮添加一个图标 */
  icon?: IconProp;
  /** 添加前缀，用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /** 添加后缀，用于配置一些固定组合 */
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
   * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装
   * 
   * ~~~js
   * // 这样引用
   * import {Input} from "vikingship"
   * ~~~
   * 支持 HTMLInput 的所有基本属性
   */

export const Input: FC<InputProps> = (props) => {
  // 取出属性
  const {
    disabled,
    size,
    icon,
    prepend,
    style,
    append,
    ...restProps
  } = props




  // 根据属性计算不同的className
  const cnames = classNames("viking-input-wrapper", {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })

  const fiControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return " "
    }
    return value
  }

  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fiControlledValue(props.value)
  }


  // 根据属性判断是否要添加节点
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
      <input
        className="viking-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="viking-input-group-append">{append}</div>}
    </div>

  )
}