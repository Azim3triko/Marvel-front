import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Card =({item, ...props}) => {
    const [isFavorite, setisFavorite] = useState(false)
    const {store, actions} = useContext(Context)
    useEffect(() =>{
        if (!store.favorites.find(favorite => item.name == favorite.name)) {
            setisFavorite(false)
        }
    },[store.favorites]) 
    return (

        <div className="card unic m-2 border-danger border-3" style={{minWidth: "18rem"}} key={item.id}>
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} className="card-img-top" alt="..."/>
                    <div className="card-body bg-dark pb-2">
                        <h5 className="card-title text-white">{item.name}</h5>
                    <div className="container-fluid justify-content-between p-0 d-flex">
                        <Link type="button" className="btn btn-danger btn-sm" to={`/single/${props.resource}/${item.id}`}>{"Learn more!"}</Link>
                        <buttom type="button" className={`btn btn-${isFavorite
                        ? ""
                        : "outline-"}danger btn-sm ${props.key}`} onClick={(e)=>{
                        actions.addFavorites({...item, resource: props.resource})
                        setisFavorite (true) 
                    }}><i className="fa-regular fa-heart"></i></buttom>
                    </div>   
                    </div>
        </div> 
    );
};

Card.propTypes = {
    item: PropTypes.object,
    resource: PropTypes.string
}