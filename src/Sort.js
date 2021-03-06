import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (

            <div className='drop-downs'>
                <select onChange={this.props.handleSortOrder}>
                    <option value=''>Order</option>
                    <option value='asc'>Ascending Order</option>
                    <option value='desc'>Descending Order</option>
                </select>
                <select onChange={this.props.handleSortType}>
                    <option value='' >Sort By</option>
                    <option value='attack' >Attack</option>
                    <option value='defense'>Defense</option>
                    <option value='type'>Type</option>
                </select>
            </div>
        )
    }
}