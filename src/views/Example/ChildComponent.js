import React from 'react';

// class ChildComponent extends React.Component {
//     render() {
//         console.log('>>> Check props: ', this.props)
//         //let name = this.props.name;
//         //let age = this.props.age;

//         //props như state là object, đặt tên biến giống tên key như name, age
//         let { name, age, address, avc } = this.props; //đơn giản hóa cấu trúc của javascript, dùng cho trường hợp nhiều data

//         //dùng map chứ ko dùng for while
//         return (
//             <>
//                 <div>Child component name: {name} - {this.props.age} - {address}</div>

//                 <div className='job-lists'>
//                     {
//                         avc.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }

//nếu dùng class components như trên thì phải dùng this.
//còn dùng arrow funtion thì ko cần dùng this
//dùng class component nếu có phát triển hoặc phát sinh thêm, muốn định nghĩa thêm state thì ko cần sửa thằng component cha
//dùng function với hook mới hữu ích
//=> nếu dùng class thì dùng class hết, function thì function hết
// const ChildComponent = (props) => {
//     console.log('>>> Check child props: ', props)

//     let { avc } = props; //đơn giản hóa cấu trúc của javascript, dùng cho trường hợp nhiều data
//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     avc.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { avc } = this.props;
        let { showJobs } = this.state;
        //let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        //console.log('>>> Check conditional: ', check);
        return (
            <>
                {
                    showJobs === false ?
                        <div>
                            <button onClick={() => this.handleShowHide()}>Show</button>
                        </div>

                        :

                        <>
                            <div className='job-lists'>
                                {
                                    avc.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary} $
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button onClick={() => this.handleShowHide()}>Hide</button>
                            </div>
                        </>
                }
            </>
        )
    }
}

export default ChildComponent;