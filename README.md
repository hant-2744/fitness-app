# Fitness Platform

A web application that connects with Garmin Connect via the FIT SDK to collect, analyze, and visualize fitness and health data in real-time. The platform also provides alerts and personalized fitness recommendations, setting the stage for a future integration with AI (ChatGPT) for advanced guidance.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Local Development](#installation--local-development)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Running MongoDB via Docker](#running-mongodb-via-docker)
- [Docker Configuration](#docker-configuration)
  - [Development Environment](#development-environment)
  - [Production Environment](#production-environment)
- [Database Seeding](#database-seeding)
- [CI/CD with CircleCI](#cicd-with-circleci)
- [Deployment on AWS](#deployment-on-aws)
- [Environment Variables & Security](#environment-variables--security)
- [Notes & Additional Information](#notes--additional-information)
- [License](#license)

---

## Overview

The Fitness Platform is designed to:

- Connect automatically to wearable devices (via Garmin Connect and FIT SDK).
- Retrieve and store health data (e.g., activity type, duration, heart rate, steps, etc.) in real-time.
- Present the data visually (charts and tables) on a dashboard.
- Provide a foundation for future AI-driven health recommendations.

This is **Phase 1** of the project focusing on data ingestion, visualization, authentication, and real-time updates via webhooks.

---

## Features

- **User Authentication:**
  - Secure sign-up with strong password requirements.
  - Login, logout, and password reset functionality.
  - Optional SSO integration using Google.

- **Dashboard & Visualization:**
  - Interactive charts (line, bar, pie) to display user activity trends.
  - Detailed activity history presented in searchable, sortable tables.
  - Responsive layout with header, sidebar, breadcrumb, and footer.

- **Data Sync:**
  - Real-time synchronization of fitness data via Garmin Connect webhooks.

- **Extensibility:**
  - A modular architecture using NestJS for backend and NextJS for frontend.
  - Future integration with ChatGPT for personalized health recommendations.

---

## Architecture

The application is divided into three main components:

1. **Backend:**
   - Built with NestJS and Mongoose for handling authentication, API endpoints, webhook data ingestion, and database operations.

2. **Frontend:**
   - Developed using NextJS with Tailwind CSS, providing a modern and responsive user interface for dashboards and activity history.

3. **Database:**
   - MongoDB is used to store user and activity data.

Docker is used to containerize all services. CI/CD is managed via CircleCI, with deployments targeted to AWS (EC2/ECS).

---

## Tech Stack

- **Backend:** NestJS, Mongoose, Passport, JWT, bcrypt (or bcryptjs)
- **Frontend:** NextJS, Tailwind CSS, Chart.js (or equivalent)
- **Database:** MongoDB
- **Containerization:** Docker, Docker Compose
- **CI/CD:** CircleCI
- **Cloud Deployment:** AWS (EC2/ECS)

---

## Project Structure
    fitness-app/
    ├── backend/
    │   ├── src/
    │   │   ├── app.module.ts
    │   │   ├── main.ts
    │   │   ├── modules/
    │   │   │   ├── auth/
    │   │   │   ├── users/
    │   │   │   ├── activities/
    │   │   │   └── webhook/
    │   │   └── seeder.ts
    │   ├── Dockerfile
    │   ├── package.json
    │   └── tsconfig.json
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── app/
    │   │   │   ├── page.tsx
    │   │   │   ├── layout.tsx
    │   │   │   └── global.css
    │   │   ├── components/
    │   │   ├── pages/
    │   │   │   ├── auth/
    │   │   │   │   └── login.tsx
    │   │   │   ├── dashboard.tsx
    │   │   │   └── index.tsx
    │   ├── styles/
    │   ├── Dockerfile
    │   ├── package.json
    │   ├── tailwind.config.js
    │   └── postcss.config.mjs
    ├── .circleci/
    │   └── config.yml
    ├── docker-compose.dev.yml
    ├── docker-compose.prod.yml
    └── README.md

---

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (for local development)
- [npm](https://www.npmjs.com/)

---

## Installation & Local Development

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
2. Install dependencies:
    ```bash
    npm install
3. For development, the backend uses NestJS with hot-reload:
    ```bash
    npm run start:dev

### Frontend Setup


