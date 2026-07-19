
# 🚀 ProLancer - Freelancer Marketplace Platform

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/Project-Freelancer%20Marketplace-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge">
</p>

---

# 📖 About the Project

**ProLancer** is a full-stack Freelancer Marketplace web application inspired by platforms like **Fiverr** and **Upwork**. The objective of this project is to provide a platform where:

- Freelancers (Sellers) can create professional profiles and offer their services.
- Clients can search for freelancers and hire them according to their requirements.

Unlike many academic projects that focus only on the user interface, ProLancer is being developed as a **complete MERN Stack application**, including frontend, backend, authentication, database integration, and REST APIs.

This repository is also maintained as a **development journal**, documenting every major decision, implementation step, and the reasoning behind each technology used. The goal is not only to build the application but also to understand and remember the complete development process.

---

# 🎯 Project Objectives

The primary objectives of this project are:

- Build a real-world Freelancer Marketplace application.
- Learn and implement the MERN Stack from scratch.
- Understand the complete client-server architecture.
- Practice REST API development.
- Learn secure authentication using JWT and bcrypt.
- Store and manage application data using MongoDB.
- Apply MVC (Model-View-Controller) architecture.
- Gain experience with Git and GitHub for version control.
- Prepare a portfolio-quality project suitable for placements and interviews.

---

# 💡 Problem Statement

Many students learn frontend and backend technologies separately but never understand how they work together in a complete application.

This project aims to bridge that gap by building an end-to-end Freelancer Marketplace where every component communicates with another.

Instead of developing isolated pages, the project demonstrates:

- User Authentication
- Profile Management
- Database Integration
- API Communication
- Secure Password Storage
- Role-Based User Management
- Dashboard Development

---

# 👨‍💻 Current Development Status

> **Project Status:** 🚧 Under Development

### ✅ Completed Modules

- Landing Page
- Login Page
- Join Page
- Common Registration Page
- Seller Information Pages
- Seller Profile Creation UI
- Seller Dashboard UI
- Client Profile Creation UI
- Client Dashboard UI
- MongoDB Database Connection
- User Registration API
- User Login API
- JWT Authentication
- Password Hashing using bcrypt
- Seller Profile Backend (In Progress)

---

# 🛠️ Technologies Used

The project is intentionally developed using only the technologies covered during the college MERN Stack course.

| Technology       | Purpose                            |
| ---------------- | ---------------------------------- |
| HTML5            | Structure of web pages             |
| CSS3             | Styling and responsive layouts     |
| Bootstrap        | Ready-to-use responsive components |
| JavaScript       | Client-side functionality          |
| DOM Manipulation | Dynamic webpage interactions       |
| BOM              | Browser-related operations         |
| jQuery           | Simplified DOM manipulation        |
| Node.js          | JavaScript runtime environment     |
| Express.js       | Backend framework                  |
| MongoDB          | NoSQL Database                     |
| Mongoose         | MongoDB Object Modeling            |
| JWT              | User Authentication                |
| bcrypt           | Password Encryption                |
| REST API         | Client-Server Communication        |
| Git              | Version Control                    |
| GitHub           | Project Hosting                    |

---

# 📚 Why These Technologies?

This section explains **why** each technology has been used instead of simply listing them.

---

## HTML

HTML provides the basic structure of every webpage.

Every page in ProLancer begins with semantic HTML elements to improve readability and maintainability.

Example:

```html
<header>
<nav>
<section>
<footer>
```

HTML acts as the skeleton of the application.

---

## CSS

CSS is responsible for the visual appearance of the project.

It is used for:

- Layout
- Colors
- Responsive Design
- Animations
- Typography
- Flexbox
- Grid Layout

Instead of relying heavily on Bootstrap, custom CSS has been written to improve learning.

---

## Bootstrap

Bootstrap helps in building responsive user interfaces quickly.

It is mainly used for:

- Forms
- Buttons
- Alerts
- Responsive Grid
- Utility Classes

This reduces repetitive CSS while keeping the interface clean.

---

## JavaScript

JavaScript connects the frontend with the backend.

Major responsibilities include:

- Form Validation
- DOM Manipulation
- Fetch API Requests
- Local Storage
- Dynamic Content
- User Interaction

Without JavaScript, the webpages would remain static.

