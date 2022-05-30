import "../CSS/Gallery.css";
import {useDispatch} from "react-redux";
import {galleryDislikeLike} from "../redux/actions";
import {Comments} from "./Comments";

export const GalleryModalCard=(props)=> {
const dispatch = useDispatch()
    const handlerDislikeLikes=(flag)=>{
        dispatch(galleryDislikeLike(props.character.id,flag))
    }
    return (
        <div  className="GalleryModalCard__container" >
            <div className="GalleryModalCard__inner" >
                <img className="GalleryModalCard__item-img"  src={`${props.character.image}`} alt="img"/>
                <div className="GalleryModalCard_info-section">
                    <div className="GalleryModalCard_likes">
                        <div className="GalleryModalCard_likes-button" onClick={()=>{handlerDislikeLikes(true)}}>{props.character.likes}💓</div>
                        <div className="GalleryModalCard_likes-button" onClick={()=>handlerDislikeLikes(false)}>{props.character.dislikes}💔</div>
                    </div>
                    <div className="GalleryModalCard__item-name"  >{props.character.name}</div>
                    <div className="GalleryModalCard_info-section-mini">
                        <div className="GalleryModalCard_item-title">Status:</div>
                        <div className="GalleryModalCard__item-status">{props.character.status}</div>
                    </div>
                    <div className="GalleryModalCard_info-section-mini">
                        <div className="GalleryModalCard_item-title">Last location:</div>
                        <div className="GalleryModalCard__item-status">{props.character.location.name}</div>
                    </div>
                    <div className="GalleryModalCard_info-section-mini">
                        <div className="GalleryModalCard_item-title">⚤Sex:</div>
                        <div className="GalleryModalCard__item-status">{props.character.gender}</div>
                    </div>
                    <div className="GalleryModalCard_info-section-mini">
                        <div className="GalleryModalCard_item-title">Species:</div>
                        <div className="GalleryModalCard__item-status">{props.character.species}</div>
                    </div>
                    <div className="GalleryModalCard_info-section-mini">
                        <div className="GalleryModalCard_item-title">Origin:</div>
                        <div className="GalleryModalCard__item-status">{props.character.origin.name}</div>
                    </div>

                </div>
            </div>
            <Comments character={props.character}/>
        </div>
    );
}

