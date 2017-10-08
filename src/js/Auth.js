import auth0 from 'auth0-js';

export default class Auth {

  constructor(){
    this.login = this.login.bind(this);
  }

  auth0 = new auth0.WebAuth({
    domain: 'xmile.auth0.com',
    clientID: 'ObwdRh5iu-1g8XGzFr6n8dPdlROArsf3',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://xmile.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }


  handleAuthentication(history) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult, history);
        history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
      }
    });
  }

  setSession(authResult, history) {
  // Set the time that the access token will expire at
  let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
  // navigate to the home route
  history.replace('/');
}

logout(history) {
  // Clear access token and ID token from local storage
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
  // navigate to the home route
  history.replace('/');
}

isAuthenticated() {
  // Check whether the current time is past the
  // access token's expiry time
  let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
}

}
