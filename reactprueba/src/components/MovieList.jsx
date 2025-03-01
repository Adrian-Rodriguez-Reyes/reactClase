import React, {useEffect} from 'react';

function MovieList() {
    const movies = ["Lord of the rings" , "Star Wars", "Dune 2"];
    const HTMLmovies = movies.map((movie, index) => {
        return <p key={movie}> {index + 1} - {movie}</p>
    })
    //Cada vez que se monte se mostrara la info
    useEffect(() => {
        console.log("MovieList Mounted");
    }, []);
    //Se pone un array vacio para que solo se ejecute la 1 vez que se rendericw
    useEffect(() => {
        return () => {
            console.log("MovieList unmounted");
        }
    }, []);
    return (
        <section>
            <h2>Movies</h2>
            {HTMLmovies}
        </section>
    );
}

export default MovieList;