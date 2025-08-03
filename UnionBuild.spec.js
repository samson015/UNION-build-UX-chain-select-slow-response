const { test, expect } = require ('@playwright/test');

test('Union Build', async ({ page }) => {
    
    await page.goto('https://app.union.build/transfer');  
    await page.locator('xpath=/html/body/div[1]/div[2]/main/div[2]/div/div/div[2]/div/div/div[1]/div[1]/button/div/div/div[2]/p[2]');
    await page.locator('xpath=/html/body/div[1]/div[2]/main/div[2]/div/div/div[2]/div/div/div[1]/div[2]/button/div/div/div[2]/p[2]');
              
})

