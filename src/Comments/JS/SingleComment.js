import "../SCSS/Comments.css"


export const SingleComment=(props)=> {


    return (
        <div className="singleComment__container">
            <img src={props.comment.user.userImage} className="singleComment__user-image" alt={props.comment.user.userName}/>
            <div className="singleComment__infoSection">
                <div className="singleComment__infoSection-name"> {props.comment.user.userName}</div>
                <div className="singleComment__infoSection-text">{props.comment.text}</div>
            </div>
        </div>
    )
}
