import React, { Component } from "react";
import { connect } from 'react-redux';

import routeMap from './../../helpers/routes';

import { Col, Row, Pagination } from "antd";

import Layout from './../../components/Layout';

import ComicItem from './../../components/ComicItem';
import ComicFakeItem from './../../components/ComicItem/Fake';

import FilterBar from './../../components/FilterBar';
import NoResults from './../../components/NoResults';

import { listComic } from './../../redux/Comic/actions';

class Comics extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comics: [],
            isFetchingComics: true,
            order: 'desc',
            orderBy: 'id',
            comicView: 'grid',
            search: false
        }
    }
    
    setSearchState(props) {
        this.setState({
            search: props.match !== undefined ? props.match.params.search : false
        })
    }

    setComicsOnState() {
        this.setState((prevState, props) => ({
            isFetchingComics: props.comics.isFetching,
            comics: props.comics.response
        }))
    }

    mountParams() {
        let params = {
            order: this.state.order,
            orderBy: this.state.orderBy,
            search: this.state.search
        }

        let verifiedParams = {}       

        Object.keys(params).filter(param => params[param] ? verifiedParams[param] = params[param] : '')

        return verifiedParams
    }

    verifyComicsOnState() {
        this.props.dispatch(listComic(this.mountParams())).then(() => this.setComicsOnState())
    }

    changeView(viewType) {
        this.setState((prevState, props) => ({
            comicView: viewType.target.value
        }))
    }

    changeOrder(value) {
        let order   = value.split('.')[1];
        let orderBy = value.split('.')[0];

        this.setState((prevState, props) => ({
            order, 
            orderBy,
            isFetchingComics: true
        }));  
        
        setTimeout(() => {
            this.verifyComicsOnState();
        }, 100);
    }
    
    componentDidMount() {
        this.setSearchState(this.props)

        setTimeout(() => {
            this.verifyComicsOnState()
        }, 100);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match !== undefined && nextProps.match.params.search !== this.props.match.params.search) {           
            this.setSearchState(nextProps)
            
            setTimeout(() => { 
                this.verifyComicsOnState() 
            }, 100) 
        }
    }

    render() {
        const { changePage, changeView, changeOrder } = this;
        const { comics, isFetchingComics, comicView } = this.state;  

        let breadcrumb = [
            {
                name: 'Home',
                link: '/',
            },
            {
                name: routeMap.comic.list.title,
                link: routeMap.comic.list.url
            }
        ]

        return (
            <Layout breadcrumbs={ breadcrumb } { ...this.props }> 
                <Col md={24}>
                    <Row>
                        <FilterBar results={ !isFetchingComics ? comics.length : 0 } changeView={changeView.bind(this)} changeOrder={changeOrder.bind(this)}/>
                    </Row>
                </Col> 
                <Col md={24} className="comics__container">
                    <Row gutter={26}>
                        {
                            isFetchingComics
                            ? <ComicFakeItem xs={24} md={6} spacing={13} version={comicView} amount={10} /> 
                            : comics.map((comic, index) => (<ComicItem comic={comic} version={comicView} key={index}/>))                    
                        }
                    </Row>
                </Col>         
                {
                    !isFetchingComics && !comics.length
                    ? <NoResults title="Oops!" message={[`We not found results to`, <b> {this.props.search.response}. </b>]}/>
                    : ''
                }
            </Layout>      
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comics: state.harpio.Comic.list,
        search: state.harpio.Search.search
    }
}

export default connect(mapStateToProps)(Comics)