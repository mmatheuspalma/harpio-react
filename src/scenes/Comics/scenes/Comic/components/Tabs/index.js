import React, { Component } from "react"

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export class ProductViewTabs extends Component {
    render() {
        const { details } = this.props;

        return (
            <div className="layout__container">
                <section className="product__internal__tabs">
                    <Tabs size={"Large"}>
                        {/* <TabPane tab="Lojas" key="1">
                            <div className="product__internal__tab">
                                <div className="product__internal__tab__title">
                                    <h1> Informações Básicas </h1>
                                </div>
                                <div className="product__internal__tab__items">
                                    <div className="product__internal__tab__item">
                                        <div className="product__internal__tab__item__title">
                                            <h3> Descrição </h3>
                                        </div>
                                        <div className="product__internal__tab__item__desc">
                                            <p> {details.description} </p>
                                        </div>
                                    </div>
                                    <div className="product__internal__tab__item">
                                        <div className="product__internal__tab__item__title">
                                            <h3> Descrição </h3>
                                        </div>
                                        <div className="product__internal__tab__item__desc">
                                            <p> {details.description} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane> */}
                        <TabPane tab="Detalhes" key="1">
                            <div className="product__internal__tab">
                                <div className="product__internal__tab__title">
                                    <h1> Informações Básicas </h1>
                                </div>
                                <div className="product__internal__tab__items">
                                    <div className="product__internal__tab__item">
                                        {/* <div className="product__internal__tab__item__title">
                                            <h3> Descrição </h3>
                                        </div> */}
                                        <div className="product__internal__tab__item__desc">
                                            <p> {details.description} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        {/* <TabPane tab="Avaliações" key="3">
                            <div className="product__internal__tab">
                                <div className="product__internal__tab__title">
                                    <h1> Informações Básicas 2 </h1>
                                </div>
                                <div className="product__internal__tab__items">
                                    <div className="product__internal__tab__item">
                                        <div className="product__internal__tab__item__title">
                                            <h3> Descrição </h3>
                                        </div>
                                        <div className="product__internal__tab__item__desc">
                                            <p> {details.description} </p>
                                        </div>
                                    </div>
                                    <div className="product__internal__tab__item">
                                        <div className="product__internal__tab__item__title">
                                            <h3> Descrição </h3>
                                        </div>
                                        <div className="product__internal__tab__item__desc">
                                            <p> {details.description} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane> */}
                    </Tabs> 
                </section>
            </div>
        )
    }
}