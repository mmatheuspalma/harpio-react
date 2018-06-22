import React, { Component } from "react";

import Layout from './../../components/Layout';
import NoResults from './../../components/NoResults';

export default class NotFound extends Component {
    render() {
        let breadcrumb = [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Página não encontrada',
                link: '/',
            }
        ]

        return (
            <Layout breadcrumbs={breadcrumb} { ...this.props }> 
                <NoResults title="Oops!" message="Infelizmente não pudemos encontrar a página que procura"/>
            </Layout>
        )
    }
}