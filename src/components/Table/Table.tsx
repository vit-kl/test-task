import React, { Component } from 'react';
import { HTMLTable } from "@blueprintjs/core";
import { connect } from 'react-redux';
import { StateType } from '../../redux/reducers/table';
import './Table.css';

interface ITableProps {
    table: StateType;
}

class Table extends Component {
    render() {
        const { table } = this.props  as ITableProps;
        const filterValue = table.filterValue;
        const list = filterValue ? this.filterList(table.list, filterValue) : table.list.slice();
        
        const stringElements = list.map((value: string) => {
            return <tr key={value}><td>{value}</td></tr>
        })
        
        return (
            <HTMLTable className="table bp3-html-table-bordered">
                <thead>
                    <tr>
                        <th >Strings</th>
                    </tr>
                </thead>
                <tbody>{stringElements}</tbody>
            </HTMLTable>
        );
    }

    private filterList(list: Array<string>, filterValue: string): Array<string> {
        return list.filter((value: string) => value.includes(filterValue));
    }
}

const mapStateToProps = (state: ITableProps) => ({
	table: state.table
})

export default connect(
	mapStateToProps,
)(Table);