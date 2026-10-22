import {test, expect} from '@playwright/test';

 test('bài tập 5.4', async({page})=> {

    await page.goto('https://material.playwrightvn.com');
    await page.getByRole('link', {name: 'Bài học 4: Personal notes'}).click();

    // khai báo mảng object
    let array=[
        {title:'click', decription:'Hàm click dùng để thực hiện click vào các phần tử trên trang web'},
        {title:'fill', decription:'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web'},
        {title:'type', decription:'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng'},
        {title:'hover', decription:'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover'},
        {title:'check', decription:'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked'},
        {title:'uncheck', decription:'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked'},
        {title:'selectOption', decription:'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown'},
        {title:'press', decription:'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác'},
        {title:'dblclick', decription:'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web'},
        {title:'dragAndDrop', decription:'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web'},

    ]
    // add giá trị của mảng vào
     for (let i=0;i<array.length;i++){

        await page.locator('//input[@id="note-title"]').fill(array[i].title);
        await expect(page.locator('//input[@id="note-title"]')).toHaveValue(array[i].title),
        await page.locator('//textarea[@id="note-content"]').fill(array[i].decription);
        await expect(page.locator('//textarea[@id="note-content"]')).toHaveValue(array[i].decription),
        await page.locator('//button[@id="add-note"]').click();
       
     }
     //Thực hiện search với keyword “một hoặc nhiều”
     let inputSearch='check'
    await page.locator('//input[@id="search"]').fill(inputSearch);
    await expect(page.locator('//input[@id="search"]')).toHaveValue(inputSearch);


 })