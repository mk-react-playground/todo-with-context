import React from 'react'
import { Consumer } from '../contexts/todoContext';
import './Form.css';


const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <Consumer>
                {({ state, actions }) => (
                    <>
                        <input
                            value={state.input}
                            onChange={actions.change}
                            onKeyPress={actions.keyPress}
                        />
                        <button className="create-button" onClick={actions.create}>추가</button>
                    </>
                )}
            </Consumer>
        </div>
    )
}

export default Form;
