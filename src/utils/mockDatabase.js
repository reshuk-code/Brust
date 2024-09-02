export const users = {
    'demo@gmail.com': 'demo123',
  };
  
  export const checkUserExists = (email) => {
    return users.hasOwnProperty(email);
  };
  
  export const validateLogin = (email, password) => {
    return users[email] === password;
  };
  
  export const addUser = (email, password) => {
    users[email] = password;
  };
  