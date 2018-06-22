import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="layout__container footer__container">
                    <div className="footer__copyright">
                        <p> <span className="far fa-copyright"></span> Havik Comics. All rights reserved. </p>
                    </div>
                </div>
            </footer>
        )
    }
}