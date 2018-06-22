import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as Image from './../../assets/images/banner/banner.jpg'; 

export default class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <div className="layout__container">
                    <Link to="/">
                        <img src={Image} alt=""/>
                    </Link>
                </div>
            </section>
        )
    }
}