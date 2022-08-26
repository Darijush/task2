import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
function Pokemons() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.results);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
            <Pokemon items = {items}/>
          {/* {items.map(item => (
            <li key={item.id}>
              {item.name} {item.url}
            </li>
          ))} */}
        </ul>
      );
    }
  }

  export default Pokemons;