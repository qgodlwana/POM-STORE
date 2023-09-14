# 1. Page Object Model Pattern with Playwright
This repository contains simple automation test framework written with JavaScript and Playwright and implements Page Object Model Pattern.

#2. If you want to run test locally, please follow these steps:

- Download and install VS code
- Make sure you have playwright installed: *npm init playwright@latest*.
- Clone this repository

That's it, now you can open a new terminal and run tests with npm run test, it will run test in 3 browsers (chromium, firefox, webkit) in parallel.
- npx playwright test POMtest.spec.js

If you want to run it in headed mode, you may use the following command:
- npx playwright test POMtest.spec.js --project=chromium --headed