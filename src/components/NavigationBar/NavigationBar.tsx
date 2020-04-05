import React, { Component } from 'react';
import { Navbar } from "@blueprintjs/core";
import SearchInput from '../SearchInput/SearchInput';
import AddButton  from '../AddButton/AddButton';
import './NavigationBar.css';

export default class NavigationBar extends Component {
    render() {
       return (
            <div className="wrapper-header"> 
                <Navbar className="header">
                    <h1>NavigationBar</h1>
                </Navbar> 
                <div className="container-search">
                    <SearchInput />
                    <AddButton />
                </div>
            </div>
            );
    }
}