import style from "../Card/Card.module.scss"
import React, { useState, useEffect } from 'react'


type CardProps = {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  }
  

 
    const Card = ({name, status, species, gender, image}: CardProps) => {


    return (
        <div className={style.cardWrap}>
            <div className="img-side">
                <img src={image} alt="Rick and Morty character" />
            </div>
            <div className={style.textSide}>
                <span>Name: {name}</span>
                <span>Status: {status}</span>
                <span>Species: {species}</span>
                <span>gender: {gender}</span>
                <button>MORE</button>
            </div>
        </div>
      
    );
  };
  

  export default Card