---

## Node.js

Node.js allows JavaScript to run outside the browser.

Instead of writing backend code in another language like Java or PHP, Node.js enables the use of JavaScript for both frontend and backend development.

Benefits:

- Same language across the project
- Faster development
- Large package ecosystem
- Event-driven architecture

---

## Express.js

Express.js simplifies backend development.

Instead of manually handling HTTP requests, Express provides:

- Routing
- Middleware
- Request Handling
- Response Handling

Example:

```javascript
app.use("/api/users", userRoutes);
```

This keeps the backend modular and organized.

---

## MongoDB

MongoDB is the primary database used in this project.

Unlike relational databases, MongoDB stores information as JSON-like documents.

Example:

```json
{
  "name": "Yash",
  "email": "abc@gmail.com",
  "role": "seller"
}
```

Advantages:

- Flexible schema
- Easy integration with JavaScript
- Faster development
- Suitable for modern web applications

---

## Mongoose

Mongoose acts as a bridge between Express.js and MongoDB.

Instead of directly writing MongoDB queries everywhere, Mongoose provides:

- Schemas
- Models
- Validation
- Cleaner code structure

Example:

```javascript
const User = mongoose.model("User", userSchema);
```

Using Mongoose improves code readability and maintainability.

---


> 📌 **Developer Note**
>
> This README is intentionally written as a learning journal. Every section explains not only *what* was implemented but also *why* it was implemented. As the project progresses, this document will continue to grow with detailed development steps, architectural decisions, backend implementation notes, and interview-oriented revision material.
>


---
# 🚀 Development Journey

This section documents the complete development process of **ProLancer** from the very beginning. Instead of only explaining the final implementation, every important milestone is described along with the reasoning behind the decisions taken during development.

The purpose of this section is to help future developers (including myself) understand:

- What was built?
- Why was it built?
- Which concepts were used?
- What was learned during that step?

This section also serves as a revision guide before interviews, project demonstrations, or future feature development.
---
# 📌 Step 1 : Project Planning

## Objective

Before writing any code, it is important to understand the purpose of the application and identify the different types of users who will interact with it.

Instead of immediately starting with HTML or backend development, the first task was to plan the complete workflow of the application.

A proper plan helps avoid confusion during development and reduces unnecessary modifications later.

---

## Understanding the Problem

The main idea behind ProLancer is to build a platform where two different types of users interact with each other.

### 1. Seller (Freelancer)

A seller is a freelancer who wants to provide services.

Examples:

- Web Developer
- Graphic Designer
- Video Editor
- AI Developer
- UI/UX Designer

The seller creates a profile, lists skills, creates gigs, and waits for clients to hire them.

---

### 2. Client

A client is a person or company looking for freelancers.

Instead of offering services, clients browse freelancer profiles and hire suitable candidates for their projects.

---

## Initial Goal

Instead of building every feature at once, the project was divided into smaller milestones.

This approach makes development easier and allows testing after every major feature.

---

## Planned Workflow

### Seller Journey

```text
Landing Page
        │
        ▼
Sign In / Join
        │
        ▼
Registration
        │
        ▼
Profile Overview
        │
        ▼
Seller Guidelines
        │
        ▼
Create Seller Profile
        │
        ▼
Seller Dashboard
        │
        ▼
Create Gig
        │
        ▼
Receive Orders
```

---

### Client Journey

```text
Landing Page
        │
        ▼
Sign In / Join
        │
        ▼
Registration
        │
        ▼
Create Client Profile
        │
        ▼
Client Dashboard
        │
        ▼
Browse Freelancers
        │
        ▼
Hire Freelancer
```

---

## Features Planned

The complete application was divided into independent modules.

### Authentication Module

- User Registration
- User Login
- JWT Authentication
- Password Encryption

---

### Seller Module

- Seller Profile
- Dashboard
- Gig Management
- Orders

---

### Client Module

- Client Profile
- Dashboard
- Search Freelancers
- Hire Freelancers

---

### Database Module

- User Collection
- Seller Profile Collection
- Client Profile Collection
- Gig Collection

---

### Future Modules

- Messaging System
- Reviews & Ratings
- Payments
- Notifications
- Admin Dashboard

These features are intentionally planned for future development after the basic application becomes fully functional.

