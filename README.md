# Test with Confidence

The example project for **Test with Confidence**, an Afghan Geeks Education community event on 17 October 2026.

It's a small Next.js app called **Chai Time**, tested at every level: unit, component, integration, and end-to-end.

## Getting started

You need [Node.js](https://nodejs.org) 22.12 or later.

```bash
git clone https://github.com/afghangeeks/software-testing-event-17-october-2026
cd software-testing-event-17-october-2026
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Running the tests

| Command | What it does |
| --- | --- |
| `npm run test` | Runs the unit and integration tests in watch mode, re-running on every save |
| `npx vitest run` | Runs them once |
| `npx vitest run --coverage` | Shows which lines are never tested |
| `npm run test:e2e` | Runs the end-to-end test in a real browser |

Before your first end-to-end run, download the browser once (about 120 MB):

```bash
npx playwright install chromium
```

The end-to-end test builds the app and starts it on port 3100, so it won't clash with `npm run dev`.

## What's inside

| Level | Test | What it shows |
| --- | --- | --- |
| Unit | [`tests/unit/math.test.js`](tests/unit/math.test.js) | Testing simple functions: `add` and `isEven` |
| Unit | [`tests/unit/bread.test.js`](tests/unit/bread.test.js) | Normal, zero, and negative cases |
| Component | [`tests/unit/Counter.test.jsx`](tests/unit/Counter.test.jsx) | Render, click, and check the screen |
| Component | [`tests/unit/chai-counter.test.jsx`](tests/unit/chai-counter.test.jsx) | Props, fake functions with `vi.fn()`, and a disabled button |
| Component | [`tests/unit/page.test.jsx`](tests/unit/page.test.jsx) | The home page renders |
| Integration | [`tests/integration/chai-order-app.test.jsx`](tests/integration/chai-order-app.test.jsx) | The full order flow, with [MSW](https://mswjs.io) faking the API |
| End-to-end | [`tests/e2e/chai-order.spec.js`](tests/e2e/chai-order.spec.js) | The same flow in a real browser, with the real API |

Notice the greeting: the integration test says "Salam, Zahra!" because MSW fakes the API, while the end-to-end test says "Salam, Ali!" because it calls the real `/api/hello` route.

## Try it yourself

- **Break `add` on purpose.** There's a commented-out broken version in [`src/utils/math.js`](src/utils/math.js). Swap it in and watch the tests turn red.
- **Settle an argument.** Two tests in `math.test.js` disagree about `add("2", 3)`: one expects `5`, the other expects an error. Decide which behaviour is right and make the suite green.
- **Test the unhappy path.** Write an integration test for what the greeting shows when the API fails. Hint: `server.use()` in MSW.

## Tools

- [Vitest](https://vitest.dev): test runner
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro): finds elements the way users do, by role and label
- [MSW](https://mswjs.io): fakes the network, not your code
- [Playwright](https://playwright.dev): runs end-to-end tests in a real browser
- [Next.js testing guides](https://nextjs.org/docs/pages/guides/testing): how these tools fit into Next.js
