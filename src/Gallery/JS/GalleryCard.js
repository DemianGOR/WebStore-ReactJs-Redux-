import "../SCSS/Gallery.css";
import {GalleryModalWindow} from "../../Components/GalleryModalWindow";
import {useState} from "react";
import {GalleryModalCard} from "./GalleryModalCard";


export const GalleryCard=(props)=> {

    const[modalActive,setModalActive]=useState()

    return (
        <div  className="card__container" >
            <div className="card__inner-gallery" onClick={()=>{setModalActive(true)}}>
                <img className="card__item-img-gallery"  src={`${props.character.image}`} alt="img"/>
                <div className="card_info-section-gallery">
                    <div className="card__item-name-gallery"  >{props.character.name}</div>
                    <div>
                        <div className="card_item-title-gallery">Status:</div>
                        <div className="card__item-status-gallery">{props.character.status}</div>
                    </div>
                    <div>
                        <div className="card_item-title-gallery">Last location:</div>
                    <div className="card__item-status-gallery">{props.character.location.name}</div>
                    </div>
                </div>
            </div>
            <GalleryModalWindow active={modalActive} setActive={setModalActive}>
                <GalleryModalCard character={props.character}/>
            </GalleryModalWindow>
        </div>
    );
}

