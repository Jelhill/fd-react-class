import logo from './logo.svg';
import react, { Component} from "react"
import './App.css';
import PropTypes from "prop-types"

class Demo extends Component {

  render() {
      console.log(this.props)
    return (
        <div>
        <h1>This is a demo</h1>
    <h2>The name of tHe class teacher is {this.props.name} and his Hobby is {this.props.hobby} and age is {this.props.age}</h2>
        </div>
        
    );
  }
}



Demo.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  
}
export default Demo;
