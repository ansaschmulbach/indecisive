import { useState } from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({
        email: "",
        name: "",
        username: "",
        password1: "",
        password2: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        setErrors(validate(values));
        if(Object.keys(validate(values)).length !== 0){
            e.preventDefault();
        }
    };
    return { handleChange, values, handleSubmit, errors };
};

export default useForm;
