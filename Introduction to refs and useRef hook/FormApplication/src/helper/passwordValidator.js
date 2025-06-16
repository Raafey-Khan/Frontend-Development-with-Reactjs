function validatePassword(str) {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).{8,}$/;
  return regex.test(str);
}


export default validatePassword;