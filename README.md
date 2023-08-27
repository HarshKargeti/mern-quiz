# mern-quiz

# How to view the app
To view the app, click [here](https://quiz-app-81g0.onrender.com)
Create an account with a username, email address, password. 

# Run Locally
## Clone the project

  git clone https://github.com/HarshKargeti/mern-quiz.git
  
## Go to the project directory :  

cd mern-quiz-main

## Install dependencies for Client And Server :

  npm run setup-project

## Start both server :

  npm run dev

# Connection String
For security reasons we used our own Mongo Atlas string which is stored in a .env file 
You will need to set your own connection string up in order to store and retrieve your own data, but your environmental variable must be called, 'MONGO_URL'.

# JWT
JWT is used for user authentication.
So, you also have to set your secret key and expire time, your environmental variable must be called, JWT_SECRET and JWT_EXPIRES_IN (It is stored in .env file for security purpose).
