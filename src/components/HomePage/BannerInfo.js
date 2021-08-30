import "../../Styles/HomePageStyle/BannerInfo.css"
// import BuyProduct from "./Banner/BuyProduct";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import useAuth from '../../Auth/useAuth';
import {getProductBuyAction} from '../../redux/itemBuyDucks'
import { useDispatch } from "react-redux";


const BannerInfo = ({item}) => {
    const dispatch = useDispatch()


    // const auth =  useAuth()

    // const handleProduct = (itemProductBuy) => {
    //     auth.changeProduct(itemProductBuy)
    // }


    // getProductBuyAction
    

    console.log(item)


    return (
        <div className="BannerInfo">
            <div className="DescriptionBanner">
                <h3>{item.DESCRIPCION}</h3>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <Link to="/compraproducto"><button 
                onClick={dispatch(getProductBuyAction(item))}
                > comprar producto </button></Link>
            </div>
            <div className="ImgBanner">
                hola
                {/* <img src={infoBannerdata.url} alt="ImgBanner"></img> */}
            </div>
        </div>
    );
};

export default BannerInfo;