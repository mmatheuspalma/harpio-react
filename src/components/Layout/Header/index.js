/*eslint-disable*/
import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

import history from './../../../history';
import routeMap from './../../../helpers/routes';

import { Col, Affix } from "antd";
import slugify from 'slugify';

import { search } from './../../../redux/Search/actions';

class Header extends Component {
    constructor() {
        super()        

        this.state = {
            lastScrollPos: 0,
            changedPos: undefined,
            down: true,
            isFixed: false,
            search: ''
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

        setTimeout(() => {            
            this.setState({
                search: this.props.search.response || ''
            })
        }, 100);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const thisPos = window.pageYOffset;
        const down = thisPos > this.state.lastScrollPos;
        const changedPos = down !== this.state.down ? thisPos : this.state.changedPos;

        this.setState({
            lastScrollPos: thisPos,
            changedPos,
            down
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let searchSlug = slugify(this.state.search);

        this.props.dispatch(search(this.state.search));

        history.push((searchSlug.length) ? routeMap.comic.list.route.replace(':search?', searchSlug) : '/');
    }

    handleChange(event) {
        this.setState({
            search: event.target.value
        })

        this.props.dispatch(search(event.target.value));
    }

    onAffixHeader(isFixed) {
        this.setState({
            isFixed: isFixed,
        })
    }

    render() {       
        return (            
            <Affix className="affix__header" onChange={this.onAffixHeader.bind(this)}>
                <header className={`header ${(this.state.isFixed && this.state.down) ? `hideMenu` : ``}`}>
                    <div className="header__middle">
                        <div className="layout__container header__container">
                            <div className="header__logo">
                                <Link to="/">
                                    <img src="https://www.havik.com.br/assets/imgs/logo.svg" alt="" title=""/>
                                </Link>
                            </div>
                            <div className="header__search">
                                <form onSubmit={ this.handleSubmit.bind(this) }>
                                    <input type="search" name="search" placeholder="Type the comic what you want" value={this.state.search} onChange={this.handleChange.bind(this)}/>
                                    <button type="submit" className="button button__search">
                                        <span className="search fas fa-search"> </span >
                                    </button> 
                                </form>
                            </div>
                            {/* <div className="header__login">
                                <div className="header__login__photo">  
                                    { this.state.customer.photo && <img src={this.state.customer.photo} alt="" title="" /> }                                                   

                                    { !this.state.customer.photo && <span className="fas fa-user"> </span> }                    
                                </div>
                                <div className="header__login__info">
                                    { !this.state.customer.name && "Entrar" }                            
                                </div>
                            </div> */}
                        </div>
                    </div>     
                </header>
            </Affix>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.harpio.Search.search
    }
}

export default connect(mapStateToProps)(Header)