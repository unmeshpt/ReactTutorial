import React from 'react'
import Axios from 'axios'


class Databasedemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Username: "Test",
            Password: "Test"
        }
    }

    // componentDidMount() {
    //     Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    //         // handle success
    //         this.setState({ posts: response.data })
    //     })
    // }

    changeText = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }

    Register = (e) => {
        e.preventDefault()
        var dat = {
            Username: this.state.Username,
            Password: this.state.Password

        }
        Axios.post('http://localhost/test/api.php', dat).then((response) => {
            alert(response)
        })

    }



    render() {


        return (
            <div className="container">
                <h2>Registration</h2>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={this.changeText} placeholder="User Name" name="Username"></input>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" onChange={this.changeText} placeholder="Password" name="Password"></input>
                    </div>

                    <div className="form-group">
                        <button onClick={this.Register} className="btn btn-primary" >Submit</button>
                    </div>
                </form>
                <p>{this.state.Username}</p>
                <p>{this.state.Password}</p>
            </div>
        )
    }

}
export default Databasedemo