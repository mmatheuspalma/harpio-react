import React, { Component } from "react";

import { Link } from "react-router-dom";

import * as NotFound from '../../assets/images/errors/404.png';

export default class NoResults extends Component {
    render() {
        const { title, message } = this.props;

        return (
            <div className="not__found"> 
                <div className="not__found__info">
                    <h1> { title } </h1> 
                    <p> { message } </p>
                    <Link to="/"> Ir para home </Link>
                </div>
                <div className="not__found__thumb">
                </div>
            </div>
        )
    }
}