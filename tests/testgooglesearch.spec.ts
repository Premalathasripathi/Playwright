import { test, expect } from '@playwright/test';

test.only('testgooglesearch',  async ({page}) =>{

    await page.goto('https://www.google.com/')
    const searchBox = page.locator('textarea[name="q"]').click();
    await page.waitForTimeout(6000);
    const suggestions = page.locator('ul[role="listbox"] li');
    await suggestions.first().waitFor();
    const count = await suggestions.count();
    console.log('Total suggestions:', count);

  for (let i = 0; i < Math.min(5, count); i++) {
    const text = await suggestions.nth(i).innerText();
    console.log(`Suggestion ${i + 1}: ${text}`);
  }
})