---

# Why Plan Before Coding?

Many beginners immediately start writing code.

However, during large projects this usually creates problems such as:

- Rewriting code repeatedly
- Poor folder structure
- Duplicate files
- Difficult debugging
- Confusing project flow

Planning the workflow before development helped create a cleaner architecture and reduced future modifications.

This is a common practice followed in software development companies.

---

## What Was Learned

During this stage, the focus was not on coding but on understanding software design.

Important concepts learned:

- Requirement Analysis
- User Flow Design
- Feature Planning
- Project Breakdown
- Module-Based Development

---

## Developer Notes

One important decision taken during planning was **not** to build the seller and client modules simultaneously.

Instead, both modules would share common functionality wherever possible.

For example:

Instead of creating two separate registration pages,

```
seller_register.html

client_register.html
```

only one common registration page was planned.

The selected role (Seller or Client) would determine which workflow should continue after registration.

This reduces duplicate code and follows the **Don't Repeat Yourself (DRY)** principle.

---

## Revision Notes

### Key Concepts

✔ Requirement Analysis

✔ User Flow

✔ Software Planning

✔ Module-Based Architecture

✔ DRY Principle

---

### Interview Questions

**Q1. Why did you divide the project into modules?**

To make development easier, improve maintainability, and allow independent testing of each feature.

---

**Q2. Why is project planning important?**

Planning reduces development time, prevents duplicate work, and creates a cleaner architecture.

---

**Q3. Why use a common registration page for both Sellers and Clients?**

Both users require the same registration information (Name, Email, Password). The only difference is the role. Using one page avoids code duplication and makes maintenance easier.

---

**End of Step 1**

At this stage, no coding was performed.

The complete application architecture and development roadmap were finalized.

The next step focuses on setting up the project structure and organizing both the frontend and backend directories before writing any functionality.


# Step X : User Registration & Authentication

## 🎯 Objective

Allow a new user to register securely and login to the application.

---

## 📁 Files Created

### Frontend

```
4_register.html
4_register.css
4_register.js
```

### Backend

```
models/User.js
controllers/userController.js
routes/userRoutes.js
```

---

## 🔄 Registration Workflow

```
User fills Registration Form
            │
            ▼
JavaScript Validation
            │
            ▼
fetch("/api/users/register")
            │
            ▼
Express Route
            │
            ▼
Controller
            │
            ▼
Check Existing User
            │
            ▼
bcrypt.hash(password)
            │
            ▼
Save User in MongoDB
            │
            ▼
Generate JWT Token
            │
            ▼
Return Response
            │
            ▼
Store Token in Local Storage
```

---

## Why bcrypt?

Passwords should never be stored in plain text.

Example ❌

```
Password = 123456
```

Database

```
123456
```

Anyone with database access can see it.

Instead,

```
bcrypt.hash(password, 10)
```

stores

```
$2b$10$kdjhaskjdhkajshdk...
```

During login,

```
Entered Password

↓

bcrypt.compare()

↓

True / False
```

Original password is never stored.

---

## Why JWT?

After successful login,

the backend creates a token.

```
jwt.sign(
{
    id: user._id,
    role: user.role
},
JWT_SECRET
)
```

The frontend stores this token.

```
localStorage

↓

token
```

Every protected API sends

```
Authorization

Bearer <token>
```

---

## JWT Workflow

```
User Login

↓

JWT Generated

↓

Token sent to Frontend

↓

Stored in localStorage

↓

Frontend sends Token

↓

authMiddleware

↓

jwt.verify()

↓

Token Valid?

↓

YES

↓

req.user

↓

Protected Controller
```

---

## Why Middleware?

Instead of checking JWT inside every controller,

authentication is moved into one middleware.

```
Frontend

↓

Request

↓

Middleware

↓

Verify Token

↓

Controller
```

Controllers become cleaner.

---

## APIs

### Register

POST

```
/api/users/register
```

### Login

POST

```
/api/users/login
```

---

## Packages Used

| Package      | Purpose            |
| ------------ | ------------------ |
| bcrypt       | Password Hashing   |
| jsonwebtoken | JWT Authentication |
| mongoose     | Database Models    |
| express      | Backend Framework  |

---

## Learning

✔ REST API

✔ bcrypt

