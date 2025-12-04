# شرح HTML - دليل شامل ومبسط

## ما هو HTML؟
HTML = HyperText Markup Language (لغة ترميز النصوص التشعبية)
- هي اللغة الأساسية لبناء صفحات الويب
- تحدد **المحتوى** و**البنية** للموقع
- مثل الهيكل العظمي للمبنى

---

## شرح كل سطر في ملف index.html

### السطور 1-2: إعلان نوع المستند
```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
```
- `<!DOCTYPE html>`: يخبر المتصفح أن هذا ملف HTML5
- `<html>`: العنصر الرئيسي لكل صفحة HTML
- `lang="ar"`: اللغة العربية
- `dir="rtl"`: الاتجاه من اليمين لليسار (Right to Left)

### السطور 3-12: قسم Head (الرأس)
```html
<head>
```
- `<head>`: معلومات عن الصفحة (لا تظهر للمستخدم)

```html
<meta charset="UTF-8">
```
- `meta`: معلومات إضافية
- `charset="UTF-8"`: ترميز الأحرف (يدعم العربية)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `viewport`: إعدادات الشاشة
- `width=device-width`: عرض الصفحة = عرض الجهاز
- `initial-scale=1.0`: التكبير الافتراضي = 100%

```html
<meta name="description" content="...">
```
- وصف الصفحة (يظهر في محركات البحث)

```html
<title>الذكاء الاصطناعي وتطبيقاته</title>
```
- عنوان الصفحة (يظهر في تبويب المتصفح)

```html
<link rel="stylesheet" href="style.css">
```
- ربط ملف CSS (التنسيقات)

```html
<link href="https://fonts.googleapis.com/css2?family=Cairo...">
```
- استيراد خط من Google Fonts

### السطور 13-28: Header (الهيدر)
```html
<body>
```
- `<body>`: جسم الصفحة (كل ما يظهر للمستخدم)

```html
<!-- Header Section -->
```
- `<!-- -->`: تعليق (لا يظهر في الصفحة)

```html
<header class="header">
```
- `<header>`: قسم الهيدر (القائمة العلوية)
- `class="header"`: اسم الكلاس (للتنسيق)

```html
<div class="container">
```
- `<div>`: حاوية/صندوق (لتجميع العناصر)
- `class="container"`: كلاس للتنسيق

```html
<h1 class="logo">الذكاء الاصطناعي</h1>
```
- `<h1>`: عنوان رئيسي (أكبر عنوان)
- النص: "الذكاء الاصطناعي"

```html
<nav class="nav">
```
- `<nav>`: قسم التنقل (القائمة)

```html
<ul class="nav-list">
```
- `<ul>`: قائمة غير مرتبة (Unordered List)
- النقاط تظهر كدوائر

```html
<li><a href="#intro" class="nav-link">مقدمة</a></li>
```
- `<li>`: عنصر في القائمة (List Item)
- `<a>`: رابط (Anchor)
- `href="#intro"`: الرابط يشير لقسم id="intro"
- النص: "مقدمة"

### السطور 30-36: Hero Section (القسم الرئيسي)
```html
<section class="hero">
```
- `<section>`: قسم من الصفحة

```html
<h2 class="hero-title">...</h2>
```
- `<h2>`: عنوان ثانوي (أصغر من h1)

```html
<p class="hero-subtitle">...</p>
```
- `<p>`: فقرة (Paragraph)

### السطور 38-58: Introduction Section (قسم المقدمة)
```html
<section id="intro" class="section intro-section">
```
- `id="intro"`: معرف فريد (للربط من القائمة)

```html
<div class="content-wrapper">
```
- حاوية لتجميع المحتوى

```html
<img src="..." alt="..." class="intro-image">
```
- `<img>`: صورة
- `src`: رابط الصورة
- `alt`: نص بديل (للإعاقة البصرية)

```html
<ul>
    <li>التعلم الآلي</li>
    <li>معالجة اللغة الطبيعية</li>
</ul>
```
- قائمة غير مرتبة
- كل `<li>` = نقطة في القائمة

### السطور 60-113: Benefits Section (قسم المميزات)
```html
<section id="benefits" class="section benefits-section">
```
- قسم المميزات

```html
<div class="benefits-grid">
```
- شبكة/جدول للمميزات

```html
<div class="benefit-card">
    <h3>الكفاءة والدقة</h3>
    <p>...</p>
</div>
```
- `<h3>`: عنوان ثالثي
- كل `benefit-card` = بطاقة مميزة واحدة

```html
<table>
    <thead>
        <tr>
            <th>المهمة</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>تحليل البيانات</td>
        </tr>
    </tbody>
</table>
```
- `<table>`: جدول
- `<thead>`: رأس الجدول
- `<tbody>`: جسم الجدول
- `<tr>`: صف (Table Row)
- `<th>`: عنوان عمود (Table Header)
- `<td>`: خلية (Table Data)

### السطور 115-188: Applications Section (قسم التطبيقات)
```html
<div class="application-card">
```
- بطاقة تطبيق

```html
<ol>
    <li>تشخيص الأمراض</li>
    <li>تطوير أدوية</li>
</ol>
```
- `<ol>`: قائمة مرتبة (Ordered List)
- الأرقام تظهر تلقائياً (1, 2, 3...)

