import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Breadcrumb } from 'antd';

export default class BreadcrumbComponent extends Component {
    render() {
        return (
            <Breadcrumb className="breadcrumb">
                { 
                    this.props.items.map((breadcrumb, index) => (
                        <Breadcrumb.Item className="breadcrumb__item" key={ index }>
                            <Link to={breadcrumb.link}>
                                { breadcrumb.name } 
                            </Link>
                        </Breadcrumb.Item>
                    )) 
                }
            </Breadcrumb>
        )
    }
}