📚 Learner Dashboard

A mobile‑friendly learner dashboard that empowers users to track progress, access courses, and manage learning activities seamlessly across devices. Built with Angular, TypeScript, HTML, CSS, and TailwindCSS, the dashboard is designed for an intuitive, engaging, and responsive learning experience.

------

| Feature            | Description                          | Status |
|---------------------|--------------------------------------|--------|
| 📱 Responsive UI    | Works on mobile, tablet, desktop     | ✅     |
| 📊 Progress Tracking| Charts & stats for learners          | 🚧     |
| 🎯 Course Access    | Browse and enroll in courses         | ✅     |
| 🔒 Authentication   | Secure login/signup                  | Planned|

---

| TechStack(we are using) | Purpose |
|-------------------------|---------|
| HTML/CSS                |Semantic structuring & basic layout & styling|
| Tailwind                |Utility‑first CSS framework for rapid responsive design|
| AngularJS               |Frontend framework for building scalable, modular applications|
| Typescript              |Strongly typed language for maintainable and error‑free code|

---

📂 Project Structuring(still to be finalized)

---

🗂️ Explanation of the Data Flow

User (Learner)

Interacts via the Responsive UI (Angular + TailwindCSS).

Can log in, browse courses, track progress, and manage activities.

Frontend (Angular App)

Handles routing, UI rendering, and state management.

Sends requests to backend services via HTTP/REST APIs.

Backend Services

Authentication Service → Validates login/signup, issues tokens.

Course Service → Provides course catalog, enrollment, and content delivery.

Progress Tracking Module → Stores and retrieves learner progress, generates charts.

Activity Management Module → Manages assignments, schedules, and notifications.

Database/API Layer

Stores user profiles, course data, progress records, and activity logs.

APIs ensure secure and structured communication between frontend and backend.

Data Flow

User → Angular UI → Backend Services → Database/API → Response back to User.

---

<div align="center">
<h2>Installation</h2>
</div>

# Clone the repository
git clone https://github.com/your-username/learner-dashboard.git

# Navigate to project folder
cd learner-dashboard

# Install dependencies
npm install

# Run the development server
ng serve



