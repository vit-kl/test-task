import React, { Component } from 'react';
import { InputGroup } from "@blueprintjs/core";
import { connect } from 'react-redux';
import { filterLines, ActionsTypes } from '../../redux/actions';
import './SearchInput.css'

interface IAddButtonProps {
    filterLines: (string: string) => ActionsTypes;
}

class SearchInput extends Component {
	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event ? event.target.value : '';
        const { filterLines } = this.props as IAddButtonProps;
        filterLines(value);
    }
    
	render() {
		return (
            <InputGroup
                type="text" 
                onChange={this.handleChange}
                placeholder="SearchInput"
                className="search-input"
            />
		);
	}
}

const mapDispatchToProps = {
	filterLines
}
export default connect(
	null,
	mapDispatchToProps
)(SearchInput);