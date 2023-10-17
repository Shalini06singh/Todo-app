import { useState } from "react";
import Input from "./Input";
import List from "./List";


function App() {
 


  let [todos, setTodos] = useState(['Pizza', 'Burger', 'Momos', 'Noodles']);
  const addTodo = (data) =>{
  //   console.log(data);
  //  let prevState= todos;
  //  prevState.push(data)
  //  console.log(prevState);
   setTodos([...todos,data])
  }

  let[editData,setEditData] = useState({
    index: '',
    data: ''
  })
  const deleteTodo = (data) =>{
    // todos.splice(index,1)
    // setTodos([...todos]); using index
    //using filter
    let filterData = todos.filter((value,index,arr)=> value !== data)
    // console.log(filterData);
    setTodos([...filterData])

  }

  const editTodo = (index,data) =>{
    console.log(index,data);
     setEditData({
      index,
      data
    })
  }
  const updateTodo = (index,data) =>{
    // console.log(index,data);
    //splice overrides data at index 1
    // todos.splice(index,1,data);
    // setTodos([...todos])
    //by map
   let newTodosArray =  todos.map((value,ind,arr) =>{
      if(ind === index){
        return data;
      }
      return value;
    })
setTodos([...newTodosArray])
    setEditData({
      index: "",
      data: ''
    })
  }
  return (
    <div className="container">
      <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo}/>
      <List todos={todos}  deleteTodo={deleteTodo} editTodo={editTodo} />

    </div>
  );
}

export default App;
