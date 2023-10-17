import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: ['Pizza', 'Burger', 'Momos', 'Noodles'],
            editData: {
                index: '',
                data: ''
            }

        }
    }
    addTodo = (value) => {
        this.setState({
            todos: [...this.state.todos, value]
        })
    }

    deleteTodo = (data) => {
        let filterTodo = this.state.todos.filter((value) => value !== data)
        //    console.log(filterTodo);
        this.setState({
            todos: [...filterTodo]
        })
    }
    editTodo = (index, data) => {
        // console.log(index,data);
        this.setState({
            editData: {
                index,
                data
            }
        })
    }
    updateTodo = (index, data) => {
        let updatedTodos = this.state.todos.map((value, ind) => {
            if (ind === index) return data


            return value
        })
        this.setState({
            todos: [...updatedTodos],
            editData: {
                    index: '',
                    data: ''
            }
        })
    }
    render() {
        return (
            <div className='container mt-4'>
                <Input addTodo={this.addTodo} editData={this.state.editData} updateTodo={this.updateTodo} />
                <List todos={this.state.todos} deleteTodo={this.deleteTodo}
                    editTodo={this.editTodo} />
            </div>
        )
    }
}
