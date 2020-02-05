import '@testing-library/jest-dom/extend-expect';
import {AuthService, backendUsers} from './AuthService';


test('authenticates password', () => {
  const authService = new AuthService();
  expect(authService.isValidPassword('theo@gmail.com', backendUsers['theo@gmail.com'].password)).toBeTruthy();
});


test('authenticates token', () => {
  const authService = new AuthService();
  expect(authService.isValidToken('theo@gmail.com', backendUsers['theo@gmail.com'].token)).toBeTruthy();
});
