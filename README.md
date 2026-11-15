# Cổng Minh Bạch Nguồn Gốc & Giá Trị Khách Hàng — Si Cafe & Si Farm

Gói mã nguồn tĩnh (HTML5 / CSS3 / Vanilla JS / Vector SVG) được thiết kế chuyên biệt để triển khai trực tiếp trên **GitHub Pages**.

## Định hướng nội dung
- **Không phải trang bán hàng**: Loại bỏ hoàn toàn yếu tố chào mời giao dịch/giỏ hàng, tập trung phân tích chuyên sâu giá trị thực chất và quyền lợi khách hàng nhận được khi lựa chọn sản phẩm truy xuất nguồn gốc minh bạch bằng **mã định danh 12 chữ số**.
- **Nhận diện thương hiệu**: Ngôn ngữ thiết kế *"Bản Giao Hưởng Cuộc Sống"* với họa tiết *"Âm Vang Đại Ngàn"*, bảng màu **Xanh Đại Ngàn (`#003830`)**, **Vàng Kem (`#EADBBD`)** và **Vàng Kim (`#C89F65`)**.

## Cấu trúc thư mục
```text
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── logo-sicafe-sifarm.svg
    ├── hero-symphony-traceability.svg
    └── cycle-circular-agriculture.svg
```

## Tích hợp mã QR trên bao bì sản phẩm
Hệ thống hỗ trợ tham số URL `?lot=<12-chu-so>` để khi khách hàng quét mã QR in trên bao bì, trang sẽ tự động mở đúng hồ sơ lô hàng đó. Ví dụ:
- `https://<ten-mien-cua-ban>/index.html?lot=912610261847`
- `https://<ten-mien-cua-ban>/index.html?lot=912611121854`
- `https://<ten-mien-cua-ban>/index.html?lot=912611151860`
