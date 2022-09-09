import React, {useEffect} from "react";
import "../../Phones/SCSS/ListOfItems.css"
import { useSelector} from "react-redux";
import {GalleryCard} from "./GalleryCard";

export const Gallery=()=> {
    const post = useSelector(state=>{
        const {galleryReducer}=state;
        return galleryReducer.gallery
    })

        return (<>
                <div className="gallery__container">
                    <h1 className="gallery__title">Rick&Morty</h1>
                    <div className="gallery__inner">
                        {post.map((character)=>
                            <div className="gallery__items" key={character.id}  >
                            <GalleryCard character={character}  />
                            </div>
                        )}
                    </div>
                </div>

            </>
        );

}