✔ JWT

✔ Local Storage

✔ Authentication Flow

✔ Middleware

✔ MVC Architecture


# Step 2 : Project Setup & Backend Initialization

## 🎯 Objective

Set up the project structure, initialize the backend, connect MongoDB, and install the required packages before implementing any features.

---

## 📁 Project Structure

```
ProLancer/

│── Frontend/
│── Backend/
│
└── README.md
```

---

## Backend Structure

```
Backend/

├── config/
│   └── db.js

├── controllers/

├── middleware/

├── models/

├── routes/

├── node_modules/

├── .env

├── app.js

├── package.json
```

---

## Why this Structure?

Instead of writing everything inside one file (`app.js`), the project follows the **MVC Architecture**.

```
Client

↓

Routes

↓

Controller

↓

Model

↓

MongoDB
```

Benefits:

- Easy to understand
- Easy to debug
- Reusable code
- Better scalability

---

## Packages Installed

```bash
npm init -y
```

Creates:

```
package.json
```

---

```bash
npm install express
```

Used for creating the backend server and APIs.

---

```bash
npm install mongoose
```

Used to connect Node.js with MongoDB.

---

```bash
npm install dotenv
```

Stores sensitive information like:

- MongoDB URL
- JWT Secret
- Port Number

inside the `.env` file.

---

```bash
npm install cors
```

Allows the frontend and backend to communicate even when running on different ports.

Example:

```
Frontend
localhost:5500

↓

Backend
localhost:5000
```

---

```bash
npm install bcrypt
```

Encrypts user passwords before saving them into MongoDB.

---

```bash
npm install jsonwebtoken
```

Creates and verifies JWT tokens for authentication.

---

```bash
npm install --save-dev nodemon
```

Automatically restarts the server whenever backend files are modified.

Instead of:

```
Stop Server

↓

node app.js
```

nodemon automatically reloads the application.

Run using:

```bash
npm run dev
```

---

## MongoDB Connection Flow

```
app.js

↓

db.js

↓

mongoose.connect()

↓

MongoDB Atlas / Compass

↓

Database Connected
```

---

## Server Initialization

```
app.js

↓

Express App Created

↓

Middlewares Loaded

↓

Routes Registered

↓

Database Connected

↓

Server Started
```

---

## Current Backend Modules

```
config/
```

Database Connection

---

```
models/
```

Database Schemas

---

```
controllers/
```

Business Logic

---

```
routes/
```

API Endpoints

---

```
middleware/
```

Authentication & Authorization

---

## Learning

✔ Express Setup

✔ MongoDB Connection

✔ Mongoose

✔ MVC Architecture

✔ npm Packages

✔ Environment Variables

✔ Backend Folder Structure


# Step 3 : User Registration & Authentication

## 🎯 Objective

Implement a secure authentication system where users can:

- Register as a Seller or Client
- Login using Email & Password
- Store encrypted passwords
- Generate JWT after successful authentication
- Access protected APIs securely

---

## 📁 Files Created

### Frontend

```
4_register.html
4_register.css
4_register.js

2_sign_in.html
2_sign_in.css
2_sign_in.js
```

### Backend

```
models/User.js

controllers/userController.js

routes/userRoutes.js

middleware/authMiddleware.js
```

---

# Authentication Workflow

```
User

↓

Register / Login Form

↓

Frontend Validation

↓

Fetch API

↓

Express Route

↓

Controller

↓

MongoDB

↓

Generate JWT

↓

Frontend

↓

Store Token in Local Storage
```

---

# User Registration Workflow

```
User enters

Name
Email
Password
Role

↓

POST /api/users/register

↓

Check Required Fields

↓

Email Already Exists?

↓

YES → Error

NO ↓

bcrypt.hash(password)

↓

Store User in MongoDB

↓

Generate JWT

↓

Return Success Response
```

---

# Login Workflow

```
User enters

Email
Password

↓

POST /api/users/login

↓

Find User

↓

User Found?

↓

NO → User Not Found

YES ↓

bcrypt.compare()

↓

Password Correct?

↓

NO → Invalid Password

YES ↓

Generate JWT

↓

Return Token

↓

Store Token in Local Storage
```

---

# Why bcrypt?

Passwords should never be stored directly in the database.

❌ Wrong

