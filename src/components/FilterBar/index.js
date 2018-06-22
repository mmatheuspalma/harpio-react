import React, { Component } from "react";

import { Select, Radio } from "antd";
const Option = Select.Option;

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class ProductItem extends Component {
    render() {
        const { results, changeView, changeOrder } = this.props;

        return (
            <div className="filter__bar"> 
                <div className="filter__bar__item">
                    <label> We found <b> { results } comics </b> </label>
                </div>
                <div className="filter__bar__item">
                    <label> Show </label>
                    <RadioGroup onChange={changeView} defaultValue="grid">
                        <RadioButton value="list">
                            <span className="fas fa-list-ul"></span>
                        </RadioButton>
                        <RadioButton value="grid">
                            <span className="fas fa-th"></span>
                        </RadioButton>
                    </RadioGroup>
                </div>
                <div className="filter__bar__item">
                    <label> Order by </label>
                    <Select placeholder="Selecione" onChange={changeOrder} defaultValue="id.desc">
                        <Option value="id.desc"> More recently </Option>
                        <Option value="id.asc"> More old </Option>
                    </Select>
                </div>
            </div>
        )
    }
}