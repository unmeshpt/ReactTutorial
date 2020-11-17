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
            ]
        }
    }

    render() {

        return (
            <div>
                <ul>
                    {this.state.items.map((itm, k) => <li key={k}>{itm}</li>)}
                </ul>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                    {
                        this.state.users.map((nm, k) =>
                            <tr key={k}>
                                <td>{nm.name}</td>
                                <td>{nm.age}</td>
                            </tr>
                        )}
                </table>
            </div>
        )
    }

}
export default Listview