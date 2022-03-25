# Games-R-Uss
My project is what one would suspect, a website designed to mimic the behavior of Amazon, where you can view items, create comments, add items that you like to your cart and checkout of your cart.

# Index
   - [Features List](https://github.com/Wilvanson/Games-R-US/wiki/Feature-List)
   - [Database Schema](https://github.com/Wilvanson/Games-R-US/wiki/Database-Schema)
   - [User Stories](https://github.com/Wilvanson/Games-R-US/wiki/User-Stories)
   - [WireFrame](https://github.com/Wilvanson/Games-R-US/wiki/WireFrame)
   - [Live Site](https://games-r-uss.herokuapp.com)
   
# Technologies used
   # Frontend
      -Javascript
      -React
      -Redux
      -HTML/CSS
   
   # Backend
      -Python
      -Flask
      -SQLAlchemy
      -PostgreSQL
      -WTForms
      -Docker
      -Heroku
# Flow
 1. Home-
    ![]()![image](https://user-images.githubusercontent.com/90806686/160162966-59e90a63-454b-4c4c-bc20-0ed10794fb11.png)



 2. Single-Item-
    ![]()![image](https://user-images.githubusercontent.com/90806686/160163157-b3dc5fb4-f79d-4abe-9f0a-73f095f68370.png)
    
    
    
 3. Cart- 
    ![]()![image](https://user-images.githubusercontent.com/90806686/160163383-92ec116b-d7d3-43fd-8313-5148e49f7528.png)
    
    
    
# Setup
1. Clone the repo

        git@github.com:Wilvanson/Games-R-US.git

2. Install all dependencies at the root of your directory

    
        pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      

3. Create a POSTGRESQL user with Create database access and a password in PSQL, along with a database 

        CREATE USER <username> WITH PASSWORD 'password' WITH CREATEDB;
        CREATE DATABASE <name> WITH OWNER <username>;

4. Create a .env file at the root of your project and copy the information from your .env.example file

5. You with need to open your pipenv shell and connection your database

        1. pipenv shell
        2. flask db upgrade
        3. flask seed all

6. Now it's time to install your dependencies for the react side of things but frist you need to cd into the react-app folder

        npm install 

7. There is one more package you will need to finish the process which is react-modal

        npm install react-modal

8. Start your servers in both your front and backend 

        1. At the root: flask run
        2. In React-app: npm start
