const signInValidations = (fields) => {
    if (!fields.email) {
        return 'E-mail field must not be empty. Please enter a valid e-mail';
    } else if (!fields.password) {
        return 'Password must not be empty';
    }
};

const signInErrors = (err) => {
    if (err.code.includes('user-not-found')) {
        return 'User not found. Please register if you do not yet have an account';

    } else if (err.code.includes('wrong-password')) {
        return 'Wrong password. Please check your email and password and try again';
    }
};

const signUpValidations = (fields) => {
    const {email, password} = fields;

    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/;

    if (!email) {
        return 'E-mail field must not be empty. Please enter a valid e-mail';
    } else if (!password) {
        return 'Password must not be empty';
    } else if (password.length < 6) {
        return 'Password must be 6 or more characters';
    } else if (!emailPattern.test(email)) {
        return 'Email is invalid. Please enter a valid email';
    } else if (!passwordPattern.test(password)) {
        // These are only for validating password
        const checkLowercase = /[a-z]/;
        const checkUppercase = /[A-Z]/;
        const checkNumber = /[0-9]/;
        const checkSpecialChar = /[!@#$%^&*]/;

        const passwordErrors = [];

        if (!checkLowercase.test(password)) {
            passwordErrors.push('Your password must contain at least one lowercase character');
        }
        if (!checkUppercase.test(password)) {
            passwordErrors.push('Your password must contain at least one uppercase character');
        }
        if (!checkNumber.test(password)) {
            passwordErrors.push('Your password must contain at least one number');
        }
        if (!checkSpecialChar.test(password)) {
            passwordErrors.push('Your password must contain at least one special character');
        }
        
        return passwordErrors;
    }
};

const signUpErrors = (err) => {
    if (err.code.includes('auth/email-already-in-use')) {
        return 'User e-mail already exists. Please register with a new e-mail.\n Or sign in with existing user instead'
    } else if (err.code.includes('auth/weak-password')) {
        return 'Password is too short. It should be at least 6 characters'
    }
}


export { signInValidations, signInErrors, signUpValidations, signUpErrors };

/*  
Email Validation explanation:

/  denotes beginning of regExp
^  marks the beginning of a string
[a-zA-Z0-9]+  match any occurence of upper/lowercase letters and digits 0-9
@  match the @ symbol
[a-zA-Z0-9]+  match again after @ symbol and before dot
\.  match a dot (escape with \)
[A-Za-z]+  match for top-level domain (TLD)
$  marks the end of string
/  denotes end of regExp

example:
/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
'firstRegExp@emailDomain.com'
*/


/*  
Password Validation explanation:
The regular expression /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/ is a pattern used for password validation. 
Let's break down its components:

^: Asserts the start of the string.
(?=.*[a-z]): Positive lookahead assertion. Checks if the string contains at least one lowercase letter (a-z).
(?=.*[A-Z]): Positive lookahead assertion. Checks if the string contains at least one uppercase letter (A-Z).
(?=.*[0-9]): Positive lookahead assertion. Checks if the string contains at least one digit (0-9).
(?=.*[!@#$%^&*]): Positive lookahead assertion. Checks if the string contains at least one special character from the given set (!@#$%^&*).
(?=.{8,}): Positive lookahead assertion. Checks if the string has a minimum length of 8 characters.
/: End of the regular expression.

In summary, this regular expression ensures that a password meets the following criteria:

Contains at least one lowercase letter.
Contains at least one uppercase letter.
Contains at least one digit.
Contains at least one special character from the set !@#$%^&*.
Has a minimum length of 8 characters.

*/
