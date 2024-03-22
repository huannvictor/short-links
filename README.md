# Short Link 🔗
Short Link is a Node.js project that allows users to shorten URLs, redirect to the original URL, and analyze the number of accesses.

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