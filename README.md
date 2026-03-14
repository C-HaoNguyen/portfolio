## 🚀 Portfolio cá nhân (React + Vite + TailwindCSS)

Một website portfolio cá nhân hiện đại, responsive, dùng để giới thiệu bản thân, kỹ năng, kinh nghiệm và các dự án đã làm. Project được xây dựng bằng React, Vite và TailwindCSS với dark mode, hiệu ứng mượt và form liên hệ.

## ✨ Tính năng chính

- Giao diện hiện đại, tối ưu cho desktop, tablet, mobile
- Dark / Light mode với nút toggle trên header
- Điều hướng mượt giữa các section (scroll-behavior: smooth)
- Hero section có text role auto-rotate và social links
- About section giới thiệu bản thân, phong cách làm việc, thông tin nhanh
- Skills section chia theo nhóm (Frontend, Backend, Database, Tools) với thanh % và vòng tròn kỹ năng
- Projects section có bộ lọc theo loại dự án và thẻ dự án (live demo, GitHub, tech stack)
- Experience section với timeline kinh nghiệm và khối học vấn
- Contact section với form liên hệ (giả lập gửi, loading spinner, thông báo trạng thái) và thông tin liên hệ trực tiếp

## 🛠️ Công nghệ sử dụng

- React 19
- Vite 7
- TailwindCSS 3
- lucide-react (icon)
- ESLint 9

## 📂 Cấu trúc thư mục

```bash
portfolio/
├── public/
├── src/
│   ├── assets/                    # Ảnh, icon, tài nguyên tĩnh (nếu có)
│   ├── components/
│   │   ├── common/                # Button, LoadingSpinner, ...
│   │   ├── layout/                # Header, Footer
│   │   └── sections/              # Hero, About, Skills, Projects, Experience, Contact
│   ├── App.jsx                    # Ghép các section + layout
│   ├── main.jsx                   # Entry React, mount vào DOM
│   └── index.css                  # Global styles, Tailwind, fonts
├── eslint.config.js
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## ⚙️ Cài đặt & chạy project

### Yêu cầu

- Node.js >= 18
- npm (hoặc pnpm/yarn nếu bạn thích)

### Bắt đầu

```bash
# Clone repo
git clone https://github.com/yourusername/portfolio.git

cd portfolio

# Cài dependency
npm install

# Chạy dev (mặc định: http://localhost:5173)
npm run dev
```

### Scripts có sẵn

```bash
# Development
npm run dev

# Build production
npm run build

# Preview bản build
npm run preview

# Lint code
npm run lint
```

## 🔧 Cách custom cho riêng bạn

### 1. Thay đổi thông tin cá nhân

- Hero: cập nhật tên, vai trò, stats trong `src/components/sections/Hero.jsx`
- About: update phần giới thiệu, số năm kinh nghiệm, email trong `src/components/sections/About.jsx`
- Experience & Education: chỉnh lại kinh nghiệm, công ty, trường học trong `src/components/sections/Experience.jsx`
- Contact: sửa email, số điện thoại, địa chỉ, social links trong `src/components/sections/Contact.jsx` và `src/components/layout/Footer.jsx`

### 2. Cập nhật kỹ năng & dự án

- Skills: chỉnh lại danh sách kỹ năng, level, nhóm kỹ năng trong `src/components/sections/Skills.jsx`
- Projects: thay project demo bằng project thật (title, description, tech, link live, link GitHub) trong `src/components/sections/Projects.jsx`

### 3. Màu sắc, font, giao diện

- Font + global styles: `src/index.css`
- Màu sắc, theme Tailwind: `tailwind.config.js`
- Thành phần chung (button, spinner, v.v.): `src/components/common`

### 4. Thêm / bớt section

1. Tạo component mới trong `src/components/sections`
2. Import và render trong `src/App.jsx`
3. Thêm link điều hướng trong `src/components/layout/Header.jsx` (navItems)

## 🚀 Deploy

Project là static site (build ra thư mục `dist`), có thể deploy lên bất kỳ static hosting nào:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages, v.v.

Flow cơ bản:

```bash
npm run build
# deploy thư mục dist/ lên nền tảng bạn chọn
```

## 📞 Liên hệ

- Email: haolq0711@gmail.com
- LinkedIn: https://linkedin.com/in/yourprofile
- GitHub: https://github.com/C-HaoNguyen

Bạn có thể chỉnh các thông tin này trực tiếp trong code cho khớp với profile thật.

---

Nếu repo này hữu ích với bạn, hãy để lại ⭐ để ủng hộ!