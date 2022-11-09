import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ValidateForm from './ValidateForm'
const StudentForm = ({ setStudentData, studentData, isUpdate, studentId, setIsUpdate, setStudentId }) => {
    const [error, setError] = useState({})
    let initialValue = {
        id:Date.now(),
        name:'',
        email:'',
        subject:'',
        isQualified:false
    }
    const [formData, setFormData] = useState(initialValue)
    useEffect(()=>{
        const studentRecord = studentData.find(data => data.id === studentId)
        if(studentRecord){
            setFormData({...studentRecord})
        }
        // eslint-disable-next-line 
    },[isUpdate])
    const handleChange = (e)=> {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const OnSubmit = () => {
        const [formError, isValidate] = ValidateForm(formData)
        setError(formError)
        if(isValidate) {
            const newData = [...studentData,formData]
            setStudentData(newData)
            alert("form submitted successfully")
            setFormData(initialValue)
        }
    }
    const OnUpdate = () => {
        const [formError, isValidate] = ValidateForm(formData)
        const index = studentData.findIndex(data=>data.id === studentId)
        setError(formError)
        if(index !== -1 && isValidate){
            studentData[index] = formData
            setStudentData(studentData)
            alert("Updated successfully")
            setIsUpdate(false)
            setFormData(initialValue)
            setStudentId(-1)
        }
    }
    return (
        <div className='form-div'>   
            <form onSubmit={(e)=>{
                    e.preventDefault()
                    if(isUpdate) {
                        OnUpdate()
                        return
                    }
                    OnSubmit()
                }}
                onReset = {
                    ()=>{
                        setIsUpdate(false)
                        setStudentId(-1)
                        setFormData(initialValue) 
                    }
                }
            >
                <h2>Student Form</h2>
                <div>
                    <label htmlFor='name'>
                        Name :
                    </label>
                    <input type="text" name= "name" id='name' 
                        placeholder='Enter name' 
                        onChange = {handleChange}
                        value={formData.name} 
                    />
                    <small style={{color:'red'}}>{error.name}</small>
                </div>
                <div>
                    <label htmlFor='email'>
                        Email : 
                    </label>
                    <input type="text" id='email' name = "email" 
                        placeholder='Enter email' 
                        value={formData.email} 
                        onChange = {handleChange} 
                    />
                    <small style={{color:'red'}}>{error.email}</small>
                </div>
                <div>
                    <label htmlFor='subject'>
                        Subject : 
                    </label>
                    <input type="text" id='subject' name='subject' 
                        placeholder='Enter subject' 
                        value={formData.subject} 
                        onChange = {handleChange} 
                    />
                    <small style={{color:'red'}}>{error.subject}</small> 
                </div>
                <div>
                    <div>
                        Qualified? {'  '}
                        <label htmlFor='qualified-yes'>
                            <input type="radio" name='isQualified' id='qualified-yes' value="Yes" onChange = {handleChange} required />
                            yes  {' '}
                        </label>
                        <label id='qualified-no'>
                            <input type="radio" name='isQualified' id='qualified-no' value = "No" onChange={handleChange} required/>
                            No  {' '}
                        </label>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <input type="submit" value={isUpdate?"update":"submit"} className='input-button' style={{backgroundColor:'green'}}/>
                    {
                        isUpdate?<input type="reset" value="Cancel" style={{backgroundColor:'red'}} className='input-button'/>
                                :''
                    }
                </div>
            </form>
        </div>
    )
}

export default StudentForm