

export const Validate= (email, password)=>{

    const isEmailValid= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isEmailValid)
        {
            return "Enter a valid Email";
        }
    if(!isPasswordValid)
        {
            return "Enter correct Password";
        }

        return null;
}