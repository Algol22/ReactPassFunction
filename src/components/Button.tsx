import React, {useState} from 'react'

interface Props{
    children:string
    onClick: () => void;
    color?: 'primary';
}

const Button = ({children, onClick,color='primary'}: Props) => {

return(
 <div>
<button color="secondary" className={'btn btn-' + color} onClick={onClick}>{children}</button>
</div>
)
}
export default Button