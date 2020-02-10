const backendUsers = {
  'theo@gmail.com': {
    password: '123',
    token: '321'
  },
  'alex@gmail.com': {
    password: 'admin',
    token: '999'
  },
  'john@gmail.com': {
    password: 'lalala',
    token: '651'
  }
};

export class AuthService {
  constructor() {
    this._isAuthenticated = false;
  }
  isValidPassword(email, password) {
    if (backendUsers[email] && backendUsers[email].password === password) {
      return true
    }
    return false
  }

  isValidToken(email, token) {
    if (backendUsers[email] && backendUsers[email].token === token) {
      return true
    }
    return false
  }
  setIsAuthenticated() {
    this._isAuthenticated = true;
  }
  isAuthenticated() {
    return this._isAuthenticated;
  }
}

export default new AuthService();
