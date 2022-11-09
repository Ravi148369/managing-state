import React from 'react'

const StudentDataHeading = ({studentData}) => {
    const tableHeading = []
    for(let key in studentData) {
        if(studentData.hasOwnProperty(key)){
            tableHeading.push(key)
        }
    }
  return (
    <>
        {
            tableHeading.map(heading =>
                <th key={heading}>{heading}</th>
            )
        }
        <th>
            Actions
        </th>
    </>
  )
}

export default StudentDataHeading