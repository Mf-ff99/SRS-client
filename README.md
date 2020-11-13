# LearnSpanish! 

## Summary
Bootstrapped with create-react-app and completed using JavaScript, vanilla CSS, JSX and ReactJS.

 Front-end Live Deployment: https://srs-client.vercel.app/
 Back-end Live Deployment: https://srs-server-api.herokuapp.com/
 
  LearnSpanish! is a language learning application designed for teaching beginner Spanish learners a handful of Spanish words and phrases. LearnSpanish! features a Spaced-Repetition algorithm on the back-end to help users stay caught up on their studies without forgetting any new words they have learned. The application features 10 spanish words and is built to allow for the application to be expanded upon. 

  In this project, the hardest part was building out the Express server on the back-end to accomadate the SRS system. Two endpoints handle the Language requests to determine the user's current score and return the next word for the user to study. 

## Screenshots

# Login Page

![image](https://user-images.githubusercontent.com/66629254/99112345-837c3700-25bb-11eb-8887-6853bad23990.png)

# Sign-up Page

![image](https://user-images.githubusercontent.com/66629254/99112386-95f67080-25bb-11eb-90bc-59f2c81ca8ad.png)

# Dashboard 

![image](https://user-images.githubusercontent.com/66629254/99112434-aad30400-25bb-11eb-8565-03912a2bb171.png)

# Practice page

![image](https://user-images.githubusercontent.com/66629254/99112465-b4f50280-25bb-11eb-8164-cc006c272496.png)

# Next word page

![image](https://user-images.githubusercontent.com/66629254/99112507-bfaf9780-25bb-11eb-84eb-470ea1c889fa.png)


## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.
