import React from 'react';
import styled from 'styled-components';

const FilmTitle = styled.h2`
font-size: 1.8rem;
color: white;
`
const Director = styled.p`
font-style: italic
`
const FilmStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-content: space-between;
margin-left: 400px;
margin-right: 400px;
background-color: pink;
opacity: 0.85;
border-radius: 20px;
margin-top: 8px;
padding: 10px;
`

const Film = props => {
    return (
        <FilmStyle>
            <FilmTitle>{props.film.title}, {props.film.release_date}</FilmTitle>
            <Director>Director: {props.film.director}</Director>
            <p>{props.film.description}</p>
        </FilmStyle>
    )
}

export default Film;