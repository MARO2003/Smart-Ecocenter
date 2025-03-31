# Smart-Ecocenter
Smart EcoCenter is an Web Application that help users to recycle efficiently with proposing adapted Ecocenters and alternative suggestions to save time for the city and civilians



## Structure

## Set-up
1. cloner repository dans nos pc :

    ```
    git clone https://github.com/MARO2003/smart-ecocenter.git
    cd smart-ecocenter
    ```
    si le git clone vous affiche des erreur concernant des caractere invisible:
    ```
    echo "git clone http://github.com/MARO2003/smart-ecocenter.git" | tr -d '\302\226' | bash
    ```
2. creer les trois composant principale :
   
    - le dossier backend
    - le dossier frontend
    - le fichier "docker-compose.yml" : definit un env conteneurise pour l'app a 3 services: front(react) + back(node.js+Express) + sata base()

3. creer l'application reeact dans le front end:
   
    ```
    cd frontend
    npx create-react-app .
    ```
4. set-up node.js backend:

    ```
    cd ../backend
    npm init -y
    npm install express cors mongoose dotenv
    ```
    - en initialisant `npm init -y` on a put creer le fichier package.json avec des valeurs par defaut (contient les infos et les dependances des projet).
    - apres on a installe plusieurs modules :
        - **express** : a streamlined web application framework for Node.js designed to facilitate the creation of web applications and APIs.
        - **cors** :  a browser-level security feature that disallows the requests (by default) to be made between different origins, i.e., a frontend client requesting                         a backend server that is deployed on a different origin or domain.
        - **mongoose** : a popular **ODM** (Object Data Modeling) library for MongoDB and Node.js that simplifies database interactions by providing a schema-based                             solution to model application data.
        - **dotenv** :  manage environment variables. Environment variables are values that are set outside of an application's code and are accessible to the                                   application during runtime. These variables often contain sensitive information like API keys, database connection strings, or configuration                                settings.

    A chaque fois qu'on fait des changements on doit redemarrer le serveur, alors **nodemon** va nous aide a redemarrer automatiquement le serveur :
    > **nodemon** : a module that develop node.js based applications by automatically restarting the node application when file changes in the directory are detected
    > ```
    > npm i --save-dev nodemon
    > ```
    > Creer une script dans le tag scripts:
    > Dans package.json
    > ```
    > "devStart" : "nodemon server.js"
    > ```
    > cd backend
    > npm run devStart
    > ```

