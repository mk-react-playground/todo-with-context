import React, { Component, createContext } from 'react'

const Context = createContext();
const { Provider, Consumer } = Context;

class TodoProvider extends Component {

    constructor(props) {
        super(props);

        const { change, create, keyPress } = this;
    }

    state = {
        id: 2,
        input: '',
        todos: [
            { id: 0, text: 'context API Study', checked: false },
            { id: 1, text: 'react 복습하기', checked: true },
            { id: 2, text: 'todo 리스트 만들어보기', checked: false },
        ]
    }

    // actions
    change = (e) => {
        this.setState({
            input: e.target.value,
        });
    }

    create = () => {
        const { input, todos, id } = this.state;
        
        this.setState({
            input: '',
            id: id + 1,
            todos: todos.concat({
                id: id + 1,
                text: input,
                checked: false,
            }),
        });
    }

    keyPress = (e) => {
        if ( e.key === 'Enter' ) {
            this.create();
        }
    }

    remove = (removeId) => {
        const { todos, id } = this.state;

        this.setState({
            todos: todos.filter(todo => todo.id !== removeId),
            id: id - 1,
        })
    }

    toggle = (id) => {
        const { todos } = this.state;
        const copy = todos.concat();
        const fixed = copy.map(todo => {
            if ( todo.id === id ) {
                todo.checked = !todo.checked;
            }
            return todo;
        });

        this.setState({
            todos: fixed,
        })
    }


    render() {
        const { state, change, keyPress, create, remove, toggle } = this;
        const actions = { change, keyPress, create, remove, toggle };
        const value = { state, actions };

        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }

}

export {
    TodoProvider,
    Consumer
}
