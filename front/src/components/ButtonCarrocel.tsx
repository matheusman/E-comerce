import React from 'react'

type carrocel = React.PropsWithChildren & {
    className : string;
}

function ButtonCarrocel( { children, ...props } : carrocel) {
    
    return (
    <button {...props}>{children}</button>
  )
}

export default ButtonCarrocel