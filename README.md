# 🚀 Nexus DSM UI

[![Nexicore](https://img.shields.io/badge/Org-Nexicore%20Digitals-gold?style=flat&logo=github&logoColor=white)](https://github.com/nexicore-digitals)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/nexicore-digitals/nexus-dsm-ui/actions)
[![Platform](https://img.shields.io/badge/platform-web-lightgrey)](https://github.com/nexicore-digitals/nexus-dsm-ui)
![Husky](https://img.shields.io/badge/commit--hooks-husky-blueviolet)
![Lint Staged](https://img.shields.io/badge/formatting-lint--staged-green)
![Nexi Inside](https://img.shields.io/badge/Nexi-AI-blue)

> A **modern web app** for managing datasets with the [**Nexus DSM Toolkit**](https://github.com/nexicore-digitals/nexus-dsm-toolkit).  
> Built with **SvelteKit** and **Tailwind CSS**.
> An open-source, web-accessible data editor and toolkit designed for flexibility and extensibility. Inspired by the VS Code interface, it provides a clutter-free, developer-focused environment for data set management (DSM).

---

## 🌐 Part of the Nexicore Ecosystem

This project belongs to [**Nexicore Digitals**](https://github.com/nexicore-digitals) — modular developer tools for clarity, control, and confidence.

- 🧩 **Core Logic** → A future home for the core data processing logic.
- 💻 **Frontend UI** → `nexus-dsm-ui` (this repo)
- 🤖 **Nexi Agent** → AI assistant for validation & automation (planned)

---

## ✨ Features

- **Extensible Plugin Architecture**: Customize and extend the editor with a powerful plugin system.
- **Multiple Data Views**: Switch between a Table View and a Text Editor View.
- **VS Code Inspired UI**: Familiar and intuitive layout with an Activity Bar, Sidebar, and a validation output terminal.
- **Rich Data Support**: Natively handle CSV, JSON, and TSV, with support for custom parsers.
- **Schema-Aware**: Features schema validation, semantic data validation, and intelligent error highlighting.
- **Data Operations**: Perform data indexing, metadata management, and transformations.

---

## ⚡ Tech Stack

<p align="center">
  <img alt="Tech Stack Icons" src="https://skillicons.dev/icons?i=svelte,ts,tailwind,vite,pnpm,nodejs,githubactions" />
</p>

| Layer               | Technology          | Role                                       |
| ------------------- | ------------------- | ------------------------------------------ |
| **Framework**       | SvelteKit 🧡        | The web app framework                      |
| **Frontend**        | Svelte + TypeScript | User interface + validation dashboard      |
| **Styling**         | Tailwind CSS 🎨     | Modern and responsive UI                   |
| **Build Tool**      | Vite ⚡             | Next-generation frontend tooling           |
| **Package Manager** | pnpm 📦             | Fast, disk space-efficient package manager |
| **Automation**      | GitHub Actions ⚙️   | CI/CD builds                               |

---

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js**: `^22` (Install Node)
- **pnpm**: `npm install -g pnpm`

---

### Development Setup

```bash
# 1. Clone repository
git clone https://github.com/nexicore-digitals/nexus-dsm-ui.git
cd nexus-dsm-ui

# 2. Install dependencies
pnpm install

# 3. Run the development server
pnpm dev -- --open
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
src/
├── lib/                # App components, stores, and utilities
│   ├── components/
│   └── ...
├── routes/             # SvelteKit pages and API endpoints
└── app.html            # Main HTML shell
static/                # Static assets (images, fonts)
svelte.config.js      # SvelteKit configuration
vite.config.ts         # Vite configuration
package.json

```

---

## 🔌 UI ↔ Toolkit Integration

The UI imports functions directly from **`nexus-dsm-toolkit`** (TypeScript).

Example usage in frontend:

```ts
import { parseCSV, convertToJSON } from 'nexus-dsm-toolkit';

async function handleFile(file: File) {
 const parsed = await parseCSV(await file.text());
 const json = convertToJSON(parsed);
 console.log('Converted JSON:', json);
}
```

---

## 📝 Roadmap

- [ ] File drag-and-drop support
- [ ] Integrated validation dashboard
- [ ] General vs Dev modes
- [ ] Nexi AI assistant integration
- [ ] Cross-platform packaging & auto-updates

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE).

---

## 🙏 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/) – Web app framework
- [Tailwind CSS](https://tailwindcss.com/) – Styling framework
- [Vite](https://vitejs.dev/) – Build tool
- [Nexus DSM Toolkit](https://github.com/nexicore-digitals/nexus-dsm-toolkit) – Core data logic
- [Nexicore Digitals](https://github.com/nexicore-digitals) – Parent org

---

🔥 _Nexus DSM UI is proudly part of the Nexicore Digitals ecosystem — modular tools for clarity, control, and confidence._
