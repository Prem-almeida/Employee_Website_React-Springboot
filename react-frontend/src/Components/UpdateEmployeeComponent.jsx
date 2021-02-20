// import React, { Component } from 'react';
// import EmployeeService from '../Services/EmployeeService';

// class UpdateEmployeeComponent extends Component {
//     constructor(props){
//         super(props)
        
//         this.state = {
//             id: this.props.match.params.id, //research on this 
//             firstName:'',
//             lastName:'',
//             emailID:''

//         }
        
//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//         this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
//         this.UpdateEmployee = this.UpdateEmployee.bind(this);
//         // this.cancel = this.cancel.bind(this);

//     }

//     componentDidMount()
//     {
//         EmployeeService.getEmployeeByID(this.state.id).then((res) => {
//             let employee = res.data;
//             this.setState({
//                 firstname: employee.firstname, 
//                 lastname: employee.lastname, 
//                 emailID: employee.emailID
//             });
//         });
//     }

//     UpdateEmployee = (e) =>{
//         e.preventDefault();
//         let employee ={firstname:this.state.firstname, lastname: this.state.lastname, emailID:this.state.emailID}
//         console.log('Updated employe =>' +JSON.stringify(employee));

//         EmployeeService.updateEmployee(employee, this.state.id).then(res =>{
//             this.props.history.push("/employees");
//         });

//     }
//     cancel(){
//         console.log("pushing");
//         this.props.history.push("/employees");
//     }
//     changeFirstNameHandler = (event) => {
//         this.setState({firstname: event.target.value});
//     }
//     changeLastNameHandler = (event) => {
//         this.setState({lastname: event.target.value});
//     }
//     changeEmailIdHandler = (event) => {
//         this.setState({emailID: event.target.value});
//     }


//     render() {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="card col-md-6 offset-md-3 offset-md-3">
//                         <h2 className="text-center">Add Employee</h2>
//                         <div className="card-body">
//                             <form>
//                                 <div className="form-group">

//                                 <label>First Name: </label>
//                                 <input placeholder="First Name" name='firstname' className="form-control"
//                                 value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                
//                                 <label>Last Name: </label>
//                                 <input placeholder="Last Name" name='lastname' className="form-control"
//                                 value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                
//                                 <label>Email Id:  </label>
//                                 <input placeholder="email id" name='emailID' className="form-control"
//                                 value={this.state.emailID} onChange={this.changeEmailIdHandler}/>

//                                 <button className="btn btn-success" onClick={this.UpdateEmployee}>Update</button>                                
//                                 <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>                                

//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }


// }

// export default UpdateEmployeeComponent;