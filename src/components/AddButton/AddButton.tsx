import React, { Component } from 'react';
import { Button, Intent } from "@blueprintjs/core";
import { connect } from 'react-redux';
import { addString, ActionsTypes } from '../../redux/actions';

interface IAddButtonProps {
    addString: (string: string) => ActionsTypes;
}

class AddButton extends Component {
    addString = () => {
        const { addString } = this.props as IAddButtonProps;
        addString(this.randomString());
    }
    
    render() {
		return (
            <Button 
            icon = "plus" 
            intent = {Intent.PRIMARY}
            onClick = {this.addString}/>
		);
    }

    private randomString(): string {
        let rnd = '';
        while (rnd.length < 40) {
            rnd += Math.random().toString(36).substring(2);
        }
        const word = rnd.match(/[a-z]/gi);
        return word ? word.join('') : 'testing';
    };
}

const mapDispatchToProps = {
	addString
}

export default connect(
	null,
	mapDispatchToProps
)(AddButton);
