# Enterprise QuantumML Engine

An enterprise-grade AI/ML platform handling the full machine learning lifecycle—from data ingestion and preprocessing to model training, experiment tracking, model registry, and real-time/batch deployment.

## Architecture

This project is structured as a monolithic repository (monorepo) encompassing multiple microservices:

1. **`frontend/`**: React + TypeScript SPA dashboard.
2. **`core-api/`**: Spring Boot (Java) backend for authentication, project management, and metadata.
3. **`ml-services/`**: FastAPI (Python) backend for data preprocessing, training jobs, AutoML, and predictions.

## Tech Stack

*   **Frontend**: React 18, TypeScript, Tailwind CSS, Redux Toolkit, React Query
*   **Backend (Core)**: Java 21, Spring Boot 3, Spring Security (JWT), PostgreSQL
*   **Backend (ML/AI)**: Python 3.11+, FastAPI, SQLAlchemy, Scikit-learn, PyTorch/TF
*   **Infrastructure**: Docker, Kubernetes, Redis, RabbitMQ
*   **Observability**: Prometheus, Grafana

## Development Workflow

This repository strictly follows a Git-based workflow with semantic versioning and feature branching. Development progresses incrementally through well-defined phases.
