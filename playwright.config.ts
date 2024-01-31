import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["alerts.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "on"
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "test-results/jsonReport.json"
  }], ["html", {
    open: "always"
  }]]
};

export default config;