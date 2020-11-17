import React from 'react'

class Listview extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: ["apple", "orenge", "Grape", "Pine Apple"],
            users: [
                { name: "Ajith", age: "35" },
                { name: "juhi", age: "36" },
                { name: "mahi", age: "39" }
            ],
        }
    }

    render() {

        return (
            <div>
                <ul>
                    {this.state.items.map((itm, k) => <li key={k}>{itm}</li>)}
                </ul>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                        </tr>

                    </thead>
                    {this.state.users.map((nm, k) =>
                        <tbody>
                            <tr key={k}>
                                <td>{nm.name}</td>
                                <td>{nm.age}</td>
                            </tr>
                        </tbody>

                    )}
                </table>
            </div>
        )
    }

}
export default Listview