
import './App.css';
import Home from './components/Home';
import { Route, Switch } from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import UserSignup from './components/UserSignup';

function App() {
    return (
     <div className="App">
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/userSignup" component={UserSignup} />
          <Route exact path="/dashboard/:names" component={DashBoard} />
       </Switch>
     </div>

    );
}







// constructor() {
//   super()
//   this.state = {
//     apiData: [],
//     name: "Jelili",
//     hobbie: "Singing",
//     age: 20
//   }
// }

// componentDidMount = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     this.setState({
//       apiData: data,
//     })
//   })
//   .catch((error) => console.log(error))
// }

// getData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
// }

// <div className="App">
// {/* Hello */}
// {/* <button onClick={this.getData}>Get Data</button> */}
// <table>
//   <thead>
//     <tr>
//     <td>Id</td>
//     <td>Names</td>
//     <td>Email</td>
//     <td>Phone Number</td>
//     </tr>
//   </thead>
//   <tbody>

//     {
//       this.state.apiData.map((data, index) => {
//       return <tr key={index}> 
//         <td>{data.id}</td>
//         <td>{data.name}</td>
//         <td>{data.email}</td>
//         <td>{data.phone}</td>
//       </tr>
//       })
//     }
   
//   </tbody>
// </table>

// <Demo name={this.state.name} hobby={this.state.hobbie} age={this.state.age}/>
// </div>

export default App;
