<h2>📚Learner Dashboard</h2>
An oppia styled mobile‑friendly learner dashboard that empowers users to track progress, access courses, and manage learning activities seamlessly across devices. Built with Angular, TypeScript, HTML and CSS, the dashboard is designed for an intuitive, engaging, and responsive learning experience.

<h2>Features</h2>

| Feature            | Description                          | Status |
|---------------------|--------------------------------------|-------|
| 📱 Responsive UI    | Works on mobile, tablet, desktop     | ✅   |
| 🎯 Course Access    | Browse and enroll in courses         | ✅   |
| 🔒 Authentication   | Secure login/signup                  | ✅   |
| 🧩 Quiz Module | Interactive quiz with instant scoring and certificate | 🚧 |
| 🖼️ Certificate Generator | Generates a personalized certificate with learner name and completion date after finishing a quiz | 🚧 |

<h2>🤝Contributing</h2>

- Contributions are welcome!

- Fork the repo

- Create a feature branch (git checkout -b feature-name)

- Commit changes (git commit -m "Add feature")

- Push to branch (git push origin feature-name)

- Open a Pull Request

---

<h2>🖼️ UI Screenshots</h2>
<img src="https://github.com/Tech-Psycho95/OJT_Vanshdeep_Shivam/blob/main/Asset-UI%20interface.jpg"/>
<img src="https://github.com/Tech-Psycho95/OJT_Vanshdeep_Shivam/blob/main/Login_page.jpg"/>

<h2>🚀 Live Demo</h2>

[![My Skills](https://skillicons.dev/icons?i=firebase&theme=light)](https://angular-auth-e6364.web.app/login)

<h2>🧩 Dataflow Diagram</h2>

This diagram illustrates the frontend-only login flow for an Oppia-styled learner dashboard. It shows how data moves from the learner to the dashboard UI through various components and services.

<img src="https://github.com/Tech-Psycho95/OJT_Vanshdeep_Shivam/blob/main/Dataflow_diagram.png"/>

### Dataflow Overview

```
Learner → Login Form View(enters credentials) → Authentication Service(Updates state) → Frontend State Management → Dashboard View Container → Dashboard Router → Dashboard UI
