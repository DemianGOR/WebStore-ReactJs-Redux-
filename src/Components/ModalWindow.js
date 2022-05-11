import "../CSS/Modal.css"
import {useEffect} from "react";


export const ModalWindow=({active,setActive,children,flag,setFlag})=>{

return(<>
        <div className={flag ?`${ active ? "modal__container center active":"modal__container center"}` :`${active ? "modal__container active":"modal__container"}`} onClick={()=>{setActive(false);setFlag(false)}}>
            <div className={flag ?`${ active ? "modal__inner center active":"modal__inner center"}` :`${active ? "modal__inner active":"modal__inner"}`}  onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>


    </>

)
}