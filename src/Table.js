import React from 'react'

 const Table = (props) => {
    const {charactersData, removeCharacter} = props
        return(
            <table>
                <TableHeader />
                <TableBody charactersData={charactersData} removeCharacter={removeCharacter} />
            </table>
        )
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
                <td>
                    <button onClick={()=> props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{row}</tbody>
}

export default Table