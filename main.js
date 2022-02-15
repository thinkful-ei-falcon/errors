const users =[];

function addUserToDatabase(username) {
    if (!username || username.length < 3) {
      throw new Error('Must provide a username greater than 2 chars');
    }
    
    if (findUserInDatabase(username)) {
      throw new Error('Username already exists. Choose another.');
    }
    
    // All validations passed
    saveUserToDatabase(username);
    console.log('Successfully added person to database.');
  }

  function findUserInDatabase(username){
    return users.includes(username);
  }

  function saveUserToDatabase(username){
      users.push(username);
  }
  
  try {
    addUserToDatabase('John');  // Successful
    addUserToDatabase('Jo');    // Will throw error and be caught below   
    addUserToDatabase();        // Will throw error and be caught below
  } catch(e) {
    console.error(`${e.name}: ${e.message}`);
  }finally{
      console.log('This always executes!');
  }

  console.log('The try catch is over!')