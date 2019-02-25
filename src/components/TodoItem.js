import React, { Component } from 'react'
import { Consumer } from '../contexts/todoContext';
import './TodoItem.css'


export default class TodoItem extends Component {

    

    render() {
        const { text, checked, id, onToggle } = this.props;

        return (
            <Consumer>
                {({state, actions}) => {
                    const remove = (e) => {
                        e.stopPropagation();
                        actions.remove(id);
                    }

                    return (
                        <div className="todo-item" onClick={() => actions.toggle(id)}>
                            <div className="remove" onClick={remove}>&times;</div>
                            <div className={`todo-text${checked && ' checked'}`}>
                                <div>{text}</div>
                            </div>
                            { checked && (
                                    <div className="check-mark">✓</div>
                            )}
                        </div>
                )}}
            </Consumer>
        )
    }
}
