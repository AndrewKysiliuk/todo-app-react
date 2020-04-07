import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    checkStatus = (status) => {
        return `btn ${this.props.status === status ? 'btn-info' : 'btn-outline-secondary'}`
    };

    render() {
        const {onFilterSwitched} = this.props;
        return (
            <div className="btn-group">
                <button type="button"
                        className={this.checkStatus('all')}
                        onClick={() => {
                            onFilterSwitched('all')
                        }}>All
                </button>
                <button type="button"
                        className={this.checkStatus('active')}
                        onClick={() => {
                            onFilterSwitched('active')
                        }}>Active
                </button>
                <button type="button"
                        className={this.checkStatus('done')}
                        onClick={() => {
                            onFilterSwitched('done')
                        }}>Done
                </button>
            </div>
        );
    }
};

