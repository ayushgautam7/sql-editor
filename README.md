# SQL Editor
**Overview:** The aim of this project is to develop a web-based application that facilitates the execution of SQL queries entered by users and displays the results within the application interface. The application will provide a user-friendly space where individuals can input their SQL queries, submit them for execution, and visualize the query results seamlessly.

# Description

<img width="1448" alt="Screenshot 2023-12-18 at 2 29 00 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/1f374116-922a-40f2-b86e-4820a03b2ceb">


The SQL Editor project is a responsive web application built on ReactJS, facilitating the execution and visualization of SQL queries. The application is structured into following key components:

**Navigation Bar:** Provides easy access to the application through its logo, "SQL Editor" label and about page.

**Table Schemas:** Here, three predefined table schemas Customers, Sales, and Students are available as references for SQL queries.

**Available Queries:** A collection of predefined SQL queries that users can readily select and execute in the editor.

**Editor Space:** This section allows users to write SQL queries with syntax highlighting. It features two buttons: a "Run" button to execute the queries and a "Reset" button for clearing the editor content.

**Output Space:** Displays the results of executed queries, providing users with a clear and visual representation of the query outputs.

The project delivers a user-friendly interface that streamlines the process of writing, executing, and visualizing SQL queries, enhancing the overall user experience in managing and analyzing database information.

**NOTE:** This application is a simulation, lacking syntax validation, and the displayed output doesn't necessarily reflect accurate results. 

# Live URL
The application is hosted on Vercel. Please find the link to it below.

https://sql-editor-iota.vercel.app/

# Features
* **Conditional RUN Button:** Activates only when a query is entered in the editor.
<img width="771" alt="Screenshot 2023-12-18 at 2 34 38 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/52bc6ffa-ba05-4430-b603-e79ed0fe7347">
<img width="769" alt="Screenshot 2023-12-18 at 2 34 23 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/6fbdad0b-6498-4984-993b-071881ced7ac">


* **Separate Sections:** Dedicated spaces for tables, predefined queries, editor, and output, ensuring clear organization.

* **Full Responsiveness:** Ensures seamless usage across various devices.

* **Custom Query Input:** Allows users to write and execute their own SQL queries.

* **Monaco Editor:** Implements syntax highlighting for better query readability.

* **Predefined Query Sets:** Offers a predefined set of queries for easy selection and execution, allowing users to switch between them.

* <img width="683" alt="Screenshot 2023-12-19 at 1 16 00 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/4e27b975-04cb-46e1-a995-5da55c4a21d5">


* **Predefined Tables with Schemas:** Includes preset tables with their respective schemas for reference.

* **Table Popup on Schema Click:** Provides a popup displaying table details upon clicking the schemas.

* <img width="1457" alt="Screenshot 2023-12-19 at 1 12 26 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/a7d5adcd-e7be-4cb1-b933-f3519d29fc21">


* **External Mock API Data Fetching:** Fetches data from an external mock API for testing purposes.

* **Routing Implementation:** Implements routing for smooth navigation within the application.

* **React Toast for Updates:** Utilizes React Toast for displaying updates or notifications.

* <img width="333" alt="Screenshot 2023-12-19 at 1 13 36 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/a6eb4dbf-bb17-419a-86a3-d69c5966d762">


* **Reset Queries Button:** Offers a button to clear the editor area for a fresh start.

* **Hover Effects on Tables:** Tables change color when hovered over, enhancing user interaction.

* **About Page:** Includes a dedicated section providing project details.

# Idea

The inspiration for creating this SQL editor stemmed from my preparation for placements. During that time, I encountered various online code editors and compilers that had predefined values. The need to run queries based on those values sparked the idea to design this SQL editor frontend task.

# Predefine queries

SELECT * FROM students WHERE country = 'USA' AND age > 20;

SELECT customer_id, first_name, last_name FROM customers WHERE age > 22;

SELECT * FROM sales WHERE product_name = 'T-Shirt';

SELECT customer_id, first_name FROM customers WHERE age > 22;

SELECT * FROM sales WHERE product_name = 'Cola' AND quantity > 1;

SELECT * FROM students WHERE major = 'Electrical Engineering';

# Tech stack
**ReactJS**

**Tailwind CSS**

**Monaco Editor**

# Page load time
I used Lighthouse Chrome DevTools to check application performace.

**Destop performance view**

<img width="993" alt="Screenshot 2023-12-19 at 12 01 39 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/1dee36d9-1a37-4806-b64e-9545869d86e8">

<img width="1012" alt="Screenshot 2023-12-19 at 12 02 13 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/ddc025a7-5d1c-40a9-bce5-dfbc48f4ae45">


**Mobile performance view**

<img width="1013" alt="Screenshot 2023-12-19 at 12 03 10 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/15464a78-b14d-4e62-a4e5-233bb8209e6d">

<img width="994" alt="Screenshot 2023-12-19 at 12 03 22 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/b710cc0c-5c9f-49d5-ab30-f973fb2b9b79">


**optimize the page load time**

Used Lighthouse DevTools Extension to find the performance issues and fix them using their actionable suggestion.

Used vercel to deploy this website to leverage its Vercel Edge Network compression that results in the better performance.