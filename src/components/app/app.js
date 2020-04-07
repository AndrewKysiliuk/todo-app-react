import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import './app.css';
import ItemAddForm from "../item-add-form";

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Build React App'),
        ],
        searchedWord: '',
        filter: 'all'
    };

    createTodoItem(label) {
        return {label, important: false, id: this.maxId++, done: false};
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            return {todoData: todoData.map(x => {return {...x}}).filter(x => x.id !== id)}
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            return {todoData: [...todoData, newItem]};
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.toggleProperty(todoData, id, 'done')};
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.toggleProperty(todoData, id, 'important')};
        });
    };

    toggleProperty(arr, id, propName) {
        return arr.map(x => {
            const item = {...x};
            if (item.id === id) {
                item[propName] = !item[propName];
            }
            return item;
        })
    }

    onSearchTyped = (e) => {
        this.setState({searchedWord: e.target.value});
    };

    onFilterSwitched = (filter) => {
        this.setState({filter});
    };

    searchData(data, search) {
        if (search === '') {
            return data;
        }

        return data.filter(x => x.label.toUpperCase().includes(search.toUpperCase()));
    }

    filterData(filter, items) {
        switch (filter) {
            case 'all' :
                return items;
            case 'active':
                return items.filter(x => !x.done);
            case 'done':
                return items.filter(x => x.done);
        }
    }

    render() {
        const {todoData, searchedWord, filter} = this.state;
        const visibleItems = this.filterData(filter, this.searchData(todoData, searchedWord, filter));
        const doneCount = visibleItems.filter(x => x.done).length;
        const todoCount = visibleItems.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchTyped={this.onSearchTyped}/>
                    <ItemStatusFilter onFilterSwitched={this.onFilterSwitched} status={filter}/>
                </div>

                <TodoList todoData={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}/>
                <ItemAddForm addItem={this.addItem}/>
            </div>
        );
    }
}
