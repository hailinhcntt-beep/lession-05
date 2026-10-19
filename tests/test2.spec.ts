import { test } from '@playwright/test';
test("bai tap 5.2", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 2: Product' }).click();
    // add sản phẩm 1 vô giỏ
    await page.getByRole('button', { name: 'Add to Cart' }).nth(0).dblclick();
    // add sản phẩm 1 vô giỏ
    await page.getByRole('button', { name: 'Add to Cart' }).nth(1).dblclick();
    await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
    // add sản phẩm 3 vô giỏ
    await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
}

)
