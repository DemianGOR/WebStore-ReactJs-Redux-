import "../CSS/Modal.css"
import React from "react";


export const GalleryModalWindow=({active,setActive,children})=>{

    return(<>
            <div className={`${ active ? "modal__container-center active":"modal__container-center"}`} onClick={()=>{setActive(false); console.log("gay")}}>
                <div className={`${ active ? "modal__inner-center active":"modal__inner-center"}`}  onClick={e=>e.stopPropagation()}>
                    {children}
                </div>
            </div>


        </>

    )
}