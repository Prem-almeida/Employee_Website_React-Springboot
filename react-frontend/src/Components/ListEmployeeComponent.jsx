import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){

        super(props)
        this.state={
                    employee:[]
        }
        this.addEmployee = this.addEmployee.bind(this)
        this.editEmp = this.editEmp.bind(this)
        this.deleteEmp = this.deleteEmp.bind(this)
    }

    addEmployee(){
        this.props.history.push('/add-employee/-1');
    }

    editEmp(id){
        console.log("lets Update "+id);
        this.props.history.push(`/add-employee/${id}`);
    }

    deleteEmp(id){
        EmployeeService.DeleteEmployee(id).then(res=>{
            this.setState({employee: this.state.employee.filter(employee => employee.id !==id)});
        });
        this.props.history.push('/')

    }


    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employee:res.data});  
            });
        }
    

    render() {
        return (

            <div>
               
                <div className="row add-emp-div">
                <h2 className="text-center emp-list ">Employees List</h2>
                    <button className="btn add_emp" onClick={this.addEmployee}> Add Employee</button>
                </div>
                <div class="row">
                    
                    <div class="col-sm-12 width100">
                        <div className="row table-responsive">
                            <table className="table-hover table table-sm table-hover table-bordered emp-list-table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Employee First Name</th>
                                        <th>Employee Last Name</th>
                                        <th>Employee Email ID</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {
                                this.state.employee.map(
                                employee =>
                                <tr key={employee.id} scope="row">
                                    <td>{employee.firstname}</td>
                                    <td>{employee.lastname}</td>
                                    <td className="email_idd">{employee.emailID}</td>
                                    <td>
                                        <div class="x">
                                            <button className="button1 btn " onClick={ ()=>
                                                this.editEmp(employee.id)}> Update</button>
                                        </div>
                                        <div class="x">
                                            <button className="button2 btn " onClick={ ()=>
                                                this.deleteEmp(employee.id)}> Delete</button>
                                        </div>

                                    </td>
                                </tr>

                                )

                                }
                            </table>

                        </div>

                    </div>

                </div>
            </div>


            // <div>
            //     <h2 className="text-center h2">Employees List</h2>
            //     <div className="row">
            //         <button className="btn btn-dark add_emp" onClick={this.addEmployee}> Add Employee</button>
            //     </div>
            //     <div className="row table-responsive">

            //         <table className="table table-sm table-hover table-bordered ">
            //             <thead className="thead-light">
            //                 <tr>
            //                     <th>Employee First Name</th> 
            //                     <th>Employee Last Name</th>    
            //                     <th>Employee Email ID</th>   
            //                     <th>Action</th>    
            //                 </tr>
            //             </thead>
            //         {
            //             this.state.employee.map(
            //                     employee => 
            //                     <tr key={employee.id} scope="row">
            //                         <td>{employee.firstname}</td>
            //                         <td>{employee.lastname}</td>
            //                         <td>{employee.emailID}</td>
            //                         <td>
            //                             <div class="x"> 
            //                             <button  className="button1 btn btn-info" onClick= { () => this.editEmp(employee.id)}> Update</button>
            //                             </div>
            //                             <div class="x">
            //                             <button  className="button2 btn btn-danger" onClick= { () => this.deleteEmp(employee.id)}> Delete</button>
            //                             </div>
                                        
            //                         </td>
            //                     </tr>

            //             )

            //         }
            //         </table>    
             
            //     </div>


            // </div>
        );
    }
}

export default ListEmployeeComponent;