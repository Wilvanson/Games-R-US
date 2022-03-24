# Games-R-Uss
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