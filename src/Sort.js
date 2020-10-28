import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.dropdown}>
                    <option value=''>Show All</option>
                    <option value=''>Ascending Order</option>
                    <option value=''>Descending</option>
                </select>
            </div>
        )
    }
}
