import React from 'react'

class Table extends React.Component {
    render(){
        const {charactersData} = this.props
        return(
            <table>
                <TableHeader />
                <TableBody charactersData={charactersData}/>
            </table>
        )
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const row = props.charactersData.map((row,index) =>{
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })

    return <tbody>{row}</tbody>
}

export default Table