```
Password

123456
```

Database

```
123456
```

Anyone accessing the database can read the password.

---

Instead we use

```javascript
bcrypt.hash(password, 10)
```

Database

```
$2b$10$3mAjM8d...
```

The original password cannot be retrieved.

---

During Login

```
Entered Password

↓

bcrypt.compare()

↓

Match?

↓

true / false
```

No password is decrypted.

Only comparison is performed.

---

# Why JWT?

JWT (JSON Web Token) allows users to remain authenticated without logging in repeatedly.

After successful Login/Register

```
jwt.sign()

↓

Token Generated

↓

Frontend Receives Token

↓

Store in localStorage
```

Example

```javascript
localStorage.setItem("token", data.token);
```

---

# JWT Structure

A JWT contains three parts.

```
HEADER

.

PAYLOAD

.

SIGNATURE
```

Example

```
xxxxx.yyyyy.zzzzz
```

Payload contains

```
User ID

Role

Expiry Time
```

---

# Protected Route Workflow

Whenever a protected API is called

```
Frontend

↓

Reads Token

↓

Authorization Header

↓

Backend

↓

authMiddleware

↓

jwt.verify()

↓

Valid?

↓

YES

↓

req.user

↓

Controller

↓

MongoDB
```

---

Example

```
Authorization

Bearer eyJhbGc...
```

---

# Why Middleware?

Instead of writing

```
Verify JWT

Verify JWT

Verify JWT

Verify JWT
```

inside every controller,

we created

```
middleware/

authMiddleware.js
```

Every protected request first goes through

```
Route

↓

Middleware

↓

Controller
```

This keeps the code reusable and clean.

---

# Local Storage

After Login

```
localStorage

↓

token

userId

userName

role
```

These values are later used for

- Dashboard
- Profile
- Protected APIs
- Role-based Navigation

---

# Role-Based Flow

Seller

```
Register

↓

role = seller

↓

Profile Overview

↓

Seller Profile

↓

Seller Dashboard
```

Client

```
Register

↓

role = client

↓

Client Profile

↓

Client Dashboard
```

The same Registration page is used for both users.

Only the stored role changes the navigation.

---

# APIs Implemented

### Register

```
POST

/api/users/register
```

---

### Login

```
POST

/api/users/login
```

---

# Packages Used

| Package      | Purpose               |
| ------------ | --------------------- |
| bcrypt       | Password Hashing      |
| jsonwebtoken | Authentication        |
| mongoose     | MongoDB Models        |
| express      | REST APIs             |
| dotenv       | Environment Variables |

---

# Learning

✔ User Authentication

✔ REST APIs

✔ Password Hashing

✔ JWT Authentication

✔ Middleware

✔ Local Storage

✔ Role-Based Authentication

✔ MVC Architecture


# Step 4 : Seller Profile Module

## 🎯 Objective

Allow a registered seller to create a professional profile and securely save it in MongoDB.

Only authenticated users should be allowed to create a seller profile.

---

## 📁 Files Created

```
Frontend

9_create_seller_profile.html
9_create_seller_profile.css
9_create_seller_profile.js
```

```
Backend

models/SellerProfile.js

controllers/sellerController.js

routes/sellerRoutes.js

middleware/authMiddleware.js
```

---

# Seller Profile Workflow

```
Seller Dashboard

↓

Create Seller Profile Form

↓

Frontend Validation

↓

Fetch API

↓

Authorization Token

↓

Express Route

↓

JWT Middleware

↓

Seller Controller

↓

MongoDB

↓

Profile Saved
```

---

# Why JWT is Used Again?

After login, the user already has a JWT token.

Instead of sending

```
userId
```

from the frontend,

the frontend only sends

```
Authorization

Bearer <JWT Token>
```

The backend extracts the user's ID from the token.

This prevents users from changing the userId manually.

---

# Authentication Flow

```
Login

↓

JWT Created

↓

Stored in Local Storage

↓

Frontend Reads Token

↓

Authorization Header

↓

verifyToken Middleware

↓

jwt.verify()

↓

req.user

↓

Controller

↓

MongoDB
```

---

# Why Remove userId from Frontend?

❌ Old Approach

```
Frontend

↓

userId

↓

Backend
```

A user could easily modify another user's ID using browser developer tools.

