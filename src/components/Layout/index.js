/*eslint-disable*/
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Layout as LayoutComponent, Col } from 'antd';

const { Content } = LayoutComponent;

import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

import 'normalize.css';
import './../../assets/css/app.scss';

export default class Layout extends Component {
    render() {
        const { breadcrumbs, search } = this.props;

        return (
            <LayoutComponent>
                <Header search={search} { ...this.props }/>
                <LayoutComponent>
                    <Col xs={24} md={15} className="layout__container"> 
                        { breadcrumbs && <Breadcrumb items={breadcrumbs} />}
                          <Content className="layout__content">                          
                              { this.props.children }
                          </Content>
                    </Col>
                </LayoutComponent>
                <Footer/>
            </LayoutComponent>
        );
    }
}