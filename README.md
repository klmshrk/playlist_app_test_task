# Playwright Tests Setup

This repository contains automated tests for a web application, written using [Playwright](https://playwright.dev/) and TypeScript.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/klmshrk/playlist_app_test_task.git
   cd playlist_app_test_task/
   ```

**Copy `.env.example` to `.env` and fill in the values**

2. **Install dependencies**:
   ```sh
   npm install && npx playwright install
   ```

## Running Tests

Run all tests locally with a single command:
   ```sh
   npm run test
   ```

Run all tests locally in headed mode:
   ```sh
   npm run test:headed
   ```

## Additional Resources

For detailed documentation, visit the [official Playwright website](https://playwright.dev/).

