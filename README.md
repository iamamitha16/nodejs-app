# 🚀 Node.js CI/CD Pipeline with GitHub Actions & Docker

## Elevate Labs – DevOps Internship | Task 1

### 📌 Project Overview

This project demonstrates a complete basic CI/CD pipeline for a Node.js application using GitHub Actions and Docker.

The application is automatically tested, containerized into a Docker image, and pushed to Docker Hub whenever code is pushed to the `main` branch.

### 🔄 CI/CD Workflow

```text
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Checkout Code
    │
    ├── Setup Node.js 20
    │
    ├── Install Dependencies
    │
    ├── Run Jest Tests
    │
    ├── Login to Docker Hub
    │
    ├── Build Docker Image
    │
    └── Push Image to Docker Hub
                    │
                    ▼
          Docker Hub Repository


🎯 OBJECTIVE:
The objective of this task is to automate the process of testing, building, and deploying a Node.js application using a CI/CD pipeline.
The implementation follows:
Test → Build → Push

🛠️ TECHNOLOGIES USED:
#Node.js:Application runtime
#npm:Dependency management
#Jest:Automated testing
#Git:Version control
#GitHub:Source code repository
#GitHub Actions:CI/CD automation
#Docker:Application containerization
#Docker Hub:Docker image repository


📁 PROJECT STRUCTURE:
nodejs-app/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── app.js
├── app.test.js
├── Dockerfile
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

1️⃣ Node.js Application:
A sample Node.js application was created for the internship task.
The application displays:
Welcome to Automate Code Deployment Using CI/CD Pipeline

This Node.js application will be automated using GitHub Actions and Docker.

Task: Elevate Labs DevOps Internship - Task 1

The application was first tested locally and then containerized using Docker.

2️⃣ Automated Testing:
Jest was used to test the Node.js application.
The test was executed using:
npm test

Test Result
PASS ./app.test.js

Test Suites: 1 passed
Tests:       1 passed

3️⃣ Docker Containerization:
A Dockerfile was created to containerize the Node.js application.
The Docker image was built using:
docker build -t nodejs-app:latest .

The container was started using:
docker run -d -p 3000:3000 --name nodejs-app-container nodejs-app

The application was successfully verified in the browser:
http://localhost:3000

4️⃣ Docker Hub Deployment:
The Docker image was tagged for Docker Hub:
docker tag nodejs-app:latest amithasri16/nodejs-app:latest

The image was pushed using:
docker push amithasri16/nodejs-app:latest

Docker Hub Repository
amithasri16/nodejs-app

The latest image was successfully uploaded to Docker Hub.
5️⃣ GitHub Repository:
The project was maintained using Git and pushed to GitHub.
Repository
https://github.com/iamamitha16/nodejs-app

The main branch is used for the CI/CD pipeline.

6️⃣ GitHub Actions:
The CI/CD workflow is located at:
.github/workflows/ci-cd.yml

The workflow is triggered whenever code is pushed to:
main

#PIPELINE STEPS:
1. Checkout source code
2. Setup Node.js 20
3. Install dependencies using npm ci
4. Run tests using npm test
5. Login to Docker Hub
6. Build Docker image
7. Push Docker image to Docker Hub

7️⃣ GitHub Secrets:
Docker Hub authentication was configured using GitHub repository secrets.
The following secrets were created:
DOCKER_USERNAME
DOCKER_PASSWORD

The Docker Hub Personal Access Token was stored securely as DOCKER_PASSWORD.
The token was not hard-coded in the workflow.

8️⃣ Successful Pipeline Execution:
The GitHub Actions pipeline was executed successfully after pushing the workflow to the main branch.
Result
Workflow: Node.js CI/CD Pipeline
Job: build-test-docker
Branch: main
Status: SUCCESS

#The pipeline successfully completed:
✓ Checkout source code
✓ Setup Node.js
✓ Install dependencies
✓ Run Jest tests
✓ Login to Docker Hub
✓ Build Docker image
✓ Push Docker image

The Docker Hub repository was then verified and the latest image was available.
📸 Implementation Evidence
The following screenshots were captured during the implementation:
- Node.js application running locally
- Jest test passing
- Docker container running
- GitHub repository
- GitHub Actions successful workflow
- Docker Hub repository with latest image
🏆 Final Result
The complete CI/CD automation was successfully implemented.
A developer push to the main branch automatically triggers GitHub Actions, which:
Tests the application → Builds the Docker image → Pushes the image to Docker Hub
This demonstrates the basic CI/CD automation process using GitHub Actions and Docker.
📚 Conclusion
This project provided practical experience in integrating Node.js, GitHub, GitHub Actions, Docker, and Docker Hub into a single automated CI/CD workflow.
The implementation successfully demonstrates how repetitive testing and Docker deployment tasks can be automated using GitHub Action
