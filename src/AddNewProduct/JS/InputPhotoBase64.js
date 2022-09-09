import React,{useState} from "react";
import "../SCSS/NewProduct.css"


export const InputPhotoBase64=(props)=>{
    const [baseImage, setBaseImage] = useState("");

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const sendImage=()=>{
        const photo={
            image:baseImage
        }
        console.log(photo)
        setBaseImage("");

        props.onAddPhoto(photo)
    }

    return (
        <div className="App">
            <input
                type="file"
                onChange={(e) => {
                    uploadImage(e);
                }}
            />
            <br/>
            <div>
            <img src={baseImage} height="200px" alt=""  />
            </div>
            <button className="newAdd__button" onClick={sendImage}>Submit</button>
        </div>
    );
}