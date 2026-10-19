### Luyện tập DOM, selector & Playwright basic
#### DOM
Document Object Model (DOM):là một giao diện lập trình định dạng tài liệu HTML và XML thành một cấu trúc cây logic. Cấu trúc này cho phép lập trình viên truy cập và thao tác các nội dung và thuộc tính của trang web bằng cách sử dụng các ngôn ngữ lập trình như JavaScript.
##### Cấu trúc của DOM

DOM tổ chức tài liệu dưới dạng cây, nơi mỗi nút (node) đại diện cho một phần của tài liệu:

**Document**: Gốc của cây DOM, đại diện cho toàn bộ tài liệu.

**Element**: Đại diện cho các thẻ HTML, như `<div>, <p>, <a>,..`

**Attribute**: Đại diện cho các thuộc tính của thẻ HTML, như `id, class, src,…`

**Text**: Đại diện cho các nội dung văn bản bên trong các thẻ HTML.

**Comment**: Đại diện cho các chú thích trong HTML (<!– Comment –>).

##### Bản chất của DOM trong Playwright

**Mô hình đối tượng:** Biểu diễn mọi thẻ HTML (như `<div>, <button>, <input>`) thành các đối tượng có thể truy xuất.

**Cấu trúc cây:** Giúp Playwright hiểu được mối quan hệ cha - con, anh - em giữa các phần tử trên trang quan hệ trong DOM.

**Giao diện tương tác:** Là mục tiêu để Playwright thực hiện các hành động như click, nhập liệu hoặc đọc giá trị văn bản.

##### Cách Playwright làm việc với DOM

**Auto-waiting:** Playwright tự động đợi phần tử xuất hiện và sẵn sàng trong DOM trước khi thực hiện thao tác.

**Locator API:** Cung cấp các phương thức mạnh mẽ (như `page.locator(), getByText(), getByRole()`) để truy vấn trực tiếp các nút trên cây DOM.

**Shadow DOM:** Playwright tự động "nhìn xuyên" qua các ranh giới Shadow DOM mà không cần viết thêm lệnh phức tạp.
#### Locator thường sử dụng trong playwright
• **page.getByRole()**: Tìm phần tử theo vai trò ARIA, thuộc tính accessible và tên (ví dụ: page.getByRole('button', { name: 'Submit' })). Đây là cách được ưu tiên hàng đầu.
• **page.getByText()**: Tìm phần tử dựa vào nội dung văn bản hiển thị bên trong nó (ví dụ: page.getByText('Welcome')).
• **page.getByLabel()**: Tìm ô nhập liệu (input) thông qua thẻ nhãn (<label>) liên kết với nó (ví dụ: page.getByLabel('Username')).
• **page.getByPlaceholder()**: Tìm ô input dựa vào văn bản gợi ý mờ bên trong (placeholder) (ví dụ: page.getByPlaceholder('Enter your email')).
• **page.getByAltText()**: Tìm phần tử (thường là ảnh) dựa vào thuộc tính alt.
• **page.getByTitle()**: Tìm phần tử dựa vào thuộc tính title.
• **page.getByTestId()**: Tìm phần tử thông qua thuộc tính định danh test riêng biệt (thường là data-testid).
• **page.locator()**: Dùng bộ chọn CSS hoặc XPath truyền thống. Cách này ít được khuyến khích hơn vì dễ gãy khi giao diện thay đổi, nhưng hữu ích khi không tìm được bằng các cách trên.
#### Playwright basic

##### Lệnh thao tác phần tử cơ bản (Actions & Locators)

Trong file test, các lệnh tương tác thường đi kèm từ khóa await vì Playwright hoạt động theo cơ chế bất đồng bộ (async/await) và có tính năng tự động chờ (auto-wait):
**• Mở trang web:javascript**
`await page.goto('https://example.com');`

**• Tìm phần tử (Locator):javascript**
`const inputUser = page.getByRole('textbox', { name: 'Username' });
// Hoặc dùng CSS/XPath
const btnLogin = page.locator('#login-button');`

**• Nhập văn bản:javascript**
`await page.getByRole('textbox', { name: 'Username' }).fill('my_user');`

**• Click chuột:javascript**
`await page.getByRole('button', { name: 'Log in' }).click();`

**• Lấy tiêu đề hoặc URL trang:javascript**
`const title = await page.title();
 const url = page.url();`

**Navigate with option - referer**

` test("Navigate with option - referer", async ({page}) => {
    await page.goto ("<url>",{
        referer: "<url2>"
    });
})`

**Navigate with timeout**

` test("Navigate with option- timeout", async ({page}) => {
    await page.goto ("<url>",{
       timeout: 100
    });
})`

**Navigate with waitUntil**

` test("Navigate with option- waitUntil", async ({page}) => {
    await page.goto ("<url>",{
        waitUntil: "commit"
    });
})`

**Locator có thể truyền xpath**

`const bai1Loc = page.locator{'//a[@href="01-xpath-register-page.html"]'}`

Click
Input(fill, press,pressSequentially)

**ví dụ**

// điền tên và email

    `await page.getByLabel('Username').fill('Linh');
    await page.getByLabel('Email').fill('linhbui610@gmail.com');`

// chọn giới tính ở **radio button**

    await page.getByLabel('Female').check();

//tích chọn sở thích ở **check box**

    await page.getByLabel('Reading').check();
    await page.getByLabel('Traveling').check();
    await page.getByLabel('Cooking').check();

// chọn sở thích ở **list box**

    await page.getByLabel('interests').selectOption([{label:'Music'},{label:'Technology'}]);
    await page.locator('#interests').selectOption([{ label: 'Music' }, { label: 'Art' }]);

// chọn quốc gia ở **dropdown list**

    await page.locator('#country').selectOption('australia');
    await page.getByLabel('country').selectOption({label:'Canada'});

// chọn ngày sinh **date**

    await page.getByLabel('Date of Birth:').fill('2000-10-06');
    await page.locator("//input[@id='dob']").fill('2000-10-07');
     await page.locator('input[name="dob"]').fill('2000-11-07');
    await page.locator('#dob').fill('1995-06-15');

// **upload** ảnh profile

    await page.locator("//input[@id='profile']").setInputFiles("data/anh-profile.jpg");

// điền thông tin Biography

    await page.getByLabel('Biography:').fill('sinh ra và lớn lên ở ND-VN');
    await page.getByLabel('Biography:').pressSequentially('sinh ra và lớn lên ở ND-VN');

//CLick **button** register

    await page.getByRole('button', { name: 'Register' }).click();

// Cấu hình cho dialog

    `page.on('dialog', async dialog => {
        await dialog.accept(); `// Bấm nút "OK"