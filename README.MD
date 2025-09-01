# Library Management System

## 1. System Description

This project is a solution developed for the **"Biblioteca Central de Colombia"** to address the challenges of managing their bibliographic and loan information. The system transitions their data from unstructured `.xlsx` files to a robust and normalized SQL database.

It features a backend API built with Node.js and Express that handles all business logic, and a simple frontend interface for data interaction. The core functionalities include CRUD (Create, Read, Update, Delete) operations for books, users, and loans, a bulk data loading mechanism from a CSV file, and specific advanced queries to meet the client's reporting needs.

---

## 2. Technologies Used

- **Backend:** Node.js, Express.js, Sequelize (ORM), PostgreSQL
- **Frontend:** HTML, CSS, JavaScript, Bootstrap 5
- **Deployment:** Render.com
- **API Testing:** Postman

---

## 3. Database Normalization

The initial data was provided in a single denormalized spreadsheet, leading to data redundancy and potential inconsistencies. To solve this, the database was normalized up to the Third Normal Form (3NF).

- **1NF:** The table was already atomic, with no repeating groups.
- **2NF:** Partial dependencies were removed by splitting the data into multiple entities. For example, User and Book details were separated from the Loan information.
- **3NF:** Transitive dependencies were eliminated. All non-key attributes now depend directly and solely on the primary key of their respective tables.

This process resulted in the following entities:

- **Users:** Stores unique information about each library user.
- **Books:** Contains details for each book in the catalog.
- **Platforms:** Lists the platforms used to make a reservation (e.g., App, Web).
- **Loans:** Acts as the central table, linking users, books, and platforms to record each loan transaction.

---

## 4. Relational Model

*(Here you should insert a screenshot of your relational model diagram)*



---

## 5. Project Setup and Execution

Follow these steps to run the project on your local machine.

### Prerequisites

- Git
- Node.js (v18 or higher)
- npm
- PostgreSQL

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
    cd your-repo
    ```

2.  **Setup the Backend:**
    Navigate to the backend directory and install the required dependencies.
    ```bash
    cd backend
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the `backend` directory and fill it with your PostgreSQL credentials.
    ```env
    DB_HOST=localhost
    DB_USER=postgres
    DB_PASSWORD=your_password
    DB_DATABASE=library
    DB_PORT=5432
    PORT=3000
    ```

4.  **Create the Database:**
    Make sure you have created a database in PostgreSQL with the name specified in your `.env` file (e.g., `library`).

5.  **Run the Backend Server:**
    ```bash
    npm start
    ```
    The server will be running on `http://localhost:3000`.

6.  **Use the Frontend:**
    Navigate to the `frontend` folder and open the `index.html` file in your browser.

---

## 6. Bulk Data Loading from CSV

The system includes a script to perform a one-time bulk load of data from the provided CSV file into the normalized database tables.

### Instructions

1.  Place the `data-2.xlsx - Hoja1.csv` file in the **root directory** of the project.
2.  From the `backend` folder, run the following command:
    ```bash
    node scripts/bulkLoad.js
    ```
3.  The script will read the CSV, populate the `Users`, `Books`, `Platforms`, and `Loans` tables, and print a confirmation message upon completion.

---

## 7. Advanced Queries Explained

The API provides three advanced endpoints to address specific business needs.

1.  **Get Active Loans (`GET /api/queries/active-loans`)**
    - **Purpose:** As an administrator, I need to see all loans that are currently active (status "Pendiente").
    - **Details:** This endpoint returns a list of all loans with a "Pendiente" status, including the user's name, the book's title, and the date the loan was made.

2.  **Get Users with Pending Fines (`GET /api/queries/pending-fines`)**
    - **Purpose:** As a financial administrator, I need a report of all users who have outstanding fines.
    - **Details:** This endpoint returns a list of users and the total amount of their pending fines, calculated as the sum of `late_fee` minus `paid_fee` for all their loans.

3.  **Get Books by a Specific Author (`GET /api/queries/books-by-author/:author`)**
    - **Purpose:** As a catalog administrator, I need to find all books written by a specific author.
    - **Details:** This endpoint allows searching for books by an author's name. It returns a list of matching books, including their title and publication year.

---

## 8. Postman Collection

A Postman collection named `library.postman_collection.json` is included in the root of this repository. It contains pre-configured requests for all CRUD endpoints and the three advanced queries, allowing for easy API testing.

---

## 9. Developer

- **Name:** [Your Full Name]
- **Clan:** [Your Clan Name]
- **Email:** [Your Email]
