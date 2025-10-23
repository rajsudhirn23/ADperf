import { test, expect } from '@playwright/test';

test.use({
  launchOptions: {
    args: ['--incognito']
  }
});

test('test user 4', async ({ page }) => {
  await page.goto('https://whirlpool.b2bcustexp-qa.tmp.domgensandbox.com/myaccount');
  //await page.locator('.onetrust-pc-dark-filter').click();
  const acceptButton = page.getByRole('button', { name: 'Accept' });
  if (await acceptButton.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false)) {
    await acceptButton.click();
  }
   await page.getByRole('textbox', { name: 'Email' }).fill('perfdngtest+72907@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test1234');
  await page.getByRole('button', { name: 'Login right-chevron' }).click();
  const hiHeading = page.getByRole('heading', { name: 'Hi' });
  if (await hiHeading.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false)) {
    await hiHeading.click();
  }
  await page.getByRole('button', { name: 'Book A Repair' }).click();
  await page.getByRole('textbox', { name: 'Model number' }).click();
  await page.getByRole('textbox', { name: 'Model number' }).fill('');
  await page.getByRole('textbox', { name: 'Model number' }).fill('WFW9620HW');
  await page.getByRole('textbox', { name: 'Serial number' }).fill('');
  await page.getByRole('textbox', { name: 'Serial number' }).fill('B12345678');
  await page.getByRole('button', { name: 'Continue right-chevron' }).click();
await expect(page.getByRole('heading', { name: 'Please confirm your model' })).toBeVisible({ timeout: 60000 });
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByText('Breakdown').click();
  await page.getByRole('button', { name: 'Continue right-chevron' }).click();
  await page.getByRole('textbox', { name: 'Fault date - MM / DD / YYYY' }).click();
  
  // Get current date in MM/DD/YYYY format
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit', 
    year: 'numeric'
  });
  await page.getByRole('textbox', { name: 'Fault date - MM / DD / YYYY' }).fill(currentDate);
  
  await page.getByRole('button', { name: 'Continue right-chevron' }).click();
  await page.getByText('No operation').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue right-chevron' }).click();
  await expect(page.getByRole('heading', { name: 'My contact details' })).toBeVisible({ timeout: 60000 });
  await page.getByRole('button', { name: 'Continue right-chevron' }).click();
  await expect(page.getByRole('heading', { name: 'Technician visit' })).toBeVisible({ timeout: 60000 });
  await page.getByRole('button', { name: 'Continue right-chevron' }).click();
  await page.getByRole('button', { name: 'next week' }).click();
  await page.locator('form').filter({ hasText: 'Tue284slots available' }).getByLabel('show slots').click();
  await page.getByText(':00 am - 2:00 pm').click();
  await page.getByRole('button', { name: 'Continue right-chevron' }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('heading', { name: 'Please confirm your repair' })).toBeVisible({ timeout: 60000 });
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect(page.getByRole('heading', { name: 'Booking details' })).toBeVisible({ timeout: 60000 });
  await expect(page.getByRole('heading', { name: 'Booking reference' })).toBeVisible();
  await page.getByRole('button', { name: 'Dashboard' }).click();
  const userHeading1 = page.getByRole('heading', { name: 'Hi' });
  if (await userHeading1.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false)) {
    await userHeading1.click();
  }
  await page.getByRole('button', { name: 'Manage My Repair' }).click();
  await page.getByRole('button', { name: 'Cancel Repair' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForTimeout(1000);
  const userHeading2 = page.getByRole('heading', { name: 'Hi' });
  if (await userHeading2.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false)) {
    await userHeading2.click();
  }
  await page.getByRole('button', { name: 'Log out' }).click();
  await page.waitForTimeout(1000);
      // Check if Email textbox is visible within 5 seconds
    const emailTextbox = page.getByRole('textbox', { name: 'Email' });
    if (await emailTextbox.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false)) {
      console.log('Email textbox is visible');
    }
});
