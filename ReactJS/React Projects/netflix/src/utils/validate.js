export const checkValidData = (email, password,name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  // if(name.length < 6){
  //   return "username is to short"
  // }

 
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(
    password
  );

  if (!isEmailValid) {
    return "Email ID is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

//   both email and password is valid so we will return "null"
  return null;
};
