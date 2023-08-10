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
        ],
        editTodo: {}
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

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete succeed!");
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //Save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: ''
            })
            toast.success("Update todo succeed!");
            return;
        }
        //Edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        //let listTodos = this.state.listTodos;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //console.log('>>> Check empty object: ', isEmptyObj)

        return (
            <>
                <p>
                    {/* Dấu & trong html thì dùng &amp; mới đúng */}
                    Simple to do apps with React.js (Demo)
                </p>
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
                                        {
                                            isEmptyObj === true ?
                                                <span> {index + 1} - {item.title} </span>
                                                :
                                                <>
                                                    {
                                                        editTodo.id === item.id ?
                                                            <span>
                                                                {index + 1} - <input value={editTodo.title}
                                                                    onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                            </span>
                                                            :
                                                            <span> {index + 1} - {item.title} </span>
                                                    }
                                                </>
                                        }
                                        {/* {
                                        isEmptyObj === false && editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - <input value={editTodo.title}
                                                    onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                            </span>
                                            :
                                            <span> {index + 1} - {item.title} </span>
                                    } */}
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}>
                                            {
                                                isEmptyObj === false && editTodo.id === item.id ?
                                                    'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}>
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListToDo;