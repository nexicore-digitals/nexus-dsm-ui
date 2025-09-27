# 🚀 Nexus DSM UI – Desktop Client

[![Nexicore](https://img.shields.io/badge/Org-Nexicore%20Digitals-gold?style=flat&logo=github&logoColor=white)](https://github.com/nexicore-digitals) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) ![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Cross-Platform](https://img.shields.io/badge/platform-win%20%7C%20mac%20%7C%20linux-lightgrey) ![Nexi Inside](https://img.shields.io/badge/Nexi-AI-blue)  

> A **modern cross-platform desktop app** for managing datasets with [**Nexus DSM Toolkit**](https://github.com/nexicore-digitals/nexus-dsm-toolkit).  
> Built with **Wails (Go + WebView)** for the shell, and **React + TypeScript** for the UI.

---

## 🌐 Part of the Nexicore Ecosystem

This project belongs to [**Nexicore Digitals**](https://github.com/nexicore-digitals) — modular developer tools for clarity, control, and confidence.

- 🧩 **Backend Core** → [`nexus-dsm-toolkit`](https://github.com/nexicore-digitals/nexus-dsm-toolkit)  
- 💻 **Frontend UI** → `nexus-dsm-ui` (this repo)  
- 🤖 **Nexi Agent** → AI assistant for validation & automation (planned)  

---

## ✨ Features

- 📂 Import CSV/JSON datasets with drag-and-drop  
- ✅ Validate schema with explainable feedback (powered by toolkit)  
- 🔁 Convert between CSV ↔ JSON seamlessly  
- 🧾 Dual modes:  
  - **General Mode** → quick workflows  
  - **Dev Mode** → transparent validation reports  
- ⚡ Lightweight: native shell with web frontend (no Electron bloat)  
- 🔮 Future: AI assistant (**Nexi**) for guided validation  

---

## ⚡ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=go,ts,react,tailwind,html,css,githubactions" />
</p>

| Layer            | Technology                | Role                                  |
|------------------|---------------------------|---------------------------------------|
| **Desktop Shell** | Wails (Go) 🐹             | Provides native desktop wrapper        |
| **Frontend**     | React + TypeScript ⚛️     | User interface + validation dashboard |
| **Styling**      | Tailwind CSS 🎨           | Modern and responsive UI              |
| **Data Logic**   | Nexus DSM Toolkit 📦      | Parsing, validation, conversion       |
| **Automation**   | GitHub Actions ⚙️         | CI/CD builds                          |

---

## 🛠️ Installation & Setup

### Prerequisites

- **Go**: >= 1.21 ([Install Go](https://go.dev/dl/))  
- **Node.js**: >= 18 ([Install Node](https://nodejs.org))  
- **Wails CLI**:  

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
````

---

### Development Setup

```bash
# Clone repository
git clone https://github.com/nexicore-digitals/nexus-dsm-ui.git
cd nexus-dsm-ui

# Install frontend dependencies
npm install

# Run dev mode (Go backend + React frontend with hot reload)
wails dev
```

---

### Build Production App

```bash
wails build
```

Output binaries/installers will appear in `build/bin/`.

---

## 📂 Project Structure

```text
nexus-dsm-ui/
├── frontend/              # React + TypeScript + Tailwind UI
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── views/         # Pages (Dashboard, Schema, Settings)
│   │   └── main.tsx       # App entry
│   └── index.html
├── build/                 # Compiled frontend + app binaries
├── go.mod                 # Go dependencies
├── main.go                # Wails entrypoint (Go shell)
├── wails.json             # Wails config
└── README.md
```

---

## 🔌 UI ↔ Toolkit Integration

The UI imports functions directly from **`nexus-dsm-toolkit`** (TypeScript).

Example usage in frontend:

```ts
import { parseCSV, convertToJSON } from "nexus-dsm-toolkit";

async function handleFile(file: File) {
  const parsed = await parseCSV(await file.text());
  const json = convertToJSON(parsed);
  console.log("Converted JSON:", json);
}
```

---

## 📝 Roadmap

* [ ] File drag-and-drop support
* [ ] Integrated validation dashboard
* [ ] General vs Dev modes
* [ ] Nexi AI assistant integration
* [ ] Cross-platform packaging & auto-updates

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE).

---

## 🙏 Acknowledgments

* [Wails](https://wails.io/) – Native desktop framework
* [React](https://react.dev/) – Frontend library
* [Nexus DSM Toolkit](https://github.com/nexicore-digitals/nexus-dsm-toolkit) – Core data logic
* [Nexicore Digitals](https://github.com/nexicore-digitals) – Parent org

---

🔥 *Nexus DSM UI is proudly part of the Nexicore Digitals ecosystem — modular tools for clarity, control, and confidence.*
