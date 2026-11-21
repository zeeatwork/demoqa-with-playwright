# Juice Shop Playwright Automation Framework
 
A Playwright + TypeScript test framework built against a locally run copy of [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/), an open source Angular + Node.js/Express web app.
 
This is a portfolio project in progress. It shows how I approach test automation as engineering work: reliable test design, maintainable structure, stable locators, and clear diagnostics. It's built one step at a time, and the roadmap below shows what's done and what's next.
 
> **Note:** This project started against [DemoQA](https://demoqa.com/) and was retargeted to Juice Shop in November 2026 so tests could run against a local app with readable source code.
 
---
 
## Why Juice Shop?
 
- **Runs locally.** Tests run against `http://localhost:3000`, not a shared public site, so results are repeatable.
- **Angular front end + Node/Express back end.** A common modern stack with both UI and API layers to test.
- **Source code is available.** That allows both black box testing (from the user's point of view) and white box testing (reading the Angular templates and API routes to choose locators and design tests).
- **Realistic features.** Registration, login, product search, basket, checkout, reviews, and seeded user and product data.
- **Real locator tradeoffs.** The UI has `id` attributes, ARIA labels, and CSS classes but no `data-testid` attributes, so locator choices have to be made deliberately.
**Safety note:** Juice Shop is intentionally insecure. It is built for security training. Run it only on `localhost`, don't expose it to a network, and use only its built-in test accounts.
 
---
 
## Getting Started
 
### Prerequisites
 
- Node.js 22–26 (Juice Shop's supported range)
- Git
### 1. Run Juice Shop
 
Clone Juice Shop into a folder next to this project:
 
```bash
git clone https://github.com/juice-shop/juice-shop.git --depth 1
cd juice-shop
npm install
npm start
```
 
Open `http://localhost:3000` to confirm it's running.
 
### 2. Run the tests
 
```bash
cd demoqa-with-playwright
npm install
npx playwright install chromium
npm test
```
 
If Juice Shop isn't already running, Playwright's `webServer` setting starts it from `../juice-shop`.
 
### Scripts
 
| Command | What it does |
| --- | --- |
| `npm test` | Run all tests |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run test:headed` | Run tests with a visible browser |
| `npm run report` | Open the last HTML report |
 
---
 
## Roadmap
 
| # | Step | Status |
| --- | --- | --- |
| 1 | Establish a reproducible Playwright + TypeScript test framework | ✅ Done |
| 2 | Configure the application under test | 🔄 In progress |
| 3 | Build meaningful smoke tests | ⬜ Planned |
| 4 | Develop stable locator strategies | ⬜ Planned |
| 5 | Automate realistic user journeys | ⬜ Planned |
| 6 | Organize tests by purpose | ⬜ Planned |
| 7 | Introduce Page Objects where they provide value | ⬜ Planned |
| 8 | Create reusable fixtures and test data | ⬜ Planned |
| 9 | Manage authentication state | ⬜ Planned |
| 10 | Use API-assisted setup where appropriate | ⬜ Planned |
| 11 | Test browser behaviors (dialogs, new tabs, navigation) | ⬜ Planned |
| 12 | Validate network-aware behavior | ⬜ Planned |
| 13 | Improve synchronization and assertion strategy | ⬜ Planned |
| 14 | Configure execution and diagnostics | ⬜ Planned |
| 15 | Design tests for parallel execution | ⬜ Planned |
| 16 | Introduce targeted network mocking | ⬜ Planned |
| 17 | Apply accessibility-oriented test design | ⬜ Planned |
| 18 | Integrate the framework into CI | ⬜ Planned |
| 19 | Review the framework for maintainability | ⬜ Planned |
| 20 | Package the project as a portfolio-ready engineering artifact | ⬜ Planned |
 
### Step 1 notes
 
- Pointed `baseURL` at the local Juice Shop and set up `webServer` so the app starts automatically when needed.
- Limited runs to Chromium to keep feedback fast while the suite is small.
- Added `tsconfig.json` with Node and Playwright types and strict type checking.
- Added npm scripts for common commands.
- Added a setup check test that confirms the app is reachable.
---
 
## Technology Stack
 
| Technology | Purpose |
| --- | --- |
| Playwright | Browser automation and test execution |
| TypeScript | Programming language |
| Node.js / npm | Runtime and dependency management |
| OWASP Juice Shop | Application under test (run locally) |
| Git / GitHub | Version control |
| GitHub Actions | Continuous integration (planned for step 18) |
| HTML Report / Trace Viewer | Test reporting and failure investigation |
 
---
 
## Project Structure
 
Current:
 
```text
.
├── tests/
│   └── setup-check.spec.ts
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── .gitignore
├── README.md
└── .github/
    └── workflows/
        └── playwright.yml
```
 
Planned folders such as `pages/`, `fixtures/`, and `test-data/` will be added in later roadmap steps, as they're needed.
 