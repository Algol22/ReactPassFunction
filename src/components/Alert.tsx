import React, { ReactNode, useState } from "react";

interface Props{
  children: ReactNode;
  onClose: ()=>void;
}


const Alert = ({children, onClose}:Props) => {
  
  return (
    <React.Fragment>

    <div className="alert alert-primary alert-dismissible">
  
      {children}
      <button type="button" className="btn-close" onClick={onClose}  data-bs-dismiss="modal">close</button>
</div>
    </React.Fragment>
  )
}

export default Alert