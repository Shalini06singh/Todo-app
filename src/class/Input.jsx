import React, { Component } from 'react'

export default class Input extends Component {
    constructor(){
        super()
        this.state = {
            todo: ''
        }
    }
    changeInput = (event) =>{

        if(event.target.value.length === 0){
            this.setState({
                error: true
            })

        }else{
            this.setState({
                error: false
            })
        }
        this.setState ({
            todo: event.target.value
        })
    }
    submit=(event)=>{
        //to prevent reloading of page
        event.preventDefault()
if(this.state.todo.length > 0){
if(this.props.editData.index !== ''){
    this.props.updateTodo(this.props.editData.index,this.state.todo)
}else{
    this.props.addTodo(this.state.todo);

}
}else{
    this.setState({
        error: true
    })
}

        this.setState(
            {
                todo: ' ',
                error: false
            }
        )
    }

    componentDidUpdate(prevProps,prevState){
       if(prevProps.editData.data !==this.props.editData.data){
        this.setState({todo: this.props.editData.data});
       }
    }
    render() {
        return (
            <form className="row g-3" onSubmit={this.submit}>

                <div className="col-10">

                    <input type="text" class="form-control" placeholder="ADD Todo" 
                    value={this.state.todo}
                    onChange={this.changeInput}/>
                    {
                        this.state.error &&   <p className='text-danger'>Please enter todo</p>
                    }
                  
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-primary mb-3">
                        {

                        this.props.editData.index === "" ? "ADD" : "UPDATE"
                        }
                        </button>
                </div>
            </form>
        )
    }
}
