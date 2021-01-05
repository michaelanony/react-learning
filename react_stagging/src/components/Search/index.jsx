import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        console.log(this.keyWordElement.value)
        const { keyWordElement: { value: keyword } } = this
        axios.get(`http://127.0.0.1:4000/v1/r/cache?target_url=https://api.github.com/search/users?q=${keyword}`).then(
            resp => {
                console.log(resp.data.code)
                let a = resp.data.data
                let b = JSON.parse(a)
                console.log(b)
            },
            error => {
                console.log("failed")
            }
        )
    }
    render() {
        return (
            <div>
                <input ref={c => this.keyWordElement = c} type="text"></input>
                <button onClick={this.search}>search</button>
            </div>
        )
    }
}
