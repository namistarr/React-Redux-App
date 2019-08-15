import React from 'react';

const Film = props => {
    return (
        <div>
            <h3>{props.film.title}, {props.film.release_date}</h3>
            <p>Director: {props.film.director}</p>
            <p>{props.film.description}</p>
        </div>
    )
}

export default Film;