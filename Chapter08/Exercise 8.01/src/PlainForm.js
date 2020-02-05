import React from 'react';

class PlainForm extends React.Component {
    render() {
        return (
          <form  noValidate={true} action="/login.php">
              <label>
                  Email:
                  <input type="text" />
              </label>
              <label>
                  Password:
                  <input type="password" />
              </label>
              <input type="submit" value="Login"/>
          </form>
        );
    }
}

export { PlainForm }
