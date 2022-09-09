import {GALLERY_COMMENT, GALLERY_DISLIKE_LIKE} from "./types";
import axios from "axios";

import uniqid from 'uniqid';

const initialState = {

    gallery: []
};
axios.get('https://rickandmortyapi.com/api/character')
    .then((response)=> {
        response.data.results.forEach((character) => {
            character.likes=0
            character.dislikes=0
            const id1 = uniqid()
            const id2 = uniqid()
            character.comments=[{
                id:id1,
                user:{userName:"Dmytro Hoooopkins",userImage:character.image},
                text:"wooooooow!COOOOOLLLLL!!!!",
            },
                {
                    id:id2,
                    user:{userName:"James Gray",userImage:character.image},
                    text:"wooooooow!COOOOOLLLLL!!!! COOOOOLLLLL!!!! COOOOOLLLLL!!!! COOOOOLLLLL!!!!COOOOOLLLLL!!!! COOOOOLLLLL!!!! COOOOOLLLLL!!!!",
                }]
            initialState.gallery.push(character)
            console.log(initialState.gallery)
        })
    })

export const galleryReducer=(state=initialState,action)=>{
    switch (action.type){
        case GALLERY_DISLIKE_LIKE:
            const index=state.gallery.findIndex(i=>i.id===action.id)
            const character=state.gallery.find(i=>i.id===action.id)
            const update=action.flag ? {likes: character.likes + 1}: {dislikes: character.dislikes + 1}
            const newCharacter={
                ...character,
               ...update
            }
            const updatedCharacter=[
                ...state.gallery.slice(0,index),
                newCharacter,
                ...state.gallery.slice(index+1)
            ]
            return {...state,gallery: updatedCharacter};
        case GALLERY_COMMENT:
            const indexx=state.gallery.findIndex(i=>i.id===action.id)
            const characterr=state.gallery.find(i=>i.id===action.id)
            characterr.comments.push(action.comment)

            const updatedCharacterr=[
                ...state.gallery.slice(0,indexx),
                characterr,
                ...state.gallery.slice(indexx+1)
            ]
            console.log(updatedCharacterr)
            return {...state,gallery: updatedCharacterr};

        default:return state;
    }
}
