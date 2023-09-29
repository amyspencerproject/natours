# Natours App

This app is final project for Jonas Schmedtmann's Node course.

### Links

- Github Repo URL: [Natours Repo](https://github.com/amyspencerproject/natours)
- Live Site URL: [Natours Page]()

### Built with

- Node.js
- Express
-

### What I learned

- It is a common practice to use app.js with Express not index.js
- Have not been able to get Postman application to open on my Mac. I know that I have used the app successfully as recently as July. Tried downloading it again and it worked but then would not relaunch the next time I tried to use it. Doing all the building, testing with the web version.
- **Good Practice:** Put a version on all your APIs so that you do not break an API that someone else is using. The example below is v1 and if later on I wanted to play around with something then I would use v2.

  `app.get('/api/v1/tours');`

- JS trick to convert a string into a number is to multiply it by 1 🤩

  `const id = req.params.id * 1;`

- you can define a variable in the url and it will be available in `req.params`. So

  `app.get('/api/v1/tours/:id', (req, res) => {}`

  will make a variable called id that can be defined in the url request by the user. This is why the above JS trick is needed. That id needs to be a number to retrieve the correct tour.

### Useful resources

- [Express](https://www.npmjs.com/package/express?activeTab=readme) - Documentation

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
