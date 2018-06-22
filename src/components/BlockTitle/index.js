import React, { Component } from "react";

export default class BlockTitle extends Component {
    render() {
        const { title } = this.props

        return (
            <div className="block__title">
                <h2> { title } </h2>
            </div>
        )
    }
}