# CRUD Application with Node.js, Express, PostgreSQL, and Sequelize

This is a Node.js CRUD application bootstrapped with Express and Sequelize, using PostgreSQL as the database.

## Getting Started

First, run the development server:

```bash
npm start
```

The server will be running on [http://localhost:8800](http://localhost:8800).

## API Routes

You can use tools like **Postman** or **curl** to interact with the API.

### Fetch All Users

```bash
GET api/user
```

Example:

```bash
curl -X GET http://localhost:8800/api/user
```

### Fetch User by empId

```bash
GET api/user/::empId
```

Example:

```bash
curl -X GET http://localhost:8800/api/user/EMP123
```

### Create a New User

```bash
POST /api/user/create
```

Example:

```bash
curl -X POST http://localhost:8800/api/user/create \
  -H 'Content-Type: application/json' \
  -d '{ "name": "John Doe", "email": "john@example.com", "designation": "Developer", "empId": "EMP123" }'
```

### Update User

```bash
PUT /api/user/update/:empId
```

Example:

```bash
curl -X PUT http://localhost:8800/api/user/update/EMP123 \
  -H 'Content-Type: application/json' \
  -d '{ "name": "Jane Doe", "designation": "Senior Developer" }'
```

### Delete User

```bash
DELETE /delete/:empId
```

Example:

```bash
curl -X DELETE http://localhost:8800/api/user/delete/EMP123
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```env
PORT=8800
```

## Learn More

To learn more about the technologies used:

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
