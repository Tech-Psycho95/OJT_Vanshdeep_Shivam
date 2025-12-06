<h2>📚Learner Dashboard</h2>
An oppia styled mobile‑friendly learner dashboard that empowers users to track progress, access courses, and manage learning activities seamlessly across devices. Built with Angular, TypeScript, HTML and CSS, the dashboard is designed for an intuitive, engaging, and responsive learning experience.

<h2>Features</h2>

| Feature            | Description                          | Status |
|---------------------|--------------------------------------|--------|
| 📱 Responsive UI    | Works on mobile, tablet, desktop     | ✅     |
| 📊 Progress Tracking| Charts & stats for learners          | 🚧     |
| 🎯 Course Access    | Browse and enroll in courses         | ✅     |
| 🔒 Authentication   | Secure login/signup                  | Planned|

<h2>🤝Contributing</h2>

- Contributions are welcome!

- Fork the repo

- Create a feature branch (git checkout -b feature-name)

- Commit changes (git commit -m "Add feature")

- Push to branch (git push origin feature-name)

- Open a Pull Request

---

<h2>🖼️ UI Screenshot</h2>
<img src=""/>

<h2>🧩 Dataflow Diagram</h2>

This diagram illustrates the frontend-only login flow for an Oppia-styled learner dashboard. It shows how data moves from the learner to the dashboard UI through various components and services.

<img src="https://github.com/Tech-Psycho95/OJT_Vanshdeep_Shivam/blob/main/Dataflow_diagram.png"/>

### Dataflow Overview

```
Learner → Login Form View(enters credentials) → Authentication Service(Updates state) → Frontend State Management → Dashboard View Container → Dashboard Router → Dashboard UI
