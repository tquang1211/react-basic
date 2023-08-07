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
        console.log('>>> Check props: ', this.props)
        //let name = this.props.name;
        //let age = this.props.age;

        //props như state là object, đặt tên biến giống tên key như name, age
        let { name, age, address, avc } = this.props; //đơn giản hóa cấu trúc của javascript, dùng cho trường hợp nhiều data

        //dùng map chứ ko dùng for while
        return (
            <>
                <div>Child component name: {name} - {this.props.age} - {address}</div>

                <div className='job-lists'>
                    {
                        avc.map((item, index) => {
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

export default ChildComponent;