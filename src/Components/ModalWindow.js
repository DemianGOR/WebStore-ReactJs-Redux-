import "../CSS/Modal.css"


export const ModalWindow=({active,setActive,children})=>{
return(<>
        <div className={active ? "modal__container active":"modal__container"} onClick={()=>setActive(false)}>
            <div className={active ? "modal__inner active":"modal__inner"}  onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>


    </>

)
}