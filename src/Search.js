import React, {Component, PropTypes} from 'react';

export default class Search extends Component {


    render() {
        const divStyle = {
            margin: '5px'
        };

        return (

            <div className='row'>
                <div className=' col-xs-10 '>
                    <input type='text' className="form-control" style={divStyle}
                           value={this.props.searchText}
                           onChange={ event => this.props.onChange(event) }
                    />
                </div>
                <div className='col-xs-2'>
                    <button className="btn btn-primary" style={divStyle}
                            onClick={ event => this.props.onClick(event)}
                    >Search
                    </button>
                </div>
            </div>
        )
    }

}

Search.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    searchText:PropTypes.string
};









