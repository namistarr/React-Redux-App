import React from 'react';
import styled from 'styled-components';

const FilmTitle = styled.h2`
font-size: 1.8rem;
`
const Director = styled.p`
font-style: italic
`


const Film = props => {
    return (
        <div>
            <FilmTitle>{props.film.title}, {props.film.release_date}</FilmTitle>
            <Director>Director: {props.film.director}</Director>
            <p>{props.film.description}</p>
        </div>
    )
}

export default Film;