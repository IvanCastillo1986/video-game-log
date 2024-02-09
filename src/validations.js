const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/;
const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;



const userFormValidations = (err, fields) => {
    if (!fields.email) {
        return 'E-mail field must not be empty. Please enter a valid e-mail';
    } else if (!fields.password) {
        return 'Password must not be empty';
    } else if (fields.password.length < 6) {
        return 'Password must be 6 or more characters';
    } else if (emailPattern.test(fields.email)) {
        return 'Email is invalid. Please enter a valid email'
    } else if (passwordPattern.test(fields.password)) {
        return 'Password is invalid. Please enter a valid password'
    } else if (err.code.includes('user-not-found')) {
        return 'User not found. Please register if you do not yet have an account'
    } else if (err.code.includes('wrong-password')) {
        return 'Wrong password. Please check your email and password and try again'
    }
};


export { userFormValidations };

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

/  denotes beginning of regExp
^  marks the beginning of a string
(?=.*[a-z]): Positive lookahead assertion
(?=.*[A-Z]): Positive lookahead assertion
(?=.*[0-9]): Positive lookahead assertion
(?=.*[!@#$%^&*]): Positive lookahead assertion. Checks if the string contains at least one character from the set (!@#$%^&*)
[a-zA-Z0-9]+  match again after @ symbol and before dot
\.  match a dot (escape with \)
[A-Za-z]+  match for top-level domain (TLD)
$  marks the end of string
/  denotes end of regExp

example:
/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/

*/