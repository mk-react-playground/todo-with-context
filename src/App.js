import React, { Component } from 'react'
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList'
import { TodoProvider } from './contexts/todoContext';


export default class App extends Component {
    state = {
        form: null
    }

    render() {
        return (
            <TodoProvider>
                <TodoListTemplate form={<Form/>}>
                    <TodoItemList/>
                </TodoListTemplate>
            </TodoProvider>
        )
    }
}
