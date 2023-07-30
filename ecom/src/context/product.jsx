import { createContext, useEffect, useState } from "react";
// import { addCollectionAndDocument } from "../utils/firebase/firebase";
// import SHOP_DATA from "./../json/shop-data.js"
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";


export const ProductContext = createContext({
    products:{}
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState({});

    // To Add Collection in firestore
    // useEffect(() => {
    //     addCollectionAndDocument("categories", SHOP_DATA)
    // }, [])

    useEffect(() => {
        const getProductsMap = async () => 
            setProducts(await getCategoriesAndDocuments("categories"));
        getProductsMap();
    }, [])

    const value = { products, setProducts };
    return (<ProductContext.Provider value={value}>{children}</ProductContext.Provider>);
}