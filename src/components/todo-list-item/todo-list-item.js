import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {
    render() {
        const {label, onDeleted, done, important, onToggleDone, onToggleImportant} = this.props;
        let className = 'todo-list-item';

        className += done ? ' done' : '';
        className += important ? ' important' : '';


        return (
            <span className={className}>
          <span
              className="todo-list-item-label"
              onClick={onToggleDone}>
            {label}
          </span>

          <button type="button"
                  onClick={onToggleImportant}
                  className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation"/>
          </button>

          <button type="button"
                  onClick={onDeleted}
                  className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o"/>
          </button>
        </span>
        );
    }
}
