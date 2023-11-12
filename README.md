# Kanban Board Application

## Introduction

In this project, I've crafted a robust Kanban board application utilizing cutting-edge technologies such as TypeScript, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. 

## Technologies

- TypeScript
- Next.js
- Node.js
- Express.js
- MongoDB
- Tailwind CSS

## Functionalities

Your Kanban board application should include the following functionalities:

1. **Home Page**: Display a list of Kanban boards on the home page.

2. **Kanban Board CRUD**: Implement Create, Read, Update, and Delete operations for Kanban boards.

3. **Kanban Board Properties**: Each Kanban board should have a name and description.

4. **Kanban Columns**: Each Kanban board should have a minimum of 3 columns: "To Do," "In Progress," and "Completed."

5. **Kanban Item Properties**: Each item within the board should have a name, description, and an optional due date.

6. **Column CRUD**: Implement Create, Read, Update, and Delete operations for Kanban board columns.

7. **Item CRUD**: Implement Create, Read, Update, and Delete operations for Kanban board items.

8. **Drag and Drop**: Make Kanban board items draggable and droppable within columns.

9. **Database Integration**: Save the Kanban board and its data in a MongoDB database.

## Packages Used

- `@radix-ui/react-dialog`: ^1.0.5
- `@types/react-beautiful-dnd`: ^13.1.7
- `axios`: ^1.6.1
- `next`: 14.0.2
- `react`: ^18
- `react-beautiful-dnd`: ^13.1.1
- `react-dom`: ^18
- `react-hook-form`: ^7.48.2
- `react-hot-toast`: ^2.4.1
- `react-icons`: ^4.11.0
- `react-spinners`: ^0.13.8
- `tailwind-merge`: ^2.0.0
- `tailwind-scrollbar`: ^3.0.5
- `zustand`: ^4.4.6

## Server Packages Used

- `bcrypt`: ^5.1.1
- `cors`: ^2.8.5
- `dotenv`: ^16.3.1
- `express`: ^4.18.2
- `helmet`: ^7.1.0
- `jsonwebtoken`: ^9.0.2
- `mongoose`: ^8.0.0
- `morgan`: ^1.10.0

## Clone the Repository

To clone the Kanban App repository to your local machine, follow these steps:

1. Open a terminal window.

2. Choose or create a directory where you want to clone the repository.

3. Run the following command to clone the repository:

    ```bash
    git clone https://github.com/khuranamanan/kanban-app.git
    ```

## Project Structure

The repository is divided into two folders:

- **client**: Frontend code.
- **server**: Backend code.

## Running Locally

### Client

1. Create a `.env.local` file in the `client` folder with the following content:

   ```plaintext
   NEXT_PUBLIC_BACKEND_BASE_URL=http://localhost:5000/api/v1
   ```
#### Run the client:

```bash

cd client
npm install
npm run dev
```

### Server
Create a `.env` file in the server folder with the following content:

```plaintext
JWT_SECRET_KEY=your_jwt_secret_key
MONGODB_URI=your_mongodb_uri
```

Run the server:

```bash
cd server
npm install
npm start
```

