import React, { Component } from 'react'
import './TodoItem.css'

export default class TodoItem extends Component {

    remove = e => {
        const { onRemove, id } = this.props;
        e.stopPropagation();
        onRemove(id);
    }

    render() {
        const { text, checked, id, onToggle } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={this.remove}>&times;</div>
                <div className={`todo-text${checked && ' checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (
                        <div className="check-mark"></div>
                    )
                }
            </div>
        )
    }
}
