import React, { Component } from "react";
import { Link } from "react-router-dom";

import routeMap from './../../helpers/routes';
import slugify from 'slugify';

import { Col, Card, Rate } from "antd";

export default class ComicItem extends Component {
    render() {
        const { comic, version } = this.props;

        const sizes = {
            xs: (version === `grid`) ? 12 : 24,
            md: (version === `grid`) ? 6 : 24
        }

        const comicUrl = routeMap.comic.internal.url.replace(':comic', slugify(comic[1].toLowerCase())).replace(':id', comic[0]);

        return (
            <Col xs={sizes.xs} md={sizes.md} className={`comic__item ${version}`}>
                <Card className={`comic__item__body`}>
                    <div className="comic__item__body__thumb">
                        <Link to={comicUrl}>
                            <img src={ comic[3] } alt={comic[1]} title={comic[1]} />
                        </Link>
                    </div>
                    <div className="comic__item__body__title">
                        <Link to={comicUrl}>
                            <h4> { comic[1] } </h4>
                        </Link>
                    </div>
                    <div className="comic__item__body__actions">
                        <Link to={ `${comicUrl}` }> 
                            <span className="fa fa-angle-right"></span> View comic 
                        </Link>
                    </div>
                </Card>
            </Col>
        )
    }
}