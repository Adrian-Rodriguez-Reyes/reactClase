import React from 'react';

function AnimalList() {
    const animals = [
        {
            id:1,
            name:"dog",
            img: "https://placedog.net/500"
        },
        {
            id:2,
            name:"cat",
            img:"https://cataas.com/cat"
        },
        {
          id:3,
          name:"bird",
          img:"https://tse1.mm.bing.net/th?id=OIP.zwCdybfK6gUR-oSTgMobGQHaE8&pid=Api&P=0&h=180\n"
        }
    ];
    const animalsHtml = animals.map((animal) =>{
        return(
            <li key={animal.id}>
                <h3>{animal.name}</h3>
                <img src={animal.img} alt="animal picture" width={200} height={150}/>
            </li>
        )
    });
    return (
        <section>
            <h2>Animals:</h2>
            <ul>
                {animalsHtml}
            </ul>
        </section>
    );
}

export default AnimalList;