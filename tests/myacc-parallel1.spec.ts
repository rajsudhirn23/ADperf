import { test, expect } from '@playwright/test';

test.use({
  launchOptions: {
    args: ['--incognito']
  }
});

test('test user 1', async ({ page }) => {
  await page.goto('https://whirlpool.b2bcustexp-qa.tmp.domgensandbox.com/myaccount');
  //await page.locator('.onetrust-pc-dark-filter').click();
  const acceptButton = page.getByRole('button', { name: 'Accept' });
  if (await acceptButton.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false)) {
    await acceptButton.click();
  }
   await page.getByRole('textbox', { name: 'Email' }).fill('perfdngtest+80096@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test1234');
  await page.getByRole('button', { name: 'Login right-chevron' }).click();
  const hiHeading = page.getByRole('heading', { name: 'Hi' });
  if (await hiHeading.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false)) {
    await hiHeading.click();
  }
  await page.waitForTimeout(1000);
  await page.locator('.w-full.gap-2.flex.flex-row.justify-center.text-button.px-5.py-3.rounded-button.transition-all.font-700.active\\:shadow-inner.focus\\:outline.focus\\:outline-3.focus\\:outline-focused-700.bg-primary-inverted-button-background.shadow-level-1.text-primary-inverted-button-text.hover\\:bg-primary-inverted-button-hover-background.active\\:bg-primary-inverted-button-active-background.focus\\:border.focus\\:border-primary-inverted-button-focus-border.disabled\\:bg-primary-inverted-button-disabled-background.disabled\\:border.disabled\\:border-b-neutral-400.disabled\\:border-b-2.disabled\\:shadow-none.\\!font-semibold').first().click();
  await page.getByRole('heading', { name: 'Your plan: Whirlpool' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Back to dashboard' }).click();
  await page.getByRole('button', { name: 'My details' }).click();
  await page.waitForTimeout(1000);
  await page.getByTestId('profilePage').getByRole('button').click();
   await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Back to my profile' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Back to dashboard' }).click();
  const userHeading = page.getByRole('heading', { name: 'Hi' });
  if (await userHeading.waitFor({ state: 'visible', timeout: 15000 }).then(() => true).catch(() => false)) {
    await userHeading.click();
  }
  await page.waitForTimeout(1000);
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
  await page.getByRole('textbox', { name: 'Fault date - MM / DD / YYYY' }).fill('10/22/2025');
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
