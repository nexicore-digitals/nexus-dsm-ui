# Contributing to Nexus DSM UI

First off, thank you for considering contributing to Nexus DSM UI. It's people like you that make this such a great project.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open-source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Code of Conduct

This project and everyone participating in it is governed by the [Nexus DSM UI Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior.

## How Can I Contribute?

### Reporting Bugs

Bugs are tracked as [GitHub issues](https://github.com/nexicore-digitals/nexus-dsm-ui/issues). When you are creating a bug report, please include as many details as possible. Fill out the required template, the information it asks for helps us resolve issues faster.

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/nexicore-digitals/nexus-dsm-ui/issues). Before you create an enhancement suggestion, please check the issue list to see if the enhancement has already been suggested. If it has, add a 👍 to the existing issue. If it hasn't, create a new issue.

### Your First Code Contribution

Unsure where to begin contributing to Nexus DSM UI? You can start by looking through `good-first-issue` and `help-wanted` issues.

### Pull Requests

The process described here has several goals:

- Maintain Nexus DSM UI's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible Nexus DSM UI
- Enable a sustainable system for Nexus DSM UI's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Fork the repository and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes (`pnpm test`).
5. Make sure your code lints (`pnpm lint`).
6. Issue that pull request!

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.

### Code Style

We use Prettier and ESLint to enforce code style. Please run `pnpm format` and `pnpm lint` before committing your changes.

## Development Setup

You will need Node.js version 22+ and `pnpm`.

1. Fork and clone the repository.

    ```bash
    git clone https://github.com/nexicore-digitals/nexus-dsm-ui.git
    cd nexus-dsm-ui
    ```

2. Install `pnpm` if you haven't already:

    ```bash
    npm install -g pnpm
    ```

3. Install dependencies with `pnpm install`.

4. Run the development server with `pnpm dev`.

Thank you for your contribution!
