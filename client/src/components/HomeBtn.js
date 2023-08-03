import React from 'react'

const HomeBtn = ({onClick, children, as: Component = 'button', ...rest}) => {
    return (
        <Component onClick={onClick} className="restCardBtn" {...rest}>
            {children}
        </Component>
    )
}

export default HomeBtn