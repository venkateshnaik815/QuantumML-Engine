# Enterprise QuantumML Engine

An enterprise-grade AI/ML platform handling the full machine learning lifecycle.

## Installation
```bash
git clone https://github.com/venkateshnaik815/QuantumML-Engine.git
cd QuantumML-Engine
npm install --prefix frontend
python -m venv ml-services/venv
```

## Build
```bash
# Build frontend
npm run build --prefix frontend

# Build Java backend
cd core-api && ./mvnw clean package && cd ..
```

## Run
```bash
# Start all services using Docker Compose
docker-compose up --build

# Or run frontend manually
npm run dev --prefix frontend
```

## Dependencies
- Node.js 18+
- Java 21
- Python 3.11+
- PostgreSQL
