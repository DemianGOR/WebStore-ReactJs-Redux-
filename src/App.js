import './App.css';
import {Header} from "./JS/Header";
import React ,{useState} from "react"
import Iphone from "../src/IMG/iphone2.jpg"
import Meizu from "../src/IMG/Meizu.jpg"
import Meizu2 from "../src/IMG/Meizu2.jpg"
import {useEffect} from "react";
import {gapi} from "gapi-script";
import {Route, Routes} from "react-router-dom";
import AddNewProduct from "./JS/AddNewProduct";
import SignIn from "./JS/SignIn";
import ListOfItems from "./JS/ListOfItems";
import ProductPage from "./JS/ProductPage";
import {CategoryItemList} from "./JS/CategoryItemList";
import {OrderSubmit} from "./JS/OrderSubmit";

let listOfPhones = [
    {
        id: 1,
        name: "Meizu 18",
        quantity: 1,
        price: 1199,
        image: Meizu,
        type:"Meizu",
        description:"Design Modern and stylish, this is how you can characterize the device. Overall and at the same time - very thin, the phone is made of excellent materials and has an excellent assembly. The case itself is made of metal and durable glass. The front panel meets us with a large screen with a built-in front lens, the speaker at the top is almost invisible. On the back panel there is the main photomodule and a branded inscription. You can buy Meizu 18 in several colors. Screen For its price, the device will offer the owner an excellent AMOLED-matrix with a diagonal of 6.2 inches. The resolution of 3200x1440px provides high pixel density and excellent image detail. Buy Meizu 18 and you can enjoy a gorgeous picture without worrying about possible scratches and chips. The display is protected by excellent Gorilla Glass. Performance  The chic chipset did not let us down either - Snapdragon 888 from Qualcomm paired with the Adreno 660 graphics core will provide the best performance possible. The most demanding games and applications will run on your device without any difficulty. 8 GB of RAM will help you process software requests quickly and efficiently. The Android 11 operating system will provide the most convenient interface and all the icons necessary for comfortable work with the gadget. You can buy a Meizu 18 smartphone with 128GB of built-in storage. Battery:  A 4000mAh battery with excellent optimization will give you up to a day of activity. The fast charge option will restore energy in no time.        cameras        Excellent 64MP and 20MP lenses on the sensor from Sony will make your photos and videos truly high-quality and bright. Yes, and video communication will be at the highest level. You can buy Meizu 18 at the most affordable price in our online store. World of Smartphones offers a two-year warranty in Ukraine, absolutely free.",},
    {
        id: 2,
        name: "Meizu Note 8",
        quantity: 1,
        price: 1199,
        image: Meizu2,
        type:"Meizu",
        description:"Design Modern and stylish, this is how you can characterize the device. Overall and at the same time - very thin, the phone is made of excellent materials and has an excellent assembly. The case itself is made of metal and durable glass. The front panel meets us with a large screen with a built-in front lens, the speaker at the top is almost invisible. On the back panel there is the main photomodule and a branded inscription. You can buy Meizu 18 in several colors. Screen For its price, the device will offer the owner an excellent AMOLED-matrix with a diagonal of 6.2 inches. The resolution of 3200x1440px provides high pixel density and excellent image detail. Buy Meizu 18 and you can enjoy a gorgeous picture without worrying about possible scratches and chips. The display is protected by excellent Gorilla Glass. Performance  The chic chipset did not let us down either - Snapdragon 888 from Qualcomm paired with the Adreno 660 graphics core will provide the best performance possible. The most demanding games and applications will run on your device without any difficulty. 8 GB of RAM will help you process software requests quickly and efficiently. The Android 11 operating system will provide the most convenient interface and all the icons necessary for comfortable work with the gadget. You can buy a Meizu 18 smartphone with 128GB of built-in storage. Battery:  A 4000mAh battery with excellent optimization will give you up to a day of activity. The fast charge option will restore energy in no time.        cameras        Excellent 64MP and 20MP lenses on the sensor from Sony will make your photos and videos truly high-quality and bright. Yes, and video communication will be at the highest level. You can buy Meizu 18 at the most affordable price in our online store. World of Smartphones offers a two-year warranty in Ukraine, absolutely free.",



},
    {
        id: 3,
        name: "Iphone 11 Black",
        quantity: 4,
        price: 1199,
        image: Iphone,
        type:"Iphone",
        description:"The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner."


    },
    {
        id: 4,
        name: "Iphone 11 Black",
        quantity: 4,
        price: 1199,
        image: Iphone,
        type:"Iphone",
        description:"The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner."


    },
    {
        id: 5,
        name: "Iphone 11 Black",
        quantity: 4,
        price: 1199,
        image: Iphone,
        type:"Iphone",
        description:"The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner."


    },
    {
        id: 6,
        name: "Iphone 11 Black",
        quantity: 4,
        price: 1199,
        image: Iphone,
        type:"Iphone",
        description:"The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner."


    },
    {
        id: 7,
        name: "Iphone 11 Black",
        quantity: 4,
        price: 1199,
        image: Iphone,
        type:"Iphone",
        description:"The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner.The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1\" screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling. The list of innovations includes a more capable triple camera setup, with a wide, ultra-wide and zoom cameras, as well as a LiDAR scanner."


    },
];

