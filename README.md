# Short Link 🔗
Short Link is a Node.js project that allows users to shorten URLs, redirect to the original URL, and analyze the number of accesses.

## Features

- **Node.js**: Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows you to build scalable network applications using JavaScript.
- **TypeScript**: TypeScript is a superset of JavaScript that adds static types to the language. It enhances JavaScript productivity and maintainability by catching errors early in the development process.
- **Fastify**: Fastify is a web framework for Node.js focused on providing high-performance and low overhead. It's designed to be extremely fast and efficient, making it an excellent choice for building APIs and web applications.
- **Docker**: Docker is a platform for developing, shipping, and running applications using containerization. It allows you to package applications and their dependencies into containers, providing consistency and portability across different environments.
- **PostgreSQL**: PostgreSQL is a powerful, open-source relational database management system (RDBMS). It provides robust features for storing and managing structured data, making it suitable for a wide range of applications.
- **Redis**: Redis is an open-source, in-memory data structure store used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, and more, making it versatile for caching and real-time applications.

### Installation
To install all dependencies, run the following command:
```bash
npm install
```

### Setting Up Docker
Short Link uses PostgreSQL and Redis databases. To set up the Docker images for these databases, run the following command:
```bash
docker compose up -d
```
To confirm if the Docker containers are running, execute:
```bash
docker ps
```

### Database Initialization
To create the PostgreSQL database, execute:
```bash
npm run setup
```