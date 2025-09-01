# Library Management System

This is a simple library management system with a backend API built with Node.js, Express, and Sequelize, and a frontend built with HTML, CSS, and JavaScript using Bootstrap.

## Features

- CRUD operations for books.
- Bulk data loading from a CSV file.
- Normalized database schema.

## Technologies Used

- **Backend:** Node.js, Express, Sequelize, PostgreSQL
- **Frontend:** HTML, CSS, JavaScript, Bootstrap

## Setup and Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
    ```
2.  Navigate to the backend directory and install dependencies:
    ```bash
    cd backend
    npm install
    ```
3.  Create a `.env` file in the `backend` directory and add your database configuration.
4.  Start the backend server:
    ```bash
    npm start
    ```
5.  Open the `frontend/index.html` file in your browser.

## Database Normalization

The database was normalized to 3NF to reduce data redundancy and improve data integrity. The following tables were created: `users`, `books`, `platforms`, and `loans`.

## Bulk Data Loading

To load data from the CSV file, run the following command in the `backend` directory:

```bash
node scripts/bulkLoad.js