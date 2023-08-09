import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        });
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault(); //ko tải lại website, ở đây thì nó ngăn chặn default của submit (là resfresh lại trang)
        console.log('>>> check data input: ', this.state);
        //console.log('first name:', this.state.firstName, ', last name:', this.state.lastName);
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.titleJob}
                    onChange={(event) => this.handleChangeTitleJob(event)} />
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