const ValidateForm = (formData) =>{
    let isValidate = true
    const formError = {
        name: '',
        email:'',
        subject:''
    }
    if(formData.name.trim() === ''){
        isValidate = false
        formError.name = "Name is required"
    }
    if(formData.email.trim() === ''){
        isValidate = false
        formError.email = "Email is required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
        isValidate = false
        formError.email = "Please enter a valid email"
    }
    if(formData.subject.trim() === ''){
        isValidate = false
        formError.subject = "Subject is required"
    }
    return [formError, isValidate]
}
export default ValidateForm