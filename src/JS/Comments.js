import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import uniqid from 'uniqid';
import {SingleComment} from "./SingleComment";
import "../CSS/Comments.css"
import {galleryComment} from "../redux/actions";
import {MyComponent} from "../Components/MyCommponent";


export const Comments=(props)=> {
    const [textComment, setTextComment] = useState('');

    const textChangeHandler=(event)=>{
        setTextComment(event.target.value);
    };
    const user = useSelector(state=>{
        const {userReducer}=state;
        return userReducer.user
    })
    const dispatch = useDispatch();
    const createComment=()=>{
        const id = uniqid()
        const comment={
            id:id,
            user:{userName:user.name,userImage:user.img},
            text:textComment,
        }
        dispatch(galleryComment(props.character.id,comment))
        setTextComment("");
    }




    return (
    <div className='comments__container'>
        <div className="comments__list-container">
            {props.character.comments.map((comment)=>
               <div key={comment.id}>
                   <SingleComment comment={comment}/>
               </div>
            )}

        </div>
        <MyComponent.isUserAuth id={user.id}>
            <div className='comments__item-create'>
                <div className="comments__user-container " key={user.id}>
                    <img className="comments__user-img" src={user.img} alt="img"/>
                </div>
                <input type='text' value={textComment} placeholder="Your Comment..." onChange={textChangeHandler} className="comments__input"/>
                <button onClick={createComment} type="submit" className="comments__button">↑</button>
            </div>
        </MyComponent.isUserAuth>
    </div>
)
}