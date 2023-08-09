import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault(); //ko tải lại website, ở đây thì nó ngăn chặn default của submit (là resfresh lại trang)
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }
        console.log('>>> check data input: ', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        });
        //console.log('first name:', this.state.firstName, ', last name:', this.state.lastName);
        this.setState({
            title: '',
            salary: ''
        });
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitle(event)} />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} />
                <br />
                <br />
                <input
                    type="submit"
                    onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}

export default AddComponent;