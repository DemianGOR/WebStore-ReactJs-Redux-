import './App.css';
import  Header from "./JS/Header";
import React  from "react"
import {Route, Routes} from "react-router-dom";
import AddNewProduct from "./AddNewProduct/JS/AddNewProduct";
import SignIn from "./JS/SignIn";
import ListOfItems from "./Phones/JS/ListOfItems";
import ProductPage from "./ProductPage/JS/ProductPage";
import {CategoryItemList} from "./JS/CategoryItemList";
import {OrderSubmit} from "./JS/OrderSubmit";
import {Gallery} from "./Gallery/JS/Gallery";



const App =()=> {

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Header/>}>
                <Route path="Add" element={<AddNewProduct/>}/>
                <Route index element={<ListOfItems/>}/>
                <Route path="Home" element={<ListOfItems/>}/>
                <Route path="Gallery" element={<Gallery/>}/>
                <Route path="Home/:type" element={<CategoryItemList     />}/>
                <Route path="/:id" element={<ProductPage/>} />
                <Route path="Cart/checkout" element={<OrderSubmit/>}/>}
            </Route>
            <Route path="SignIn" element={<SignIn />} />
        </Routes>
    </div>
  );
}

export default App;
