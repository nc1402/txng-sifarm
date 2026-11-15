# Si Cafe & Si Farm — Cổng thông tin minh bạch nguồn gốc (5 ngôn ngữ)

Landing page HTML5/CSS3/Vanilla JavaScript, có thể tải trực tiếp lên GitHub Pages hoặc máy chủ web tĩnh. Không cần database, Node.js, build hay dịch vụ dịch thuật bên ngoài để chạy giao diện.

## Các ngôn ngữ

| Ngôn ngữ | Trang tương ứng | Mã HTML |
| --- | --- | --- |
| Tiếng Việt (mặc định) | `index.html` | `vi` |
| English | `en.html` | `en` |
| 简体中文 (Trung Quốc giản thể) | `zh-CN.html` | `zh-CN` |
| 한국어 | `ko.html` | `ko` |
| 日本語 | `ja.html` | `ja` |

Bộ chọn ngôn ngữ hình **🌐** nằm ở đầu trang, có trên cả máy tính và điện thoại. Khi đổi ngôn ngữ, trang tự giữ **mã lô `?lot=...`** và vị trí mục hiện tại (`#...`). Các trang có khai báo `lang`, `title`, `meta description` và `hreflang` riêng.

## Cấu trúc file

```text
├── index.html                  # Tiếng Việt
├── en.html                     # Tiếng Anh
├── zh-CN.html                  # Tiếng Trung giản thể
├── ko.html                     # Tiếng Hàn
├── ja.html                     # Tiếng Nhật
├── styles.css                  # Giao diện chung, responsive
├── script.js                   # Hồ sơ minh họa, bộ lọc, FAQ, chuyển ngôn ngữ
├── i18n_dynamic.js             # Bản dịch nội dung sinh ra bằng JavaScript
├── README.md
└── images/
    ├── logo-sicafe-sifarm.svg
    ├── hero-symphony-traceability.svg
    ├── cycle-circular-agriculture.svg
    ├── logo-sicafe-sifarm.{en,zh-CN,ko,ja}.svg
    ├── hero-symphony-traceability.{en,zh-CN,ko,ja}.svg
    └── cycle-circular-agriculture.{en,zh-CN,ko,ja}.svg
```

**Ghi chú:** Đã dịch cả nội dung trên trang, phần tra cứu thực tế, các thông báo minh họa, giải mã bốn nhóm số, ba hồ sơ lô mẫu, FAQ và văn bản trong sơ đồ SVG. Các hình giữ lại bố cục và nhận diện thương hiệu.

## Cách triển khai

1. Giải nén ZIP và giữ nguyên cấu trúc file / thư mục.
2. Đưa **toàn bộ các file và thư mục `images/`** vào thư mục gốc của repository GitHub Pages hoặc web server.
3. Mở `index.html` để dùng tiếng Việt mặc định, hoặc truy cập trực tiếp `en.html`, `zh-CN.html`, `ko.html`, `ja.html`.
4. Để tạo QR cho một lô, dùng URL dạng `https://your-domain.example/?lot=912610261847`. Khi khách đổi ngôn ngữ, tham số `lot` vẫn được giữ nguyên.

## Ví dụ liên kết QR

- `https://your-domain.example/?lot=912610261847`
- `https://your-domain.example/en.html?lot=912611121854`
- `https://your-domain.example/ja.html?lot=912611151860`

## Lưu ý quan trọng về dữ liệu

Ba bộ hồ sơ mẫu (`912610261847`, `912611121854`, `912611151860`) là **dữ liệu minh họa có sẵn trong gói nguồn**, không phải kết quả truy vấn từ cơ sở dữ liệu sản xuất đang hoạt động. Những mã 12 chữ số khác chỉ được **phân tích cấu trúc**, không được coi là đã được xác thực tồn tại. Các hồ sơ bên dưới là dữ liệu minh họa. Người dùng nhập **mã lô / mã truy xuất thực tế** vào ô tra cứu rồi bấm nút sẽ được mở **tab mới** đến hệ thống truy xuất thực tế của SI CAFE dưới dạng:

`https://sicafe.com.vn/chi-tiet-truy-xuat-nguon-goc/?code=<MA_LO_HOAC_MA_TRUY_XUAT>`

Chức năng tra cứu thực tế **không giới hạn mã 12 chữ số**, hỗ trợ mã chữ và số; trình duyệt tự mã hóa giá trị tham số `code`. Nếu không nhập mã thì trình duyệt yêu cầu điền trước khi gửi. Dữ liệu minh họa hoạt động độc lập, khi bấm 3 thẻ mẫu bên dưới chỉ hiển thị bản demo ngay trên trang.

Trang truy xuất chính thức: <https://sicafe.com.vn/truy-xuat-nguon-goc-sicafe/>.

**Lưu ý:** Khi thực hiện tra cứu thực tế, mã nhập được gửi tới tên miền `sicafe.com.vn` để hệ thống xử lý. Font chữ có thể được tải qua Google Fonts giống như thiết kế gốc.
