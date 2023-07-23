# VStream
VStream is a simple server - client architecture to demonstrate streaming of large video files in multiple small data chunks to multiple users. Also having a download video option with same concept. Backend is developed in Node.js where as Frontend is in Javascript.


# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|PORT           | PORT value            | 5012      |
|IPaddr           | IP address           | localhost      |
|VIDEODIR           | Video Directory            | "Database/"      |
|CHUNK_SIZE           | Chunk size for streaming            | 3000000 #3MB      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)


# Getting started
- Clone the repository
```
git clone https://github.com/BluBeer/VStream.git VStream
```
- Install dependencies
```
cd VStream
npm install
```

- Download Video Files from [link](https://drive.google.com/drive/folders/1Nz_dF_29FQqFmxd3x7fdgnmg9Erz_A5P?usp=drive_link)
```
Download 2 large Video from above link and save in Database folder
```
link - https://drive.google.com/drive/folders/1Nz_dF_29FQqFmxd3x7fdgnmg9Erz_A5P?usp=drive_link

- Build and run the project
```
npm start
Frontend - Open index.html file from frontend folder
```

- Express status monitor

  ```
  Open express-status-monitor - (http://localhost:5012/status) to monitor CPU Usage, Memory Usage, Response time, requests per second.
  ```


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **Database**                 | Contains large size media files used for streaming  |
| **__tests__**         | Contains basic tests written using jest                                                            |
| **.env**        | Application configuration including environment-specific configs 
| **frontend**           | Contains files related to frontend  |
| **controllers**      | Controllers define functions to serve various express routes. 
| **middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes
| **routes**           | Contain all express routes, separated by module/area of application                       
| **services**      | Contains helping function to serve controllers |
| **app.js**         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | 



### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node from app.js. Can be invoked with `npm start`                  |
| `test`                    | Runs build and run tests using jest        |


## Testing
The tests are  written in Jest

```
"jest": "^29.6.1"

```

## Monitoring
Live Monitoring can be done using Express status monitor 
http://localhost:5012/status

```
"express-status-monitor": "^1.3.4"

```


### Running tests using NPM Scripts
````
npm test

````
Test files are created under test folder.