const cartList=[];
const user=[];

const App =()=> {
    const [listCart, setListCart] = useState(cartList);
    const [listOfP, setListOfP] = useState(listOfPhones);
    const [currentUser, setCurrentUser] = useState(user);

    const pass = {
        id: "102414693701386840515",
    };

    const clientId ="675266694834-ed76pk4qfh0qd3k8vtt0un7vsv0b3fn8.apps.googleusercontent.com"
    useEffect(()=>{
    const start=()=>{
        gapi.auth2.init({
            clientId:clientId,
            scope:""
        })
        }
        gapi.load('client:auth2',start);
    })

   // const accessToken = gapi.auth.getToken().access_token;

    const addPhoneHandler = (Phone) => {
        setListOfP((prevPhones) => {
                return [Phone,...prevPhones];
        });
    }

    const addCartHandler = (CartItem) => {
        console.log(CartItem)
            CartItem.quantity -=1;
            CartItem={
                ...CartItem,
                cartID:Math.random(),
            }
        setListCart((prevPhones) => {
            CartItem.quantity =1;
            return [CartItem,...prevPhones];
        });
    }

    const  deleteCartHandler1 = (CartItem) => {
        setListOfP((prevPhones) => {
            prevPhones.map(item => {
                if (CartItem.id === item.id) {
                    item.quantity = CartItem.quantity;
                }
            })
            return [...prevPhones];
        });
    }

    const  deleteCartHandler2 = (CartItem) => {
        setListCart((prevPhones) => {
            prevPhones.forEach(function(item, i) {
                if (CartItem.cartID === item.cartID) {
                    prevPhones.splice(i, 1);
                }
            })
            return [...prevPhones];
        });
    }

    const userSignIn=(user)=>{
        console.log(user)
        setCurrentUser(() => {
            return [user];
        });
    }

    const signOut=()=>{
        setCurrentUser(() => {
            return [];
        });
    }

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Header phones={listOfP}
                                              onAddPhone={addPhoneHandler}
                                              CartItems={listCart}
                                              signOut={signOut}
                                              userSignIn={userSignIn}
                                              currentUser={currentUser}
                                              pass={pass}
                                              fromCart1={deleteCartHandler1}
                                              fromCart2={deleteCartHandler2}

            />}>

                <Route path="Add" element={<AddNewProduct  onAddPhones={addPhoneHandler}/>}/>
                <Route index element={<ListOfItems phones={listOfP} onAddToCart={addCartHandler} />}/>
                <Route path="Home" element={<ListOfItems phones={listOfP} onAddToCart={addCartHandler} />}/>
                <Route path="Home/:type" element={<CategoryItemList  phones={listOfP} onAddToCart={addCartHandler}/>}/>
                <Route path="/:id" element={<ProductPage  phones={listOfP} onAddToCart={addCartHandler}/>} />
                <Route path="Cart/checkout" element={<OrderSubmit phones={listOfP}
                                                                  CartItems ={listCart}
                                                                  fromCart1={deleteCartHandler1}
                                                                  fromCart2={deleteCartHandler2}
                                                                  userSignIn={userSignIn}
                                                                  currentUser={currentUser}
                />}/>}

            </Route>
            <Route path="SignIn" element={<SignIn userSignIn={userSignIn} />} />
        </Routes>
    </div>
  );
}

export default App;
