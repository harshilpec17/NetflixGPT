export const validateData = (email, password, name) => {
  const isEmailValidate =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValidate = /^[A-Za-z\s'-]{3,30}$/.test(name);

  if (!isNameValidate) return "Please provide a Full Name";
  if (!isEmailValidate) return "Email Id is not valid 🚫";
  if (!isPasswordValidate) return "Password is not valid 🛑";

  return null;
};
