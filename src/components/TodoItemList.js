import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { Consumer } from '../contexts/todoContext';
import './TodoItemList.css';

export default class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <Consumer>
                {({state, actions}) => {
                    return (
                        state.todos.map(todo => (
                            <TodoItem
                                text={todo.text}
                                checked={todo.checked}
                                id={todo.id}
                                key={todo.id}
                            />
                        ))
                    )
                }}
            </Consumer>
        )
    }
}
