# Condico - Condo Management Web Application

Condico is a modern, responsive web application for managing condos. It allows residents to view available properties, request maintenance, manage payments, and book facilities. 
The homepage features a hero section, services, featured properties, and a contact form. The application includes a backend API connected to a PostgreSQL database.

## Features

- **Frontend (React)**: Homepage, responsive navbar, hero section, services, featured properties, and contact form.
- **Backend (Node.js/Express)**: Authentication, property management, and handling user requests.
- **Database (PostgreSQL)**: Stores users, properties, requests, and payments.
- **API Testing**: Use Postman to test endpoints.
- **Responsive Design**: Works on desktop, tablet, and mobile.

## Tech Stack

- **Frontend:** React, React Router, CSS  
- **Backend:** Node.js, Express  
- **Database:** PostgreSQL  
- **API Testing:** Postman  
- **Version Control:** Git, GitHub

## Installation

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MonikaaMoanes/Condo-Management.git
cd Condo-Management/src

2. Install dependencies:
npm install

3. Create a .env file with your PostgreSQL credentials:
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=condico
JWT_SECRET=your_jwt_secret

4. Start the development server::
npm run dev

5. Open your browser at http://localhost:5173
