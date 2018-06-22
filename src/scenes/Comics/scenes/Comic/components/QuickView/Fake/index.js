import React, { Component } from 'react';

import { Rate, Button, Col } from 'antd';

export class ComicCardFake extends Component {
    render() {
        return (
            <Col style={{ width : '100%' }}>
                <div className="container_product_view__fake">
                    <div className="carrosel_product">
                        <div className="product_show_carrosel">
                            
                        </div>
                    </div>
                    <div className="product_view">
                        <div className="product_title">
                            <h1 className="title"></h1>
                        </div>
                        <div className="product_box_details">
                            <div className="product_box product_price">
                            
                            </div>
                            <div className="product_box product_validation">
                                {/* <div className="product_box_view">
                                <h4 className={["title_product"]}>Avaliações</h4>
                                <Rate disabled defaultValue={ rate } />
                            </div> */}
                                <Button className={"product_button_disput"} size={'large'} >
                                    <span className="fas fa-eye"> </span> Ver Produto</Button>
                            </div>    
                        </div>
                        <div className="product_setings">
                            <div className="setings_icons">
                                <div className="icon_box">
                                   
                                </div>
                                <div className="icon_box">
                                   
                                </div>
                                <div className="icon_box">
                                    
                                </div>
                            </div>
                            <div className="setings_icons_social">
                                <div className={["icon_social facebook"]}>
                                    <span className="fab fa-facebook-f"></span>
                                </div>
                                <div className={["icon_social twitter"]}>
                                    <span className="fab fa-twitter"></span>
                                </div>
                                <div className={["icon_social google"]}>
                                    <span className="fab fa-google"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </Col>
        )
    }
}