// import React, { useEffect, useState } from 'react';
// import useAuth from '../../../Auth/useAuth';
import Information from '../Information';
import NavigationBar from '../NavigationBar';
import {useSelector} from "react-redux";
import "../../../Styles/HomePageStyle/Banner/BuyProduct.css"


function BuyProduct() {

    const item = useSelector(store=> store.buyProduct.array)
    // const [dataProductBuy,setDataProductBuy] = useState([null])

    // const auth = useAuth()

    // useEffect(()=> {
    //     setDataProductBuy(auth.itemProductBuy)
    // },[auth])

    // console.log(dataProductBuy)
    console.log(item)

    return (
        <div className="BuyProduct">
            <Information/>
            <NavigationBar/>
            <div className='Description'>
                <h2>Nuestro Productos</h2>
                <p>Incio - Nuestros productos</p>
            </div>
            <div className="InfoBuyProduct">
                hola
            </div>
            
        </div>
    );
}

export default BuyProduct;