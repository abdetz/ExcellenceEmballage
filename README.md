# Excellence Emballage

موقع Excellence Emballage — Vite + React + TypeScript + Tailwind CSS v4.
كل الملفات فالـ root مباشرة بلا فولدرات معقدة، باش الرفع على GitHub يكون ساهل.

---

## 🚀 الرفع على GitHub + النشر على Vercel

### الطريقة 1 — GitHub Web (الأسهل)
1. فك ضغط هذا الملف.
2. روح لـ repo ديالك على github.com → **Add file → Upload files**.
3. **حدد كل الملفات** اللي خرجو من الـ zip و drag-drop ـهم مرة واحدة.
   ⚠️ كل الملفات فالـ root، ما كاينش subfolders، باش ما يضيع والو.
4. Commit changes.
5. على [vercel.com/new](https://vercel.com/new) → import the repo → **Deploy**.
   Vercel غادي يكتشف Vite automatically.

### الطريقة 2 — Git (recommended)
```bash
git clone https://github.com/YOUR_USER/YOUR_REPO.git
cd YOUR_REPO
# copy all files from this zip into the repo folder
git add .
git commit -m "Excellence Emballage site"
git push
```

## 💻 Local development

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → outputs to dist/
npm run preview
```

## 📁 الملفات

```
.
├── index.html       ← entry HTML
├── main.tsx         ← React entry
├── App.tsx          ← الصفحة كاملة
├── index.css        ← Tailwind v4 + theme (royal blue + yellow)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── vercel.json      ← Vercel config
├── logo.png
├── plastic.jpg
├── glass.jpg
├── cosmetics.png
└── boxes.png
```

## 📞 Contact (مخزنين فـ App.tsx)

- WhatsApp / Phone: **+213 559 92 26 10**
- Facebook: ExcellenceEmballage
- Instagram: excellence.emballage
- Address: M8VX+WJC Rue Mascara, Oran
