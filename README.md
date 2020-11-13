# LearnSpanish! 

## Summary
Bootstrapped with create-react-app and completed using JavaScript, vanilla CSS, JSX and ReactJS.

 Front-end Live Deployment: https://srs-client.vercel.app/
 Back-end Live Deployment: https://srs-server-api.herokuapp.com/
 
  LearnSpanish! is a language learning application designed for teaching beginner Spanish learners a handful of Spanish words and phrases. LearnSpanish! features a Spaced-Repetition algorithm on the back-end to help users stay caught up on their studies without forgetting any new words they have learned. The application features 10 spanish words and is built to allow for the application to be expanded upon. 

  In this project, the hardest part was building out the Express server on the back-end to accomadate the SRS system. Two endpoints handle the Language requests to determine the user's current score and return the next word for the user to study. 

## Screenshots

### Login Page

![image](https://user-images.githubusercontent.com/66629254/99112345-837c3700-25bb-11eb-8887-6853bad23990.png)

### Sign-up Page

![image](https://user-images.githubusercontent.com/66629254/99112386-95f67080-25bb-11eb-90bc-59f2c81ca8ad.png)

### Dashboard 

![image](https://user-images.githubusercontent.com/66629254/99112434-aad30400-25bb-11eb-8565-03912a2bb171.png)

### Practice page

![image](https://user-images.githubusercontent.com/66629254/99112465-b4f50280-25bb-11eb-8164-cc006c272496.png)

### Next word page

![image](https://user-images.githubusercontent.com/66629254/99112507-bfaf9780-25bb-11eb-84eb-470ea1c889fa.png)


## Tech-stack and Testing

React.js, JavaScript, vanilla css, PostgreSQL, SQL, Node.js, Enzyme, Jest, Mocha, Chai

Front end testing: This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Back end testing: Mocha and Chai were used to test each endpoint and knex-services, each endpoint has at least one test for the 'happy path', and one test for the 'unhappy path'

## The Back-end
 ### SRS API
 The back-end is written with Express.js and utilizes a RESTful state to satisfy CRUD requests.
 
 More extensive API documentation is available at the API github repo.
 
  ### API Github Repo
   * https://github.com/Mf-ff99/SRS-api
   
   
## Other odds and ends

 If you wish to see what the application can do on your own machine, or simply tinker around with the code, follow the directions below.
 
 * clone the repo to an empty folder
 * then run the following commands in the cmd console
 ```
 npm i
 ```
 ```
 npm run start
```





