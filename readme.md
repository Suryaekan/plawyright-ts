# playwright-ts

A Playwright + TypeScript test suite covering UI and API testing, using the Page Object Model pattern.

**UI tests** target [saucedemo.com](https://www.saucedemo.com) (login, cart, checkout).  
**API tests** target [reqres.in](https://reqres.in) (user endpoints).

---

## Prerequisites

- Node.js 18+
- npm

---

## Installation

```bash
git clone <repo-url>
cd playwright-ts
npm install
npx playwright install
```

---

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run only UI tests:
```bash
npx playwright test tests/ui
```

Run only API tests:
```bash
npx playwright test tests/api
```

View the HTML report after a run:
```bash
npx playwright show-report
```

---

## Project Structure

```
playwright-ts/
├── pages/
│   ├── ui/          # Page Object classes for UI
│   └── api/         # API client classes
├── tests/
│   ├── ui/          # UI test specs
│   └── api/         # API test specs
└── playwright.config.ts
```