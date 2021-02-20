// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import FooterComponet from './Components/FooterComponet';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';


function App() {
  return (
       <div>
          <Router>
              <div>
                <HeaderComponent/>
                    <div className="container">
                      <Switch>
                        <Route path ="/" exact component={ListEmployeeComponent}></Route>
                        {/* <Route path ="/update-employee/:id" exact component={UpdateEmployeeComponent}></Route> */}
                        <Route path ="/employees" exact component={ListEmployeeComponent}></Route>
                        <Route path ="/add-employee/:id"  exact component={CreateEmployeeComponent}></Route>
                      </Switch>
                    </div>
                <FooterComponet/>
              </div>
            </Router>
       </div>
  );
}

export default App;