### السطور 190-215: Challenges Section (قسم التحديات)
```html
<ul class="challenges-list">
```
- قائمة التحديات

```html
<strong>تكلفة التطوير:</strong>
```
- `<strong>`: نص عريض/مهم

### السطور 217-237: Contact Form (نموذج التواصل)
```html
<form class="contact-form">
```
- `<form>`: نموذج (لجمع البيانات)

```html
<div class="form-group">
    <label for="name">الاسم</label>
    <input type="text" id="name" name="name" placeholder="أدخل اسمك" required>
</div>
```
- `<label>`: تسمية للحقل
- `for="name"`: يربط التسمية بالحقل id="name"
- `<input>`: حقل إدخال
- `type="text"`: نوع نص
- `id="name"`: معرف الحقل
- `name="name"`: اسم الحقل (للإرسال)
- `placeholder`: نص توضيحي
- `required`: مطلوب (لا يمكن تركه فارغاً)

```html
<input type="email" id="email" ...>
```
- `type="email"`: نوع بريد إلكتروني (يتحقق تلقائياً)

```html
<textarea id="message" name="message" rows="5" ...></textarea>
```
- `<textarea>`: حقل نص متعدد الأسطر
- `rows="5"`: عدد الأسطر

```html
<button type="submit" class="submit-btn">إرسال</button>
```
- `<button>`: زر
- `type="submit"`: زر إرسال النموذج

### السطور 239-252: Footer (التذييل)
```html
<footer class="footer">
```
- `<footer>`: تذييل الصفحة

```html
<p class="copyright">&copy; 2025 ...</p>
```
- `&copy;`: رمز حقوق النشر ©

```html
<a href="#" class="social-link" aria-label="فيسبوك">فيسبوك</a>
```
- `href="#"`: رابط فارغ (لا يذهب لأي مكان)
- `aria-label`: وصف للقارئ الصوتي (للإعاقة)

### السطور 254-255: ربط JavaScript
```html
<script src="script.js"></script>
```
- `<script>`: ربط ملف JavaScript
- `src="script.js"`: اسم الملف

---

## ملخص العناصر الأساسية:

| العنصر | الوصف | مثال |
|--------|-------|------|
| `<h1>` إلى `<h6>` | عناوين (من الأكبر للأصغر) | `<h1>عنوان</h1>` |
| `<p>` | فقرة نصية | `<p>نص</p>` |
| `<div>` | حاوية/صندوق | `<div>...</div>` |
| `<span>` | نص صغير | `<span>نص</span>` |
| `<a>` | رابط | `<a href="#">رابط</a>` |
| `<img>` | صورة | `<img src="..." alt="...">` |
| `<ul>` | قائمة غير مرتبة | `<ul><li>نقطة</li></ul>` |
| `<ol>` | قائمة مرتبة | `<ol><li>نقطة</li></ol>` |
| `<table>` | جدول | `<table><tr><td>...</td></tr></table>` |
| `<form>` | نموذج | `<form>...</form>` |
| `<input>` | حقل إدخال | `<input type="text">` |
| `<button>` | زر | `<button>اضغط</button>` |

---

## الخصائص (Attributes) المهمة:

| الخاصية | الوصف | مثال |
|---------|-------|------|
| `id` | معرف فريد | `id="intro"` |
| `class` | كلاس (للتنسيق) | `class="header"` |
| `href` | رابط | `href="#intro"` |
| `src` | مصدر (صورة/ملف) | `src="image.jpg"` |
| `alt` | نص بديل | `alt="وصف الصورة"` |
| `type` | نوع العنصر | `type="text"` |
| `required` | مطلوب | `required` |

---

## نصائح للمناقشة:

### إذا سألك الدكتور عن HTML:
1. **ما هو HTML؟**
   - لغة ترميز لبناء صفحات الويب
   - تحدد المحتوى والبنية

2. **ما الفرق بين HTML و CSS و JavaScript؟**
   - HTML: المحتوى والبنية
   - CSS: التصميم والتنسيق
   - JavaScript: التفاعلية والحركة

3. **ما هي العناصر الأساسية؟**
   - `<div>`: حاوية
   - `<h1>`: عنوان
   - `<p>`: فقرة
   - `<a>`: رابط
   - `<img>`: صورة

4. **ما الفرق بين `id` و `class`؟**
   - `id`: فريد (يستخدم مرة واحدة)
   - `class`: يمكن استخدامه عدة مرات

5. **ما هو `alt` في الصور؟**
   - نص بديل يظهر لو الصورة لم تحمل
   - مهم للإعاقة البصرية

---

## أمثلة عملية:

### مثال 1: رابط بسيط
```html
<a href="#intro">اذهب للمقدمة</a>
```
- عند الضغط، ينتقل لقسم id="intro"

### مثال 2: صورة مع نص بديل
```html
<img src="photo.jpg" alt="صورة الذكاء الاصطناعي">
```
- لو الصورة لم تحمل، يظهر النص

### مثال 3: قائمة
```html
<ul>
    <li>نقطة 1</li>
    <li>نقطة 2</li>
</ul>
```
- تظهر كنقاط

---

## الخلاصة:
- HTML = الهيكل والمحتوى
- كل عنصر له وظيفة محددة
- الخصائص تضيف معلومات إضافية
- التعليقات تساعد في فهم الكود

