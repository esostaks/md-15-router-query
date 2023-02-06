import Card from '../Card/Card'
import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'



  

const Characters = () => {
  type CardData = {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  }
  
  // const { data, isLoading } = useQuery(['character'], () => {
  //      fetch('https://rickandmortyapi.com/api/character/')
  //      .then((response) => response.json())
  //     .then((response) => response.data)
  // })

  const [cards, setCards] = useState<CardData[]>([])


  useEffect(() => {
    getCards()
    }, [])


  const getCards = () => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then(data => setCards(data.results));
  }

    return (
        <div>
            <div className='main__wrapper'>
              {cards.map(({name, status, species, gender, image}) => (
              <Card
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              />
            ))}

          </div>
        </div>
      
    );
  };
  

  export default Characters