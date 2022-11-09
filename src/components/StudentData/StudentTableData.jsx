import React from 'react'

const StudentTableData = ({ studentData, handleRemove, handleUpdate, index }) => {
    const studentDataList = []
    for(let key in studentData) {
        if(key === 'id'){
            studentDataList.push(index)
        }
        else{
            studentDataList.push(studentData[key])
        }  
    }
    return (
        <tr>
            {
                studentDataList.map(data=>
                    <td key={data}>{ data }</td>
                )
            }
            <td>
                <button onClick={()=>handleRemove(studentData.id)}>Remove</button>
                <button onClick={()=>handleUpdate(studentData.id)}>Update</button>
            </td>
        </tr>
    )
}

export default StudentTableData