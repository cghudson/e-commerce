# E-Commerce

![GitHub License](https://img.shields.io/badge/License-MIT-green)

## Description

- Challenge Assignment for University of Wisconsin Extended Campus Coding Bootcamp
- This application provides an E-Commerce platform that allows users to manage (view, create, update, and delete) products, product categories, and product tags.

## Table of Contents

- [User Story](#user-story)
- [Installation](#installation)
- [Preview](#preview)
- [License](#license)
- [Questions](#questions)

## User Story

GIVEN a functional Express.js API
<br />
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
<br />
THEN I am able to connect to a database using Sequelize
<br />
WHEN I enter schema and seed commands
<br />
THEN a development database is created and is seeded with test data
<br />
WHEN I enter the command to invoke the application
<br />
THEN my server is started and the Sequelize models are synced to the MySQL database
<br />
WHEN I open API GET routes in Insomnia for categories, products, or tags
<br />
THEN the data for each of these routes is displayed in a formatted JSON
<br />
WHEN I test API POST, PUT, and DELETE routes in Insomnia
<br />
THEN I am able to successfully create, update, and delete data in my database

## Installation

- Run `npm install` at the root of the project
- Enter the MYSQL Shell and run `source db/schema.sql;` to initialize the database
- Create a .env file and add the following information:
  - DB_NAME=ecommerce_db
  - DB_USER='your MYSQL username'
  - DB_PW='your MYSQL password'
- In the root of the project, run `npm run seed` to seed the database
- Run `npm start` or `node server.js` to start the server

## Preview:

Click [here](https://drive.google.com/file/d/1leiMK5Z7iqKC6v4WvSuwOa31wKOAPixx/view) to view a video demonstration.

https://drive.google.com/file/d/1leiMK5Z7iqKC6v4WvSuwOa31wKOAPixx/view

## License

This application is licensed under MIT.

## Questions

If you have any questions about this project please email me directly at [cghudson@uwalumni.com](mailto:cghudson@uwalumni.com) .

View more of my projects on [GitHub](https://github.com/cghudson).
