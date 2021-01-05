import React, { Component } from 'react'
import Search from '../../components/Search/index'
import List from '../../components/List/index'
export default class GithubSearch extends Component {
    render() {
        return (
            <div>
                <Search />
                <List />
            </div>
        )
    }
}
