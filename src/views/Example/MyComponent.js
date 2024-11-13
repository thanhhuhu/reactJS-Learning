import React from 'react';

class MyComponent extends React.Component {
    /*
    Variable trong JSX
    JSX
     */
    //key : value
    state ={
        name:'',
        channel:'Thanh dep trai',
// khi nào giá trị thay đổi thì JSX sẽ thay đổi , render lại
    }
    handleOnChangeName =(event) => {
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
}
//re - render
    render() {
        console.log( '>>> call render: ' ,this.state)
        let  name ='Ronaldo';
        return (
            /* bọc bên ngoài để code bên trong hợp lệ */
            <>
            <div className="abc">
            <div className="first">
                <input value={this.state.name} type="text"
                    onChange={(event) => this.handleOnChangeName(event)}
                />
                Hello my component, My name is {this.state.name}
            </div>
                <div className="second">
                    My youtube channel is {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={this.handleClickButton}>Click me</button>
                </div>
             </div>
            </>

        )
    }
}

export default MyComponent;
