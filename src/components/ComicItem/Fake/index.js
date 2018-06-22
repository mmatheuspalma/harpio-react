import React, { Component } from "react";

import { Col, Card } from "antd";

export default class ComicFakeItem extends Component {
    render() {
        const { version, amount } = this.props;

        const sizes = {
            xs: (version === `grid`) ? 12 : 24,
            md: (version === `grid`) ? 6 : 24
        }

        return (
            [...Array(amount)].map((num, index) => (
                <Col xs={sizes.xs} md={sizes.md} className="comic__item loading" key={index}>
                    <Card className="comic__item__body">
                        <div className="comic__item__body__thumb">
                        </div>
                        <div className="comic__item__body__title">
                        </div>
                        <div className="comic__item__body__actions">                                                
                            <span></span>
                        </div>
                    </Card>
                </Col>
            ))
        )
    }
}