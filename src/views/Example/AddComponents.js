import React from 'react';

class AddComponents extends React.Component {
    state ={
        title:'',
        salary:''
    }
    handChangeFirstName = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handlSubmit = (event) =>{
        // dieu kien neu khong dien vao thi se bao alert
        if ( !this.state.title || !this.state.salary ){
            alert (' Missing required parameters ')
            return;
        }
        event.preventDefault()
        console.log('>>check data input: ', this.state)
        this.props.addNewJobs({
            id: Math.floor(Math.random()*1001),
            title:this.state.title,
            salary: this.state.salary
        })
        // khi them thanh cong thi o input se thanh empty
        this.setState({
            title:'',
            salary: ''
        })
    }

    render(){
        return (
            <form action="">
                <label>Job title: </label>
                <br/>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handChangeFirstName(event)}
                />
                <br/>
                <label>Salary: </label>
                <br/>
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handChangeLastName(event)}
                />
                <br/> <br/>
                <button type="submit" value="Submit"
                        onClick={(event => this.handlSubmit(event))}>Submit
                </button>
            </form>
        )
    }
}

export default AddComponents;