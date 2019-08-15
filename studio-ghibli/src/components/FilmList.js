import React from 'react';
import { connect } from 'react-redux';
import { getFilms } from '../actions';
import Loader from 'react-loader-spinner';

const FilmList = props => {
    return (
        <div className='film-container'>
            <h1>Welcome</h1>
            <button className ='film-button' onClick={props.getFilms}>
                {props.isLoading ? (
                    <Loader type='Oval' color='#FFA500' height={15} width={100} />
                ) : (
                    'See Studio Ghibli Films'
                )}

            </button>
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