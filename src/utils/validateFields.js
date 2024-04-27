export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return re.test(password);
}

export const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
}

export const validateName = (name) => {
    const re = /^[a-zA-Z\s]*$/;
    return re.test(name);
}