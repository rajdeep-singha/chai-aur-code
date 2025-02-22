function login(username, password){
  if(username === 'admin' && password === '1234'){
    return 'Login successful';
  } else {
    console.log( 'Login failed');
  }
}