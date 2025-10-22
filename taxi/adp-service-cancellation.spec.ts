import { test, expect } from '@playwright/test';

const testEmails = [
  //'perfdngtest+72898@gmail.com',
  // 'perfdngtest+72899@gmail.com',
  // 'perfdngtest+72900@gmail.com',
  //'perfdngtest+72901@gmail.com',
  'perfdngtest+72903@gmail.com'
];

testEmails.forEach((email) => {
  test(`Service cancellation test for ${email}`, async ({ page }) => {
  await page.goto('https://uat-external-alb.adp-uat.aws.domgencloud.net/GTConnect/UnifiedAcceptor/FrameworkDesktop.Main?sso=false');  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('awsintegration');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('automation0325');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('cell', { name: 'WIB Agent Profile' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
// Check if Continue button appears within 5 seconds and click it
try {
  const continueButton = page.locator('span.text.GTButtonTextWidth:has-text("Continue")');
  await continueButton.waitFor({ state: 'visible', timeout: 5000 });
  await continueButton.click();
  console.log('Continue button clicked');
} catch (error) {
  console.log('Continue button did not appear within 5 seconds');
}
  await page.getByRole('link', { name: 'Identify Customer' }).click();
  await page.locator('#iFrame_f98_cctRenderURL').contentFrame().getByText('- Please Select -').click();
  await page.locator('#iFrame_f98_cctRenderURL').contentFrame().getByRole('option', { name: 'Whirlpool' }).click();
   await page.locator('#iFrame_f98_cctRenderURL').contentFrame().locator('div').filter({ hasText: /^Email Address$/ }).click();
    // Use dynamic email from the array
    await page.locator('#iFrame_f98_cctRenderURL').contentFrame().getByTestId('input_email').fill(email);
  await page.locator('#iFrame_f98_cctRenderURL').contentFrame().getByTestId('button_search').click();
  await page.locator('#iFrame_f98_cctRenderURL').contentFrame().getByRole('gridcell', { name: 'PERFukijlBdp' }).click();
  await page.locator('#iFrame_f98_cctRenderURL').contentFrame().getByTestId('button_selectCustomer').click();
  
  // Wait for the gridcell to be visible first, then double-click
  const gridCell = page.locator('#iFrame_f104_cctRenderURL').contentFrame().getByRole('gridcell', { name: 'New' });
  await expect(gridCell).toBeVisible({ timeout: 20000 });
  await gridCell.dblclick();
  await page.getByRole('link', { name: 'Service Requests' }).click();
  await page.locator('#iFrame_f114_cctRenderURL').contentFrame().getByRole('gridcell', { name: 'Request Created – Appointment' }).click();
  await page.locator('#iFrame_f114_cctRenderURL').contentFrame().getByTestId('button_edit_request').click();
  await page.locator('#iFrame_f114_cctRenderURL').contentFrame().getByTestId('button_cancel_request').click();
  await expect(page.locator('#iFrame_f114_cctRenderURL').contentFrame().getByText('Cancel Service Request')).toBeVisible();
  await expect(page.locator('#iFrame_f114_cctRenderURL').contentFrame().getByText('- Please Select -')).toBeVisible();
  await page.locator('#iFrame_f114_cctRenderURL').contentFrame().getByText('- Please Select -').click();
  await page.waitForTimeout(2000);
  await page.locator('#iFrame_f114_cctRenderURL').contentFrame().getByRole('option', { name: 'Customer Cancelled' }).click();
  await page.locator('#iFrame_f114_cctRenderURL').contentFrame().getByTestId('button_confirm').click();
  await page.locator('#iFrame_f114_cctRenderURL').contentFrame().getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Wrapup' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  //await page.getByRole('button', { name: 'L', exact: true }).click();
   await page.waitForTimeout(2000);
  // await page.getByRole('link', { name: 'Log out' }).click();
  // await page.getByRole('button', { name: 'Confirm' }).click();
  // await expect(page.locator('#header')).toBeVisible();
});
});