---

✅ New Approach

```
Frontend

↓

JWT Token

↓

Backend

↓

Extract userId

↓

Save Profile
```

The frontend never decides the user ID.

The backend does.

This is more secure and closer to industry practices.

---

# Request Flow

```
Frontend

↓

POST

/api/seller/profile

↓

Headers

Authorization

Bearer Token

↓

Body

Full Name

Profession

Country

Experience

Skills

Portfolio

LinkedIn

Bio

↓

Backend
```

---

# Middleware Flow

```
Route

↓

verifyToken()

↓

Token Valid?

↓

YES

↓

req.user.id

↓

Seller Controller

↓

Create Seller Profile
```

---

# MongoDB Flow

```
Seller Profile Data

↓

SellerProfile Model

↓

MongoDB

↓

SellerProfiles Collection
```

---

# Database Relationship

```
User Collection

│

└── userId

        │

        ▼

SellerProfile Collection

userId

fullName

profession

country

experience

skills

portfolio

linkedin

bio
```

One User can have one Seller Profile.

The `userId` acts as a reference between both collections.

---

# API Implemented

### Create Seller Profile

```
POST

/api/seller/profile
```

---

# Security Improvements

✔ Passwords are never stored in plain text.

✔ userId is never accepted from the frontend.

✔ JWT is verified before accessing the controller.

✔ Only authenticated users can create a profile.

---

# Learning

✔ Protected Routes

✔ JWT Middleware

✔ Authorization Header

✔ req.user

✔ MongoDB Relationships

✔ Secure API Design


# Step 5 : Role-Based User Flow (Seller & Client)

## 🎯 Objective

Allow two different types of users (Seller and Client) to use the same application while following different workflows after registration.

Instead of creating separate authentication systems, a single authentication module is used with role-based navigation.

---

## User Roles

The application supports two roles:

- Seller (Freelancer)
- Client

Both users register using the same registration form.

The only difference is the selected role.

---

# Workflow

```
Landing Page

↓

Join Page

↓

Choose Role

↓

Seller OR Client

↓

Common Registration Page

↓

MongoDB

↓

Role Stored

↓

Redirect According to Role
```

---

# How Role is Selected?

On the **Join Page**, when a user clicks a button:

Seller

```javascript
localStorage.setItem("role", "seller");
```

Client

```javascript
localStorage.setItem("role", "client");
```

This value is later used during registration.

---

# Registration Flow

```
Join Page

↓

Role Saved in Local Storage

↓

Register Page

↓

Read Role

↓

POST /api/users/register

↓

MongoDB

↓

User Saved with Role
```

Example MongoDB Document

```json
{
    "name": "Yash",
    "email": "yash@gmail.com",
    "role": "seller"
}
```

or

```json
{
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "role": "client"
}
```

---

# Navigation After Registration

Instead of creating two registration pages, one common page handles both users.

```
Registration Successful

↓

Check Role

↓

seller ?

↓

YES

↓

Seller Profile Overview

```

OR

```
Registration Successful

↓

Check Role

↓

client ?

↓

YES

↓

Create Client Profile
```

This keeps the application simple and avoids duplicate code.

---

# Seller Workflow

```
Landing

↓

Join

↓

Register

↓

Profile Overview

↓

Seller Do's

↓

Seller Don'ts

↓

Create Seller Profile

↓

Seller Dashboard
```

---

# Client Workflow

```
Landing

↓

Join

↓

Register

↓

Create Client Profile

↓

Client Dashboard
```

---

# Why One Registration Page?

Instead of creating

```
seller_register.html

client_register.html
```

only one page is used.

Benefits:

- Less Code
- Easy Maintenance
- Single Validation Logic
- Single API
- Better Scalability

