function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;

  const loginAttempt = (passwordAttempt) => {
    if (attemptCount >= maxAttempts) {
      return "Account locked due to too many failed login attempts"
    }
  
    attemptCount ++;

    if(passwordAttempt === userInfo.password) {
      return("Login successful");
      } else {
        return `Attempt ${attemptCount}: Login failed`;
      }
    };

    return loginAttempt;
};

const userInfo = {
  username: "user1",
  password: "password123"
};

const login = createLoginTracker(userInfo);

console.log(login("wrong"));
console.log(login("wrongagain"));
console.log(login("password123"));

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};