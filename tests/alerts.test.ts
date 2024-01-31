import { expect, test } from '@playwright/test';

test('click the buttons', async ({ page }) => {

  await page.goto('https://demoqa.com/alerts');
  await page.getByLabel('Consent', { exact: true }).click();

  // click the first button, assert allert
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept();
  });
  await page.locator('id=alertButton').click();
  await page.waitForTimeout(1500);

  // click the second button, assert alert after 5 seconds
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('id=timerAlertButton').click();
  await page.waitForTimeout(5500);

  // click the third button, click ok, assert ok clicked
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept();
  });
  await page.waitForTimeout(1500);
  await page.locator('id=confirmButton').click();
  expect(page.locator('#confirmResult')).toContainText('You selected Ok');

  // click the third button, click cancel, assert cancel clicked
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss();
  });
  await page.waitForTimeout(1500);
  await page.locator('id=confirmButton').click();
  expect(page.locator('#confirmResult')).toContainText('You selected Cancel');

  // click the fourth button, enter name, assert name
  page.once('dialog', (dialog) => {
    console.log(`Dialog message: ${dialog.defaultValue()}`);
    dialog.accept('Mateusz');
  });
  await page.locator('id=promtButton').click();
  expect(page.locator('id=promptResult')).toContainText('Mateusz');
  await page.waitForTimeout(1500);
  
});