This follows the **DRY (Don't Repeat Yourself)** principle.

---

# Current Frontend Pages

```
Landing Page

↓

Sign In

↓

Join

↓

Register

↓

Seller Flow
        │
        ├── Profile Overview
        ├── Seller Guidelines
        ├── Create Seller Profile
        └── Seller Dashboard

OR

Client Flow
        │
        ├── Create Client Profile
        └── Client Dashboard
```

---

# Learning

✔ Role-Based Authentication

✔ Local Storage

✔ Conditional Navigation

✔ Reusable Registration

✔ DRY Principle

✔ Better Project Structure


# Step 6 : Backend Architecture & Request Lifecycle

## 🎯 Objective

Design the backend using the **MVC (Model-View-Controller)** architecture to keep the project modular, scalable, and easy to maintain.

---

## Backend Folder Structure

```
Backend/

├── config/
│   └── db.js

├── controllers/

├── middleware/

├── models/

├── routes/

├── app.js

├── .env

└── package.json
```

---

## Why MVC?

Instead of writing all logic inside `app.js`, responsibilities are divided into different folders.

| Folder      | Responsibility                 |
| ----------- | ------------------------------ |
| Routes      | Define API endpoints           |
| Controllers | Handle business logic          |
| Models      | Interact with MongoDB          |
| Middleware  | Authentication & Authorization |
| Config      | Database connection            |

This separation makes debugging and future development much easier.

---

# Complete Request Lifecycle

```
Frontend

↓

Fetch API

↓

Express Route

↓

Middleware (JWT)

↓

Controller

↓

Model

↓

MongoDB

↓

Response

↓

Frontend
```

Every API in ProLancer follows this same flow.

---

# Example : User Login

```
Login Form

↓

POST /api/users/login

↓

userRoutes.js

↓

userController.js

↓

User Model

↓

MongoDB

↓

Compare Password

↓

Generate JWT

↓

Return Response
```

---

# Example : Seller Profile

```
Seller Form

↓

POST /api/seller/profile

↓

sellerRoutes.js

↓

verifyToken()

↓

sellerController.js

↓

SellerProfile Model

↓

MongoDB
```

---

# Role of Each Layer

### Routes

Routes define **which controller should execute** for a specific API.

Example:

```
POST /api/users/login
```

↓

Calls

```
loginUser()
```

---

### Controllers

Controllers contain the application's business logic.

Examples:

- Register User
- Login User
- Create Seller Profile
- Create Client Profile

Controllers should never directly receive browser requests. They are called through routes.

---

### Models

Models define the database structure.

Example Collections:

```
Users

SellerProfiles

ClientProfiles

Gigs
```

Models communicate directly with MongoDB using Mongoose.

---

### Middleware

Middleware executes **before** the controller.

Current middleware:

```
verifyToken()
```

Responsibilities:

- Read JWT
- Verify JWT
- Extract User ID
- Allow or Reject Request

---

### Database

MongoDB stores all application data.

Current Collections:

```
Users

SellerProfiles

ClientProfiles
```

Future:

```
Gigs

Orders

Reviews
```

---

# Benefits of this Architecture

✔ Easy to Maintain

✔ Reusable Code

✔ Better Folder Organization

✔ Easier Debugging

✔ Industry Standard

✔ Easy to Add New Features

---

# Learning

✔ MVC Architecture

✔ Request Lifecycle

✔ Routes

✔ Controllers

✔ Models

✔ Middleware

✔ MongoDB Integration


# Step 7 : Database Design

## 🎯 Objective

Design a database that supports different user roles while keeping the data organized and scalable.

---

## Database Collections

Currently, the project uses the following collections:

```
Users

SellerProfiles

ClientProfiles
```

Future collections:

```
Gigs

Orders

Reviews
```

---

## Why Separate Collections?

Instead of storing everything in one collection,

❌ Bad Design

```
Users

Name
Email
Password
Role
Skills
Bio
Portfolio
Company
Industry
Orders
Gigs
```

Most fields would remain empty depending on the user's role.

Instead, we separated the data based on responsibility.

---

## Current Database Design

```
Users
│
├── _id
├── name
├── email
├── password
└── role
```

↓

```
SellerProfiles
│
├── userId
├── fullName
├── profession
├── country
├── experience
├── skills
├── portfolio
├── linkedin
└── bio
```

↓

```
ClientProfiles
│
├── userId
├── fullName
├── company
├── industry
├── country
└── about
```

---

## Relationship

```
User
 │
 │ 1
 │
 ▼
Seller Profile
```

OR

```
User
 │
 │ 1
 │
 ▼
Client Profile
```

Each user has only one profile based on their role.

---

## Why Store userId?

The profile collection stores the corresponding user's ID.

Example:

```
Users

_id = 68452ab...
```

↓

```
SellerProfile

userId = 68452ab...
```

This links both collections together.

---

## Data Flow

```
Registration

↓

User Collection

↓

Create Profile

↓

SellerProfile / ClientProfile

↓

Dashboard
```

---

## Sample User Document

```json
{
    "name": "Yash",
    "email": "yash@gmail.com",
    "password": "$2b$10$...",
    "role": "seller"
}
```

---

## Sample Seller Profile

```json
{
    "userId": "68452ab...",
    "fullName": "Yash",
    "profession": "Full Stack Developer",
    "country": "India",
    "skills": "HTML, CSS, JavaScript",
    "bio": "Passionate MERN Developer"
}
```

---

## Learning

✔ MongoDB Collections

✔ Document Structure

✔ One-to-One Relationship

✔ Data Separation

✔ Database Normalization (Basic)


# Step 8 : REST API Documentation

## 🎯 Objective

Expose backend functionality through REST APIs so that the frontend can communicate with the database.

---

# API Flow

```
Frontend

↓

Fetch API

↓

Express Route

↓

Controller

↓

MongoDB

↓

JSON Response

↓

Frontend
```

All APIs return responses in **JSON** format.

---

# Base URL

```
http://localhost:5000/api
```

---

# 1. Register User

### Endpoint

```
POST /users/register
```

### Purpose

Creates a new Seller or Client account.

---

### Request Body

```json
{
    "name": "Yash",
    "email": "yash@gmail.com",
    "password": "123456",
    "role": "seller"
}
```

---

### Backend Process

```
Receive Data

↓

Validate Fields

↓

Check Existing Email

↓

Hash Password

↓

Save User

↓

Generate JWT

↓

Return Response
```

---

### Success Response

```json
{
    "success": true,
    "message": "Registration Successful",
    "token": "...",
    "userId": "...",
    "userName": "Yash",
    "role": "seller"
}
```

---

# 2. Login User

### Endpoint

```
POST /users/login
```

---

### Request Body

```json
{
    "email": "yash@gmail.com",
    "password": "123456"
}
```

---

### Backend Process

```
Receive Data

↓

Find User

↓

Compare Password

↓

Generate JWT

↓

Return Response
```

---

### Success Response

```json
{
    "success": true,
    "token": "...",
    "user": {
        "id": "...",
        "name": "Yash",
        "email": "yash@gmail.com",
        "role": "seller"
    }
}
```

---

# 3. Create Seller Profile

### Endpoint

```
POST /seller/profile
```

---

### Authentication

```
Required ✅
```

Authorization Header

```
Bearer <JWT Token>
```

---

### Request Body

```json
{
    "fullName": "Yash",
    "profession": "Full Stack Developer",
    "country": "India",
    "experience": "Fresher",
    "skills": "HTML, CSS, JavaScript",
    "portfolio": "...",
    "linkedin": "...",
    "bio": "Passionate Developer"
}
```

---

### Backend Process

```
Receive Request

↓

Verify JWT

↓

Extract userId

↓

Validate Data

↓

Save Seller Profile

↓

Return Success
```

---

### Success Response

```json
{
    "success": true,
    "message": "Profile Created Successfully"
}
```

---

# 4. Create Client Profile

### Endpoint

```
POST /client/profile
```

---

### Authentication

```
Required ✅
```

---

### Backend Process

```
Receive Request

↓

Verify JWT

↓

Extract userId

↓

Save Client Profile

↓

Return Success
```

---

# HTTP Methods Used

| Method | Purpose                 |
| ------ | ----------------------- |
| GET    | Retrieve Data           |
| POST   | Create Data             |
| PUT    | Update Data*(Future)* |
| DELETE | Delete Data*(Future)* |

---

# Response Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| 200         | Request Successful    |
| 201         | Resource Created      |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 404         | Resource Not Found    |
| 500         | Internal Server Error |

---

# API Testing

All APIs were tested using:

- Browser Fetch API
- Chrome Developer Tools
- MongoDB Compass (to verify database entries)

Future testing can also be performed using:

- Postman
- Thunder Client (VS Code Extension)

---

# Learning

✔ REST APIs

✔ HTTP Methods

✔ JSON Request & Response

✔ Status Codes

✔ Authorization Header

✔ API Testing
