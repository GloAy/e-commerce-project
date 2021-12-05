<div align = "center">

<b>

[Here is the link to deployed app!](https://stupefied-wozniak-d07eeb.netlify.app/)
</b>

</div>

---

## Table of contents

* [Technologies]
* [Features]
* [Architectural Design]
* [Backend Overview] 
* [Database Setup] 
* [Frontend Overview] 


---

## Technologies

* Axios
* Express
* Stripe Checkout
* pg
* Morgan: version
* Typescript
* Axios
* Postgres: version
* React: version
* Material UI 
* Material Styles
* Sequelize-cli
* React Hooks
* Webpack
* Babel
* Cors
* S3


---

## Features

* Browse all products and add them to your cart for check out
* Click on an individual product for more details
* Check out cart to buy products

---

## Architectural Design

* The architectural design that was used is Model View Control. View is where all the react Hook components are saved. Controllers folder have all the apis and Models hold all the model, migrations and seed files. 

---
## Backend Overview


* The backend communicates between products, order details, order item, and user  data between a PostgreSQL database and the frontend; the API serves up that information in the JSON format.There are associations between each model. Please see my schema design here: 
<img src="https://embed.creately.com/fgtRIX9hVeh?token=HHhn5NAPdTDp3Fra&type=svg">

 [VIEW WIREFRAME](https://www.figma.com/file/0JbE8y7Uk2hsepeGAudyi0/Untitled?node-id=0%3A1)

* There are 4 tables Products, Order-Details, Order-Item and User:
* The products table has rows representing each product, with columns for the id, name, description, size, price, quantity and imageurl
* The order items table has rows that represent the order details id  and product id  (forms one to many relations). The product id and order details id is generated when the user buys a candle.
* The order details table has rows representing the payment id and the user. 
* The user table is connected to the order details table 


## Database Setup

Download and install PostgreSQL or you can download Postico and create the db.
In your terminal, run 'psql' to open the PostgreSQL shell. 
Run 'CREATE DATABASE ;'
Connect to the database by running 'e-commerce-final’
Create tables by running ‘npm run migrate’
To seed the database, run ‘npm run seed’
Starting the App
In the backend directory, run 'npm run dev'
In the frontend directory, run 'npm run watch'
The site should be up and running.

---

## Frontend Overview 

Components:

Main Page: The main page has a navbar, banner and a footer components 

<img src="https://candlebymelissa.s3.us-east-2.amazonaws.com/homepage.png" width="40%">

Navbar: Navbar has three different components that users can interact with - Shop, About Us and the Cart. These are all separated into different components and added to the Homepage component as child components. 

Shop: Shop component takes the user to the products component candle list page where the user can browse different candles with different scents, sizes, prices. When clicked on the view button, this takes the user to the single product page.

<img src="https://candlebymelissa.s3.us-east-2.amazonaws.com/productspage.png" width="40%">

Product component: Product component is rendered on the products component as a child component. This component makes an api call to the back end with axios to get all the products listed on the page. 

Single Product Page: Single product page makes an axios call to the backend to render a single product. The user is able to choose the quantity and add the product to their cart.

Cart Component: Card component makes a axios request to the backend to get all the order details and render them on the page. The items added to the cart are listed and the user can checkout using the checkout button.

<img src="https://candlebymelissa.s3.us-east-2.amazonaws.com/cartpage.png" width="40%">

Checkout Component: Once the user clicks on checkout - the child component payment form is rendered.

Payment Form: This page uses the stripe api and makes an api call to the stripe api to make the payment. 

<img src="https://candlebymelissa.s3.us-east-2.amazonaws.com/paymentpage.png" width="40%">

Confirmation Page:

<img src="https://candlebymelissa.s3.us-east-2.amazonaws.com/confirmationpage.png" width="40%">






