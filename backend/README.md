# Inventory Management System - Backend

This is the backend part of the Inventory Management System project, built using Node.js and Express. The backend provides APIs for managing users, items, purchases, and reports, along with role-based access control.

## Features

- **User Management**: Create, read, update, and delete users with role assignments.
- **Item Management**: Manage inventory items, including adding, editing, and deleting items.
- **Purchase Management**: Handle purchase orders, including creation and tracking.
- **Reporting Module**: Generate various reports based on inventory and sales data.
- **Role-Based Access Control**: Secure routes and functionalities based on user roles.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (or any other database you choose to use)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd inventory-management-system/backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the backend directory and configure your environment variables, such as database connection strings.

### Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:5000` (or the port specified in your configuration).

### API Documentation

Refer to the individual controller files for details on the available endpoints and their usage.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.