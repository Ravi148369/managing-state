import React from 'react'
import { useState } from 'react'
import StudentTableData from './StudentTableData'
import StudentDataHeading from './StudentTableHeading'

const StudentList = ( {studentData, setStudentData, handleUpdate} ) => {
    const [searchValue, setSearchValue] = useState('')
    if(!(Array.isArray(studentData) && studentData[0] instanceof Object)) {
        return <h3>No Record Found</h3>
    }
    const handleRemove = (id) => {
        setStudentData(studentData.filter(data=>data.id!==id))   
    }
  return (
    <div className='student-data'>
        <h2>Student Data</h2>
        <input type="text" className='input-text search-input' placeholder='search by name' value={searchValue} onChange = {(e)=>setSearchValue(e.target.value)}/>
        <table>
            <thead>
                <tr>
                    <StudentDataHeading studentData = {studentData[0]}/>
                </tr>
            </thead>
            <tbody>
                {
                    studentData.filter(data=>data.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((data, index) =>
                        <StudentTableData 
                            key={data.id} 
                            index = {index + 1}
                            studentData = {data}
                            handleRemove = {handleRemove}
                            handleUpdate = {handleUpdate}
                        />   
                    )
                }
            </tbody>
        </table>
        {
        }
    </div>
  )
}

export default StudentList