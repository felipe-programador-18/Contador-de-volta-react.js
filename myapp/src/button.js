import React from "react";

// here i show my props abuot button!!!
const Button = (props) => <button {...props}> {props.text}</button>
// when i use in the ...props i can adding class name css to modify!!
export default Button 