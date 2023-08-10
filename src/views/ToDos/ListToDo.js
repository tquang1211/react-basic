import React from "react";
import './ListToDo.scss';
import AddToDo from './AddToDo.js';
import { toast } from 'react-toastify';

class ListToDo extends React.Component {
    state = {
        listTodos: [
            { 'id': 'todo1', title: 'Doing homework' },
            { 'id': 'todo2', title: 'Making video' },
            { 'id': 'todo3', title: 'Fixing bugs' }
        ]
    }

    addNewTodo = (todo) => {
        // let currentListToDo = this.state.listTodos;
        // currentListToDo.push(todo);
        this.setState({
            //listTodos: currentListToDo
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!")
    }

    render() {
        let { listTodos } = this.state;
        //let listTodos = this.state.listTodos;

        return (
            <div className="list-todo-container">
                <AddToDo
                    addNewTodo={this.addNewTodo}
                />

                <div className="list-todo-content">
                    {
                        listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span> {index + 1} - {item.title} </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListToDo;