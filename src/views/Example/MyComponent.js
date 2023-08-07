import React from 'react';
import ChildComponent from './ChildComponent';

/*class MyComponent extends React.Component {
    /*
    JSX => return block (chỉ trả về 1 khối, vd: ko đc trả về 2 div)
    Nếu mà muốn trả về 2 div, ... thì dùng <React.Fragment></React.Fragment> hoặc <></>
    * /

    //object => key : value
    //this sẽ gọi tới class MyComponent để lấy state name hoặc channel
    state = {
        name: '',
        channel: 'Demo React Channel',
    }

    handleOnChangeName = (event) => {
        //console.log(event.target.value, 'event target: ', event.target, 'event object: ', event)
        //this.state.name = event.target.value; //bad code, ko đc sử dụng nv
        this.setState({
            name: event.target.value
        });
    }

    handleClickButton = () => {
        //console.log('Hit the button')
        alert('Click me')
    }

    //re-render khi set lại state
    render() {
        console.log('>> Call render: ', this.state)
        //return <h1>Hello, {this.props.name}</h1>;
        return (
            <>
                <div className='changeName'>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                </div>
                <div className='first'>
                    Hello my component, my name is {this.state.name}.
                </div>
                <div className='second'>
                    My youtube channel: {this.state['channel']}.
                </div>
                <div className='thỉrd'>
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}*/
class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'avcJob1', title: 'Developers', salary: '500 $' },
            { id: 'avcJob2', title: 'Testers', salary: '400 $' },
            { id: 'avcJob3', title: 'Project managers', salary: '1000 $' }
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault(); //ko tải lại website, ở đây thì nó ngăn chặn default của submit (là resfresh lại trang)
        console.log('>>> check data input: ', this.state);
        //console.log('first name:', this.state.firstName, ', last name:', this.state.lastName);
    }

    render() {
        console.log('>>> Call render: ', this.state)
        //trong react thì dùng htmlFor thay vì for (vd: ở trong thẻ label)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)} />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)} />
                    <br />
                    <br />
                    <input
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={'27'}
                    address={'Thành phố Hồ Chí Minh'}
                    avc={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;