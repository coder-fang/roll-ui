import React from 'react';
import classNames = require("classnames");

const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        className,
        href,
        ...restProps 
    } = props;
    // 利用 classNames 判断按钮的相应class值
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]: btnType, //  btnType 参数存在时则动态添加 `btn-${btnType}`类 
        [`btn-${size}`]: size, // size 参数存在时动态添加 `btn-${size}` 类
        'disabled': (btnType === 'link') && disabled // 由于 a 链接原生不带有disabled属性，因此需要手动给它添加-
    })
    // 判断如果是link类型，则输出a链接，否则输出 button
    if(btnType === 'link' && href){
        return (
            <a
            {...restProps} 
            href=""
            className={classes}>
                {children}
            </a>
        )
    } else {
        return 
        (<button
                {...restProps}
                className={classes}
                disabled={disabled}>
                {children}
        </button>
        )
    }
}
// 属性默认值
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}