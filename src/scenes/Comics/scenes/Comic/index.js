import React, { Component } from "react";
import { connect } from 'react-redux'

import routeMap from './../../../../helpers/routes'

import { Row  } from 'antd';

import Layout from './../../../../components/Layout';

import { listComic, loadComic } from './../../../../redux/Comic/actions';

import { ComicCardView } from './components/QuickView'
import { ComicCardFake } from './components/QuickView/Fake'

class Comic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comic: []
        }

        this.comicId = parseInt(props.match.params.id, 10)
    }

    getComicFromStore(comics) {
        return comics.filter(comic => comic[0] === this.comicId)
    }

    componentDidMount() {
        if (this.props.comic.response === undefined && this.props.comics.response === undefined) {
            this.props.dispatch(loadComic(this.comicId)).then(() => {
                this.setState({
                    comic: this.props.comic.response
                })
            }) 
        } else if (this.props.comic.response !== undefined && this.props.comic.response.id === this.comicId) {
            this.setState({
                comic: this.props.comic.response
            })
        } else {
            this.setState({
                comic: this.getComicFromStore(this.props.comics.response)[0]
            })
        }           
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match !== undefined && nextProps.match.params.id !== this.props.match.params.id) {
            this.props.dispatch(loadComic(nextProps.match.params.id)).then(() => {
                this.setState({
                    comic: this.props.comic.response
                })
            })
        }
    }

    render() {
        const breadcrumb = [
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
            <Layout breadcrumbs={ breadcrumb } { ...this.props}>
                {
                    this.props.comic.isFetching 
                    ? <ComicCardFake />
                    : <ComicCardView comic={this.state.comic} />
                } 
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comic: state.harpio.Comic.comic,
        comics: state.harpio.Comic.list
    }
}

export default connect(mapStateToProps)(Comic)