import React from 'react';
import ChildComponent  from "./ChildComponent";
import  AddComponents from "./AddComponents";
class MyComponent extends React.Component {
    /*
    Variable trong JSX

     */
    //key : value
 /*   state ={
        name:'',
        channel:'Thanh dep trai',
// khi nào giá trị thay đổi thì JSX sẽ thay đổi , render lại
    }*/
    state ={
        firstName: '',
        lastName: '',
        arrJobs:[{id:'abc1', title:'dev', salary:'500 '},
                {id:'abc2', title:'tester', salary:'400 '},
                {id:'abc3', title:'engineer', salary:'600 '}]
    }
    addNewJobs = (job) => {
        this.setState ({
            // push them job tu input vao
            arrJobs: [...this.state.arrJobs,job]
        })
        console.log('check job from parent',job)
    }
   /* handleOnChangeName =(event) => {
        // this.state.nam = event.target.value; //bad code // khong nen dung
        //merge
        console.log(event.target.value,'event.target: ',event.target,'event.object:',event);
        this.setState({
            name:event.target.value,
            channel: 'Thanh'
        })
    }
    handleClickButton = () => {
        console.log('hit the button');
        alert('Click me')

    }*/
  /* handChangeFirstName = (event) => {
       this.setState({
           firstName: event.target.value
       })
   }
   handChangeLastName = (event) => {
       this.setState({
           lastName: event.target.value
       })
   }*/
   /*handlSubmit = (event) =>{
       event.preventDefault()
       console.log('>>check data input: ', this.state)
   }*/
   
//re - render
    render() {
        console.log( '>>> call render: ' ,this.state)
        // let  name ='';
        return (
            /* bọc bên ngoài để code bên trong hợp lệ */
            <>
            {/*<div className="abc">*/}
            {/*<div className="first">*/}
                <AddComponents
                    addNewJobs ={this.addNewJobs}
                />

                {/*<form action="">
                    <label>First name</label>
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event)=> this.handChangeFirstName(event)}
                    />
                    <br/>
                    <label>Last name</label>
                    <input
                        type="text"
                           value={this.state.lastName}
                            onChange={(event)=> this.handChangeLastName(event)}
                    />
                    <br/> <br/>
                    <button type="submit" value="Submit"
                            onClick={(event => this.handlSubmit (event))}>Submit</button>
                </form>*/}
                {/*<input value={this.state.name} type="text"
                    onChange={(event) => this.handleOnChangeName(event)}
                />
                Hello my component, My name is {this.state.name}*/}
            {/*</div>*/}
               {/* <div className="second">
                    My youtube channel is {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={this.handleClickButton}>Click me</button>
                </div>*/}
             {/*</div>*/}

                <ChildComponent
                    name={this.state.firstName}
                    age={'20'}
                    address={'Da Nang'}
                    arrJobs={this.state.arrJobs}// truyền từ childComponent vào
                />
                {/*props:properties*/}
                {/*<ChildComponent name ={'child two'}/>*/}
                {/*<ChildComponent name ={'child three'}/>*/}
            </>

        )
    }
}

export default MyComponent;
