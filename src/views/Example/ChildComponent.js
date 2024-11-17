import React from 'react';

/*
class ChildComponent extends React.Component {
    /!*
    Variable trong JSX

     *!/
    //key : value
    /!*   state ={
           name:'',
           channel:'Thanh dep trai',
   // khi nào giá trị thay đổi thì JSX sẽ thay đổi , render lại
       }*!/
  /!*  state ={
        firstName: '',
        lastName: '',
    }*!/
    /!* handleOnChangeName =(event) => {
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

     }*!/
   /!* handChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handlSubmit = (event) =>{
        event.preventDefault()
        console.log('>>check data input: ', this.state)
    }*!/

//re - render
    render() {
        console.log('check props: ', this.props)
        //khai báo để làm ngắn , có thể truyền thẳng vào là this.props....
        // let name = this.props.name
        // let age = this.props.age
        // cú pháp gõ ngắn cho js, đơn giản hóa
        // this.props là một object
        // chỉ làm được khi và chỉ khi đó là key
        let { name, age, address, arrJobs} = this.props;
        return (
            <>
                {/!*<div>Child component: {name} - {age} - {address} </div>*!/}
                <div className='job-list'>
                    {
                        // render từng dữ liệu trong array (không dùng for)
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>

            </>

        )
    }
}
*/
// using arrow function
// same like using class components


class ChildComponent extends React.Component {
    state ={
        showJobs: false
        // if showJobs = false will not show the job > 500, can be change in component f12
    }
    //arrow function if click show button will show contents and hide button
    handleShowHide = () =>{
        this.setState({
            showJobs: !this.state.showJobs // phu dinh lai neu show la true thi hide la false
        })
    }
    render (){
        let {arrJobs} = this.props
        let {showJobs} = this.state
        // this way to write quickly if conditional 
        // let check = showJobs === true ? 'showJobs' : 'showJobs = false'
        // console.log('check conditional:', check )

        return (
            <>
                {showJobs === false &&
                    <div>
                        <button onClick={()=> this.handleShowHide()}>Show</button>
                    </div>
                }
                {showJobs === true &&
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    if (+item.salary >= 500) {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary} $
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div>
                            <button  onClick={()=> this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }

}
            export default ChildComponent;
