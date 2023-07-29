import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocument } from "../utils/firebase/firebase";
import SHOP_DATA from "./../json/shop-data.js"

export const ProductContext = createContext({
    products:[]
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        addCollectionAndDocument("categories", SHOP_DATA)
    }, [])
    const value = { products, setProducts };
    return (<ProductContext.Provider value={value}>{children}</ProductContext.Provider>);
}