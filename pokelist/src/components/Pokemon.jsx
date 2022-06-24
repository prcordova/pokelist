import React, { Component } from 'react';
import styles from './Pokemon.module.css';

export function Pokemon(props) {

    return (
        <div className={styles.card}>
            <div className="row">
                <div className="col-12">
                    <h1>Pokemon</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6">

                    <p> {props.pokemon.name}</p>
                </div>
                <div className="col-6">
                    <a href={props.pokemon.url} >Link {props.pokemon.url}</a>
                </div>
                
            </div>

        </div>
    );

}
