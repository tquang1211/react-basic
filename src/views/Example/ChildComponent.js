import React from 'react';

class ChildComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
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
                <div>Child component: {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent;