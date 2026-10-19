import { test } from '@playwright/test';
test("bai tap 5.3", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    //Thêm mới 100 todo item có nội dung “Todo <i>”
    for (let i = 1; i <= 100; i++) {
        await page.locator('#new-task').fill(`to do ${i}`);
        await page.getByRole('button', { name: 'Add Task' }).click();

    }
    // Cấu hình cho dialog
    page.on('dialog', async dialog => {
        await dialog.accept(); // Bấm nút "OK"
    });
    //Xoá các todo có số lẻ
    for (let i = 98; i >= 0; i -= 2) {
        await page.getByRole('button', { name: 'Delete' }).nth(i).click();
    }
}

)
