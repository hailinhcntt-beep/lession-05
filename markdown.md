#  Học automation với playright 
##  Luyện tập với markdown 
### 1.Luyện tập với heading
#### Heading 4 
##### Heading 5 
###### Heading 6 

### 2.Định dạng văn bản

**Chữ in đậm**

*Chữ in nghiêng*

***Chữ vừa đậm và vừa nghiêng***

~~Chữ gạch ngang~~

`code cần chú ý`

### 3.Danh sách không theo thứ tự
- Item 1
- Item 2
    - Sub item 1
    - Sub item 2
* Có thể dùng dấu *
    * Sub item 3
+ Có thể dùng dấu +
    + Sub item 4
### 4.Danh sách theo thứ tự ###
1. step 1
2. step 2
    1. sub step 2.1
    2. sub step 2.2

### 5.Link và image

[Facebook của Playwirgt Việt Nam](https://www.facebook.com/groups/1477249662842354?locale=vi_VN)

![Hình ảnh lăng Bác](https://static.vinwonders.com/production/lang-chu-tich-ho-chi-minh-2.jpeg)

![Hình ảnh Hồ Gươm](.\image\anh-ho-hoan-kiem-16.jpg)

### 6.Code blocks
```Typescript
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});
```
### 7.Bock quotes
> Đây là 1 block quotes

> Thực ra tôi vẫn chưa hiểu block quotes là gì
>> hehe
>>>hihihi
### 8.Đường kẻ ngang
dạng 1: 3 dấu gạch dưới
___
dạng 2: 3 dấu trừ
---
dạng 3: 3 dấu sao
***
### 9.Dạng bảng
ID|Tên testcase|Kết quả|
--|------------|-------|
TC01|login|pass|
TC02|logout|fail|

