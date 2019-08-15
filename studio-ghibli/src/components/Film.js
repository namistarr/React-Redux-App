import React from 'react';

const Film = props => {
    return (
        <div>
            <h3>{props.film.title}</h3>
            <p>{props.film.description}</p>
        </div>
    )
}