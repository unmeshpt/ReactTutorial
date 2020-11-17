import React from 'react'
import Axios from 'axios'

class Axiosdemotest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            // handle success
            this.setState({ posts: response.data })
        })
    }


    render() {


        return (
            <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Title</td>
                            <td>Actions</td>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.posts.map((nm, k) =>

                            <tr key={k}>
                                <td>{nm.id}</td>
                                <td>{nm.title}</td>
                                <td>
                                    <button className="btn btn-sm btn-success mr-1">View</button>
                                    <button className="btn btn-sm btn-primary mr-1">Edit</button>
                                    <button className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>


                        )}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default Axiosdemotest