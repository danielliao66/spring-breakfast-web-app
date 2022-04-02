# spring-breakfast-web-app
### Introduction
Inspired by some order machines in some restaurants, this project implements a web application where people can order breakfast meals.
### Server side
Information about items in the menu, including names and prices, is stored in a database using MongoDB. To handle HTTP requests from the client side, Spring Web is utilized. The menu and status of orders can be sent back to the client side.
### Client side
With an interface powered by React, customers can view the menu and make orders accordingly. Orders are sent to the server side and customers can check if their orders are ready or being prepared.
### Demo
You can use the application in the following link: https://spring-breakfast-app.vercel.app/.  
For security concerns, database access is made read-only. The connection string for guests can be found [here](https://github.com/danielliao66/spring-breakfast-web-app/blob/main/server/src/main/resources/application.properties).
