# DemoQA Playwright Automation Framework

A Playwright + TypeScript automation framework built against [DemoQA](https://demoqa.com/) as a Quality Engineer portfolio project.

The purpose of this project is to demonstrate how I approach automated testing as an engineering discipline rather than simply writing UI scripts.

The framework focuses on reliable test design, maintainable architecture, stable locators, web-first assertions, reusable fixtures, authentication state, API-assisted test setup, browser behavior, network testing, test isolation, diagnostics, accessibility-oriented automation, and continuous integration.

---

## Project Objective

Build a maintainable Playwright automation framework that demonstrates the skills expected of a Quality Engineer working with modern web applications.

The project follows a structured progression:

1. Establish a reproducible Playwright + TypeScript test framework.
2. Configure the application under test.
3. Build meaningful smoke tests.
4. Develop stable locator strategies.
5. Automate realistic user journeys.
6. Organize tests by purpose.
7. Introduce Page Objects where they provide value.
8. Create reusable fixtures and test data.
9. Manage authentication state.
10. Use API-assisted setup where appropriate.
11. Test browser windows, tabs, frames, and other browser behaviors.
12. Validate network-aware behavior.
13. Improve synchronization and assertion strategy.
14. Configure execution and diagnostics.
15. Design tests for parallel execution.
16. Introduce targeted network mocking.
17. Apply accessibility-oriented test design.
18. Integrate the framework into CI.
19. Review the framework for maintainability.
20. Package the project as a portfolio-ready engineering artifact.

---

## Application Under Test

**Application:** DemoQA

**Base URL:** https://demoqa.com/

DemoQA is a web application created for automated testing practice.

The project intentionally uses DemoQA as a test environment rather than attempting to treat it as a production application.

### Application Areas Used

| Area                    | Features Covered                                              |
| ----------------------- | ------------------------------------------------------------- |
| Elements                | Text Box, Web Tables, Buttons, Dynamic Properties             |
| Forms                   | Practice Form                                                 |
| Alerts, Frame & Windows | Browser Windows, Alerts, Frames, Nested Frames, Modal Dialogs |
| Widgets                 | Date Picker, Auto Complete, Tabs, Select Menu                 |
| Interactions            | Sortable, Selectable, Droppable                               |
| Book Store Application  | Login, Book Store, Profile, API-assisted scenarios            |

---

## Why DemoQA?

DemoQA provides a useful collection of browser and application behaviors that allow the framework to demonstrate more than basic CRUD-style UI automation.

The application provides opportunities to practice:

- Form automation
- Dynamic elements
- Tables
- Browser windows and tabs
- JavaScript alerts
- Iframes
- Nested frames
- Modal dialogs
- Widgets
- Drag-and-drop interactions
- Authentication
- Book Store workflows
- API-assisted testing
- Network interception
- Test isolation

This makes DemoQA useful for demonstrating Playwright capabilities while keeping the project small enough to focus on framework engineering.

---

# Technology Stack

| Technology              | Purpose                               |
| ----------------------- | ------------------------------------- |
| Playwright              | Browser automation and test execution |
| TypeScript              | Programming language                  |
| Node.js                 | Runtime                               |
| npm                     | Dependency management                 |
| Git                     | Version control                       |
| GitHub Actions          | Continuous integration                |
| HTML Report             | Test execution reporting              |
| Playwright Trace Viewer | Failure investigation                 |

---

# Framework Architecture

The framework is organized around separation of test intent, application interaction, configuration, and reusable test data.

A representative structure is:

```text
.
├── tests/
│   ├── smoke/
│   ├── forms/
│   ├── elements/
│   ├── bookstore/
│   └── browser/
│
├── pages/
│   └── PracticeFormPage.ts
│
├── fixtures/
│   └── testFixtures.ts
│
├── utils/
│   └── ...
│
├── test-data/
│   └── ...
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .env.example
├── .gitignore
├── README.md
└── .github/
    └── workflows/
        └── playwright.yml
```
