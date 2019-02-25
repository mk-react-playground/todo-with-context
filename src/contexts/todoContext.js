import React, { Component, createContext } from 'react'

const Context = createContext();
const { Provider, Consumer } = Context;

class TodoProvider extends Component {

    constructor(props) {
        super(props);

        const { change, create, keyPress } = this;
        this.actions = {
            change, keyPress, create
        };
    }

    state = {
        id: 3,
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
        const { input, todos } = this.state;
        
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
            })
        })
    }

    keyPress = (e) => {
        if ( e.key === 'Enter' ) {
            this.create();
        }
    }


    render() {
        const { state, actions } = this;
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
