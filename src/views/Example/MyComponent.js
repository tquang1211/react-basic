import React from 'react';

class MyComponent extends React.Component {
    /*
    JSX => return block (chỉ trả về 1 khối, vd: ko đc trả về 2 div)
    Nếu mà muốn trả về 2 div, ... thì dùng <React.Fragment></React.Fragment> hoặc <></>
    */
    //object => key : value
    //this sẽ gọi tới class MyComponent để lấy state name hoặc channel
    state = {
        name: 'Messi',
        channel: 'Demo React Channel',

    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
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
            </>
        )
    }
}

export default MyComponent;