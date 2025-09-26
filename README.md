# 🚀 Nexus DSM User Interface

> A modern, secure, and cross-platform desktop user interface for managing Nexus-DSM services. Built using Rust (Tauri) for native performance and a fast web frontend.

[![GitHub Profile](https://img.shields.io/badge/Owen-Developer-195?style=flat&logo=github&logoColor=white&color=blue)](https://github.com/owen-6936)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/owen-6936/nexus-dsm-ui/main?color=green)](https://github.com/owen-6936/nexus-dsm-ui/commits/main)

---

## 💡 Overview

This application serves as a dedicated desktop client for interacting with the Nexus-DSM (Digital Service Management) system. By utilizing the **Tauri framework**, we achieve a native look-and-feel, lightning-fast performance, and a minimal application size, significantly surpassing the overhead of typical Electron applications.

**Why Tauri?**
* **Small Footprint:** Uses the system's native WebView instead of bundling a full browser.
* **Security:** Leverages Rust's memory safety and Tauri's security-focused IPC layer.
* **Cross-Platform:** Single codebase for Windows, macOS, and Linux.

## 💻 Tech Stack

This project is a hybrid application, utilizing the best parts of the web and native desktop technologies.

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Backend / Core** | **Rust** 🦀 | Handles low-level system calls, security, and high-performance logic. |
| **Frontend UI** | **Vanilla JavaScript / TypeScript** | The interactive user interface, leveraging popular web tools. |
| **Desktop Framework** | **Tauri** | Bridges the web frontend and the Rust native backend. |
| **Package Management**| **npm / Yarn / pnpm** | Manages frontend dependencies and scripts. |

---

## 🛠️ Installation & Setup

Before starting development, ensure you have the necessary prerequisites installed.

### Prerequisites

1.  **Node.js**: Version 16 or higher.
2.  **Rust**: Install the latest stable version of Rust and Cargo via [rustup](https://rustup.rs/).
3.  **Tauri CLI Dependencies**: Depending on your operating system (Windows, macOS, or Linux), you may need specific dependencies. Consult the [Tauri Setup Guide](https://tauri.app/v1/guides/getting-started/prerequisites) for details.

### Local Development

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/owen-6936/nexus-dsm-ui.git](https://github.com/owen-6936/nexus-dsm-ui.git)
    cd nexus-dsm-ui
    ```

2.  **Install Dependencies**
    ```bash
    # Install frontend (JavaScript) dependencies
    npm install
    ```

3.  **Start Development**
    This command runs both the frontend dev server and the Tauri Rust process, allowing for hot-reloading of your web assets.

    ```bash
    npm run tauri dev
    ```

---

## ⚙️ Project Structure (Theoretically)

Understanding the separation of concerns is key in a Tauri project.

````

nexus-dsm-ui/
├── src/                    \# The Web Frontend (JavaScript/HTML/CSS)
│   ├── index.html          \# Entry point for the WebView
│   └── main.ts             \# The main Typescript logic
├── src-tauri/              \# The Rust Backend & Native Logic
│   ├── Cargo.toml          \# Rust dependencies and project config
│   ├── tauri.conf.json     \# Tauri app configuration (window, commands, etc.)
│   └── src/                \# Rust source code
│       └── main.rs         \# The main Rust application entry point
├── package.json            \# Frontend scripts and dependencies
├── tsconfig.json           \# Typecript configuration 
└── README.md

````

### 🤝 Rust-to-JS Communication (The Core Concept)

Tauri's magic is the secure connection between the two parts. You expose Rust functions as **Commands** that your JavaScript can safely call via `invoke`.

**Example:**
In **`src-tauri/src/main.rs`** (Rust)
```rust
// 1. Define the command in Rust
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! This is a secure native call from Rust.", name)
}
````

In **`src/main.js`** (JavaScript)

```javascript
// 2. Call the command from JavaScript
import { invoke } from '@tauri-apps/api/tauri'

async function callRustGreeting() {
  const message = await invoke('greet', { name: 'Owen' });
  console.log(message); // Output: "Hello, Owen! This is a secure native call from Rust."
}
```

-----

## 📦 Building & Distribution

To create a final, production-ready desktop application, use the build command:

```bash
npm run tauri build
```

The compiled application installers (e.g., `.exe`, `.dmg`, `.deb`) will be located in the **`src-tauri/target/release/bundle`** directory.

-----

## 📝 Future Roadmap

  * [ ] Implement a robust state management solution for the frontend.
  * [ ] Create a dedicated Rust command for reading/writing configuration files.
  * [ ] Design the main "DSM Dashboard" view.
  * [ ] Integrate the native notification system using the Tauri API.

-----

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

-----

## 🙏 Acknowledgments

  * The incredible [Tauri Framework](https://tauri.app/) team.
  * [Rust Community](https://www.rust-lang.org/) for the secure foundation.
  * [Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for keeping the web fast and flexible.
