# Simple express rest api

This is a super simple example of how to use an express api to replicate the same functionality as the lambda function we created earlier, give this repo a fork and work from this instead. There is absolutely ZERO need for all of the stuff you had in the express app you currently have.

I think you mentioned that you hadn't used environment variables yet so I've made use of them here as an example. You will need to modify the .env.example file to include your actual credentials (I'm going to add this repo publically so wont include yours). You can learn more about the package I used [here](https://www.npmjs.com/package/dotenv).

I've added an excessive amount of comments that I wouldn't usually add in a project but hopefully they help, any questions let me know!

## Structure

### app.js
This is the entry point into the application, it is where our database connection is established and rest endpoints are configured.

### getUsers.js
This exports a function that returns users from the database

### getGeneric.js
This exports a generic function that returns the result of any sql query run against the database

## Usage

Install dependencies using ```npm install```

You can then run the app as you would normally using ```npm start```
