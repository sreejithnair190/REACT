import { Component } from "react";
import '../style/searchBox.css';

class SearchBox extends Component {

    render() {
        const {onChangeHandler, placeholder, className} = this.props;

        return (
            <input 
                type="search"
                className={`search-box ${className}`}
                placeholder= {placeholder}
                onChange={onChangeHandler}
            />
        );
    }
}

export default SearchBox;