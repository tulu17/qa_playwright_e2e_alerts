# Playwright: Alerts (qa_cypress_e2e_alerts Playwright/TypeScript alternative)

## Open VSC. Make sure you have Playwright installed. Run 'npm test' in bash terminal. Test Report will open in default browser when tests are finished.

## How to install Playwright

### Option 1
   - install Playwright extension by Microsoft in VSC
   - press CTRL + SHIFT + P
   - type "install playwright" and choose the "Test: Install Playwright" option
   - select desired browsers and/or GitHub Action

### Option 2
   - open terminal and type **npm init playwright@latest**
   - run the install command and select the following to get started:
      - choose between TypeScript or JavaScript (default is TypeScript)
      - name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
      - add a GitHub Actions workflow to easily run tests on CI (optional)
      - install Playwright browsers (default is true)

## Task

### Basic level

App for testing: [DemoQA](https://demoqa.com/alerts)

**Your task** is to automate the next flow:

1. Click on the first button:
   - assert the text inside the alert.
1. Click on the second button:
   - assert the text inside the alert is shown in 5 secons.
1. Click on the third button:
   - assert the text inside the allert;
   - assert `You selected Ok` is shown.
1. Click on the third button and click on `Cancel`:
   - assert the text inside the allert;
   - assert `You selected Cancel` is shown.

### Advanced level

1. Click on the fourth button and enter your name:
   - assert your name is shown on the page.
