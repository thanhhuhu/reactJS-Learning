import React from 'react'

class ListToDo extends React.Component {
    state ={
        listToDos:[
            {id: 'todo1',title:'Doing homework'},
            {id: 'todo2',title:'Making video'},
            {id: 'todo3',title:'Fixing bugs'}
        ]
    }
    render(){
        let {listToDos} = this.state
        // let listToDos = this.state.listToDos

        return  (
            <div className="list-toDo-container">
                <div className="app-toDo">
                    <input type="text"/>
                    <br/>
                    <button type="button">Add</button>
                    <br/>
                    <br/>
                    <div className="list-toDo-content">
                        <div className="todo-child">
                            <span>Todo1</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        <div className="todo-child">
                            <span>Todo1</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        <div className="todo-child">
                            <span>Todo1</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListToDo
