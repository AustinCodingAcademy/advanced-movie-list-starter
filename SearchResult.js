import React, {Component, PropTypes} from 'react';

export default class SearchResult extends Component {
    render() {

        if(!this.props.visible){
            return (null);
        }

        if(this.props.movie==null ){
            return (<div>No results were found.</div>);
        }

        const divStyle = {
            padding: '50px'
        };
        const btnStyle = {
            margin: '5px'
        };

        return (
            <div style={divStyle}>
                <div className="row">
                    <div className="col-xs-11">
                        <img alt="" src={'//image.tmdb.org/t/p/w154' + this.props.movie.poster_path}/>
                    </div>
                    <div className="col-xs-1">
                        <i className="fa fa-times fa-4x" aria-hidden="true"  onClick={ event => this.props.onCancelSearch(event)}></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>{this.props.movie.original_title}</h1>
                    </div>
                    <div className="col-xs-12">
                        <h2>{this.props.movie.overview}</h2>
                    </div>
                    <div className="col-xs-4 col-offset-8">
                        <button className="btn btn-primary" style={btnStyle}
                                onClick={ event => this.props.onAdd(event)}
                        >Add to collection</button>
                    </div>
                </div>
            </div>

        )

    }

}
SearchResult.propTypes = {
    movie: PropTypes.object,
    visible: PropTypes.bool,
    onCancelSearch: PropTypes.func,
    onAdd: PropTypes.func
};
