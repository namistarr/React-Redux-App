import React from 'react';
import { connect } from 'react-redux';
import { getFilms } from '../actions';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import Film from './Film';

const Button = styled.button`
background: none;
border: 1px solid white;
border-radius: 8px;
color: white;
font-size: 1rem;
width: 100px;
`

const PageTitle = styled.h1`
color: #FFFFFF;
`



const FilmList = props => {
    return (
        <div className='film-container'>
            <PageTitle>Studio Ghibli</PageTitle>
            <Button className ='film-button' onClick={props.getFilms}>
                {props.isLoading ? (
                    <Loader type='Oval' color='#FFFFFF' height={15} width={100} />
                ) : (
                    'See Films'
                )}
            </Button>
            {props.films && 
                props.films.map(film => <Film key={film.title} film={film} />)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        films: state.films
    };    
};

export default connect (
    mapStateToProps,
    { getFilms }
)(FilmList);