
import { test , expect } from '@playwright/test';
test("bai tap 5.1", async ({ page }) => {

    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();
    // điền tên và email
    await page.getByLabel('Username').fill('Linh');
    await expect(page.getByLabel('Username')).toHaveValue('Linh');

    await page.getByLabel('Email').fill('linhbui610@gmail.com');
    await expect(page.getByLabel('Email')).toHaveValue('linhbui610@gmail.com');
    // chọn giới tính ở radio button
    await page.getByLabel('Female').check();
    await expect(page.getByLabel('Female')).toBeChecked();
    //tích chọn sở thích ở check box
    await page.getByLabel('Reading').check();
    await expect(page.getByLabel('Reading')).toBeChecked();
    await page.getByLabel('Traveling').check();
    await expect(page.getByLabel('Traveling')).toBeChecked();
    await page.getByLabel('Cooking').check();
    await expect(page.getByLabel('Cooking')).toBeChecked();

    // chọn sở thích ở list box
    //await page.getByLabel('interests').selectOption([{label:'Music'},{label:'Technology'}]);
    await page.locator('#interests').selectOption([{ label: 'Music' }, { label: 'Art' }]);
    await expect(page.locator('#interests option:checked')).toHaveText(['Art','Music']);

    // chọn quốc gia ở dropdown list
    await page.locator('#country').selectOption('australia');
    await expect(page.locator('#country')).toHaveValue('australia');
    //await page.getByLabel('country').selectOption({label:'Canada'});
    // chọn ngày sinh
    //await page.getByLabel('Date of Birth:').fill('2000-10-06');
    //await page.locator("//input[@id='dob']").fill('2000-10-07');
    // await page.locator('input[name="dob"]').fill('2000-11-07');
    await page.locator('#dob').fill('1995-06-15');
    await expect(page.locator('#dob')).toHaveValue('1995-06-15');
    // upload ảnh profile
    await page.locator("//input[@id='profile']").setInputFiles("data/anh-profile.jpg");
    await expect(page.locator("//input[@id='profile']")).toHaveValue(/fakepath.*anh-profile\.jpg$/);
    // điền thông tin Biography
    //await page.getByLabel('Biography:').fill('sinh ra và lớn lên ở ND-VN');
    await page.getByLabel('Biography:').pressSequentially('sinh ra và lớn lên ở ND-VN');
    await expect(page.getByLabel('Biography:')).toHaveValue('sinh ra và lớn lên ở ND-VN');
    //CLick button register
    await page.getByRole('button', { name: 'Register' }).click();






})