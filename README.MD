#INSTALL NodeJS & MongoDB
## Install NodeJS --> https://nodejs.org/en/download/
## Install MongoDB -> https://www.mongodb.com/try/download/community

#INSTALL PACKAGES, respectively
### npm init
### npm i nodemon --save-dev
### npm i express mongoose morgan body-parser 
### npm i bcryptjs jsonwebtoken

When you run the application, there will be a database called 'login' in your local. In the login db, there is a collection named 'MANAGING_USER' which includes all the user that will be authorized. 

db.MANAGING_USER.find() --> You can easily access the user information by this query.