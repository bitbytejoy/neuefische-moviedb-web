import React from "react";

export default function Dialog ({
  children,
  onClose
}: {
  children: React.ReactNode,
  onClose: () => void
}) {
  return (
    <>
      <div className={"Backdrop"} onClick={onClose}/>

      <div className={"DialogWrap"}>
        <div className={"Dialog"}>
          <div className={"DialogHeader"}>
            <span className={"DialogClose"} onClick={onClose}>&times;</span>
          </div>

          <div className={"DialogBody"}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}