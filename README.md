# ts-factory-webapp #

ts-factory-webapp is a simple web-application used to create some kind of times series mock data.

## Getting Started

### Prerequisites
Before you can use this project make sure that you fulfill the following prerequisites. In order to run the application the following must be installed on your machine:

#### Node.js & NPM
Make sure you have installed _Node.js_ and _NPM_ installed on your local machine. If you need to install it, have a look at [https://nodejs.org/en/](https://nodejs.org/en/). _Node.js_ comes together with _NPM_.

#### Docker
In order to run the the dockerized application you need to install _Docker_. If you want to install it may visit [_Docker_ docs](https://docs.docker.com/).

First clone this repository to your local machine. Afterwards change into your project directory and run `npm install` to download all required dependencies.

```
cd ./$(project-root)
npm install
```

### Run it with Node
If you want to run it directly as a node application on you machine just type `npm start`
```
npm start
```

This will automatically start the application.  When the application has started successfully, go to [http://localhost:3000](http://localhost:3000) in your favorite browser. This will open up the ts-factory.

### Run it with Docker

If you want to run it withing a Docker containter you frist need to build it.
```
npm run docker:build
```

This will automatically build a Docker container for you. After that you can run it with

```
docker run -p ${your_port_of_choice}:3000 -d dlorian/ts-factory-webapp
```