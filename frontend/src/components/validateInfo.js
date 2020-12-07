export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username required"
    }

    if(!values.name.trim()) {
        errors.name = "Name required"
    }

    if(!values.email) {
        errors.email = "Email required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    
    if(!values.password1) {
        errors.password1 = 'Password required';
    } else if (values.password1.length < 6) {
        errors.password1 = 'Password needs to be at least 6 characters';
    }

    if(values.password2 !== values.password1) {
        errors.password2 = 'Passwords do not match';
    }

    return errors;
}