import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <select >
                    <option value=''>Show All</option>
                    <option value=''>Ascending Order</option>
                    <option value=''>Descending</option>
                </select>
            </div>
        )
    }
}

// onChange={this.props.dropdown}
// onChange={this.props.dropdown}