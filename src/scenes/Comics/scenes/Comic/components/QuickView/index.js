import React, { Component } from "react"

import routeMap from './../../../../../../helpers/routes';

import { Rate , Button } from 'antd'

export class ComicCardView extends Component {
    render(){        
        return(
            <div className="container_product_view">    
                <div className="carrosel_product">
                    <div className="product_show_carrosel">
                        <img className="product_show_image" src={this.props.comic[3]} alt=""/>
                    </div>    
                </div>    
                <div className="product_view">    
                    <div className="product_title">
                        <h1 className="title">{this.props.comic[1]}</h1>
                    </div>    
                </div>
            </div> 
        )
    }

}