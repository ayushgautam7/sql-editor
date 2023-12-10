# SQL Editor

<img width="1462" alt="Screenshot 2023-12-10 at 11 42 41 PM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/1cecb140-5b3c-4ddd-b3d7-1a2ba11a04d3">

The SQL Editor project is a responsive web application built on ReactJS, facilitating the execution and visualization of SQL queries. The application is structured into four key components:

**Navigation Bar:** Provides easy access to the application through its logo and "SQL Editor" label.

**Table Space:** Features three predefined tables—Customers, Sales, and Students—for reference when crafting SQL queries.

**Editor Space:** Offers a platform for users to input SQL commands. It includes three preloaded queries linked to the respective tables for quick execution, alongside the option for users to run custom SQL queries.

**Output Space:** Displays the results of executed queries, providing users with a clear and visual representation of the query outputs.

The project delivers a user-friendly interface that streamlines the process of writing, executing, and visualizing SQL queries, enhancing the overall user experience in managing and analyzing database information.

**NOTE:** This application is a simulation, lacking syntax validation, and the displayed output doesn't necessarily reflect accurate results. 

# Live URL
The application is hosted on Vercel. Please find the link to it below.

https://sql-editor-iota.vercel.app/

# Features
**Conditional RUN Button:** Activates only when a query is entered in the editor.
<img width="683" alt="Screenshot 2023-12-11 at 1 05 36 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/5394febc-805f-4278-91f9-68aea5b071bb">

**Different components:** Separate spaces for tables, editor, navigation bar and output.

**Full Responsiveness:** Adapts seamlessly to all devices.

**Predefined Queries:** Allows easy toggling between preset queries.
<img width="685" alt="Screenshot 2023-12-11 at 1 05 47 AM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/0a861151-f996-4541-91a7-8099c6659476">

**Custom Query Input:** Enables users to write their queries.

**Predefined Tables:** Includes a set of predefined tables.

**Hover Effects:** Tables change color when hovered over for better interaction.

# Idea

The inspiration for creating this SQL editor stemmed from my preparation for placements. During that time, I encountered various online code editors and compilers that had predefined values. The need to run queries based on those values sparked the idea to design this SQL editor frontend task.

# Predefine queries
SELECT * from customers;

SELECT * from sales;

SELECT * from students;

# Tech stack
**ReactJS**

**Tailwind CSS**

# Page load time
I used Lighthouse Chrome DevTools to check application performace.

<img width="1010" alt="Screenshot 2023-12-10 at 11 39 09 PM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/aac16256-f429-40fa-80fa-5e4f5b13401f">
<img width="1012" alt="Screenshot 2023-12-10 at 11 39 38 PM" src="https://github.com/ayushgautam7/sql-editor/assets/81512036/2781db23-6ec8-4d2d-aee7-6f7f5bdcd6f8">


