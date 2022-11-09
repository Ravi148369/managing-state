import React from 'react'
import { useState } from 'react'
import StudentForm from './StudentForm'
import StudentList from './StudentList'

const StudentData = () => {
    const [isUpdate, setIsUpdate] = useState(false)
    const [studentId, setStudentId] = useState('')
    const [studentData, setStudentData] = useState([
        {
            id:1,
            name: "Ravi",
            email:"rp78972@gmail.com",
            subject:"Javascript",
            isQualified: "Yes"
        },{
            id:2,
            name: "Ravi Pal",
            email:"rp78972@gmail.com",
            subject:"React",
            isQualified: "Yes"
        },{
            id:3,
            name: "Ravi Ranjan",
            email:"rp78972@gmail.com",
            subject:"Vue",
            isQualified: "Yes"
        }
    ])
    const handleUpdate = (id) => {
        setStudentId(id)
        setIsUpdate(true)
    }
    return (
        <>
            <StudentForm 
                studentData = {studentData}
                setStudentData = {setStudentData}
                isUpdate = {isUpdate}
                studentId = {studentId}
                setStudentId = {setStudentId}
                setIsUpdate = {setIsUpdate}
            />
            <StudentList 
                studentData = {studentData}
                setStudentData = {setStudentData}
                handleUpdate = {handleUpdate}
            />
        </>
    )
}

export default StudentData