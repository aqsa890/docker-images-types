# 🐳 Docker Image Types Lab (Node.js)

A hands-on DevOps learning project to understand and compare different Docker image strategies using a simple Node.js + Express application.

This project demonstrates how different Docker approaches affect:
- Image size
- Security
- Performance
- Production readiness

---

## 🚀 Features

- 🧱 Single-stage Docker image
- 🏗️ Multi-stage Docker image
- 🔵 Slim base image (Node Debian Slim)
- 🔐 Hardened image (Distroless)
- 👤 Non-root user security practice
- 📊 Docker image size comparison
- 🔍 Docker Scout security scanning support

---

## 🧠 Learning Objectives

By using this project, you will learn:

- How Docker images are built internally
- Why multi-stage builds are important
- Why distroless images improve security
- How to run containers with non-root users
- How to reduce Docker image size
- How to analyze vulnerabilities using Docker Scout

---

## 📁 Project Structure

```
docker-images-types/
│
├── app.js
├── package.json
│
├── Dockerfile.single
├── Dockerfile.multi
├── Dockerfile.slim
├── Dockerfile.hardened
│
└── README.md
```

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Docker
- Docker Scout (Security Analysis)

---

## ▶️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/aqsa890/docker-images-types.git
cd docker-images-types
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start application

```bash
npm start
```

App runs at: [http://localhost:3000](http://localhost:3000)

---

## 🐳 Build & Run with Docker

Compare Single-stage, Multi-stage, Slim, and Hardened (Distroless) image strategies.

### 🧱 Single-stage Image

```bash
docker build -f Dockerfile.single -t node-single .
docker run -p 3000:3000 node-single
```

### 🏗️ Multi-stage Image

```bash
docker build -f Dockerfile.multi -t node-multi .
docker run -p 3000:3000 node-multi
```

### 🔵 Slim Image

```bash
docker build -f Dockerfile.slim -t node-slim .
docker run -p 3000:3000 node-slim
```

### 🔐 Hardened (Distroless) Image

```bash
docker build -f Dockerfile.hardened -t node-hardened .
docker run -p 3000:3000 node-hardened
```

---

## 📊 Compare Image Sizes

```bash
docker images | grep node
```

### Expected Comparison

| Image Type              | Size    |
|--------------------------|---------|
| Single-stage             | Large   |
| Multi-stage              | Medium  |
| Slim                     | Small   |
| Hardened (Distroless)    | Smallest|

---

## 🔍 Security Scanning (Docker Scout)

### Quick Overview

```bash
docker scout quickview local://node-hardened:latest
```

### Check Vulnerabilities

```bash
docker scout cves local://node-hardened:latest
```

---

## 🔐 Security Concepts Covered

- Non-root container execution
- Minimal attack surface
- Distroless runtime usage
- Removal of build tools in production images
- Secure container design principles

---

## 🧠 Key Takeaways

- **Single-stage** → simple but heavy ❌
- **Multi-stage** → optimized builds ⚙️
- **Slim** → balanced production image ⚡
- **Distroless** → maximum security 🔐
- **Non-root** → mandatory for production security 👤

---

## 🏆 Best Practice (Industry Standard)

> **Multi-stage + Slim/Distroless + Non-root user = Production-ready Docker image**

---

## 👨‍💻 Author

**Aqsas**
DevOps & Backend Developer
Passionate about Docker, Kubernetes, and scalable systems

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it with others learning Docker!
