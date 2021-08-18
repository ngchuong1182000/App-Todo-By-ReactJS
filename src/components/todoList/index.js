import React from 'react';
import PropTypes from 'prop-types';

import "./style.css"

class TodoList extends React.Component {

    render() {
        let className = "todo-item";
        let img = "./check.svg"
        let edit = "./edit.svg"
        let { item, onClick, update, onChangeValue, handleSetState } = this.props;
        if (item.isComplete) {
            className += " isComplete";
            img = "./check2.svg"
        }
        const handleKeyPress = (e, item) => {
            if (e.key === 'Enter') {
                handleSetState(item, e.target.value)
            }
        }
        return (
            <li className={className}>
                <div className="flex">
                    <img src={img} onClick={onClick} width="32" alt=""></img>
                    <input className={`${item.isEdit ? "border" : ""} mx-10`} type="text" onChange={onChangeValue} onKeyPress={e => handleKeyPress(e, item)} value={item.title} disabled={item.isEdit ? false : true} />
                </div>

                <div>
                    <img src={edit} onClick={update} width="32" alt=""></img>
                </div>
            </li>
        )
    }
};

TodoList.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        isComplete  : PropTypes.bool.isRequired
    }),
    onClick : PropTypes.func.isRequired
}

export default TodoList