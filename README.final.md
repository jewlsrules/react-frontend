# Unit 4 Group Project: React & PHP


## Job Application Tracker

A minimalist app to help you keep track of your job applications while navigating the job-search world!

**Created by:**  
Jewls Krueger & Ashley Brickhouse

Check out the live app here: [App-Tracker](https://react-app-tracker.herokuapp.com/)


## Technologies Used
1. Heroku: for deployment
2. Heroku PostgresSQL: for database management
3. PHP: used for backend development
4. React.js: used for the frontend development
5. CSS3: frontend styling
6. Restful API: used for adding and grabbing data from our database
7. CRUD: used for routes that enabled basic user experience (create, read, update, delete)


## User Stories
1. A user should be able to add information about a job application
2. A user should be able to edit information about a job application
3. A user should be able to delete a job application
4. A user should be able to see all of the job applications they've added


## Approach Taken
We wanted to make sure that we could deploy the app correctly so we focused on that main goal initially. Jewls set up the basic backend with a GET route (for testing purposes) and created a Github repo, while I set up the Heroku account with PostgresSQL. After making sure we had an API and were able to fetch the data we finished up with some styling.

### Setbacks
Heroku deployment was the most difficult part. It took us awhile to figure out that we needed two Heroku setups and two repos. This way there could be a frontend setup for React, and a backend setup with PHP. This process took up the bulk of our development time. 


## Potential Improvement Goals
If we had more time we would have liked to:
1. create user profiles in order to save personal applications to individual profiles
2. authentication with usernames and encrypted passwords
3. more creative styling with different backgrounds for each component view
