# شرح CSS - دليل شامل ومبسط

## ما هو CSS؟
CSS = Cascading Style Sheets (أوراق الأنماط المتتالية)
- يتحكم في **التصميم** و**التنسيق** للموقع
- يحدد الألوان، الأحجام، المسافات، الأنيميشن
- مثل الدهان والديكور للمبنى

---

## شرح الملف style.css

### السطور 1-6: Reset (إعادة التعيين)
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- `*`: كل العناصر (selector عام)
- `margin: 0`: إزالة المسافات الخارجية
- `padding: 0`: إزالة المسافات الداخلية
- `box-sizing: border-box`: الحجم يشمل الـ padding والـ border

**لماذا؟** لإزالة التنسيقات الافتراضية للمتصفح

### السطور 8-22: CSS Variables (المتغيرات)
```css
:root {
    --primary-color: #1e3a8a;
    --accent-color: #2563eb;
    --bg-color: #ffffff;
}
```
- `:root`: الجذر (كل الصفحة)
- `--primary-color`: متغير اسمه primary-color
- `#1e3a8a`: قيمة اللون (أزرق داكن)
- `var(--primary-color)`: استخدام المتغير

**لماذا؟** لتسهيل تغيير الألوان من مكان واحد

### السطور 24-30: Body (جسم الصفحة)
```css
body {
    font-family: 'Cairo', sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--bg-color);
    overflow-x: hidden;
}
```
- `font-family`: نوع الخط
- `line-height`: ارتفاع السطر (1.6 = 160%)
- `color`: لون النص
- `background-color`: لون الخلفية
- `overflow-x: hidden`: إخفاء التمرير الأفقي

### السطور 32-36: Container (الحاوية)
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```
- `max-width`: أقصى عرض (1200 بكسل)
- `margin: 0 auto`: مسافة علوية وسفلية 0، يمين ويسار تلقائي (توسيط)
- `padding`: مسافة داخلية

### السطور 38-49: Header (الهيدر)
```css
.header {
    background: var(--bg-color);
    color: var(--text-dark);
    padding: 1.2rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}
```
- `background`: لون الخلفية
- `padding: 1.2rem 0`: مسافة علوية وسفلية (1.2rem = 19.2px)
- `position: sticky`: ثابت عند التمرير
- `top: 0`: يلتصق بالأعلى
- `z-index: 1000`: الترتيب (الأعلى يظهر فوق)

### السطور 51-60: Animation (الأنيميشن)
```css
@keyframes headerSlide {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
```
- `@keyframes`: تعريف أنيميشن
- `headerSlide`: اسم الأنيميشن
- `from`: الحالة الأولى (من فوق، شفاف)
- `to`: الحالة النهائية (في مكانه، ظاهر)
- `transform: translateY(-100%)`: حركة من فوق
- `opacity`: الشفافية (0 = شفاف، 1 = ظاهر)

### السطور 68-91: Logo (الشعار)
```css
.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-dark);
    transition: all 0.4s ease;
}
```
- `font-size`: حجم الخط (1.8rem = 28.8px)
- `font-weight: 700`: سماكة الخط (عريض)
- `transition`: انتقال سلس (0.4 ثانية)

```css
.logo:hover {
    color: var(--accent-color);
    transform: scale(1.05);
}
```
- `:hover`: عند المرور بالماوس
- `scale(1.05)`: تكبير 5%

### السطور 93-97: Navigation List (قائمة التنقل)
```css
.nav-list {
    display: flex;
    list-style: none;
    gap: 2rem;
}
```
- `display: flex`: تخطيط مرن (عناصر بجانب بعض)
- `list-style: none`: إزالة النقاط
- `gap: 2rem`: مسافة بين العناصر

### السطور 99-163: Navigation Links (روابط التنقل)
```css
.nav-link {
    color: var(--text-medium);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: all 0.4s ease;
}
```
- `text-decoration: none`: إزالة الخط تحت الرابط
- `border-radius: 6px`: زوايا دائرية

```css
.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background: var(--accent-color);
}
```
- `::after`: عنصر وهمي بعد الرابط
- `content: ''`: محتوى فارغ (خط)
- `position: absolute`: موضع مطلق
- `width: 0`: العرض صفر (مخفي)

```css
.nav-link:hover::after {
    width: 80%;
}
```
- عند المرور، يصبح العرض 80% (يظهر خط)

### السطور 165-199: Hero Section (القسم الرئيسي)
```css
.hero {
    background: var(--bg-light);
    padding: 5rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}
```
- `text-align: center`: توسيط النص
- `position: relative`: موضع نسبي (للوضع العناصر داخله)
- `overflow: hidden`: إخفاء ما يخرج

```css
.hero::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(...);
    animation: float 8s ease-in-out infinite;
}
```
- `::before`: عنصر وهمي قبل المحتوى
- `radial-gradient`: تدرج دائري
- `animation`: أنيميشن اسمه float
- `infinite`: لا نهائي (يكرر)

### السطور 226-270: Section Title (عنوان القسم)
```css
.section-title {
    font-size: 2.2rem;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    padding-bottom: 1.5rem;
}
```
- `margin-bottom`: مسافة من الأسفل
- `position: relative`: لرسم خط تحته

```css
.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 80px;
    height: 3px;
    background: var(--accent-color);
}
```
- خط أزرق تحت العنوان

### السطور 288-350: Intro Section (قسم المقدمة)
```css
.intro-text {
    flex: 1;
    min-width: 300px;
    font-size: 1.1rem;
    line-height: 1.8;
}
```
- `flex: 1`: يأخذ المساحة المتاحة
- `min-width`: أقل عرض

```css
.intro-image {
    border-radius: 12px;
    box-shadow: 0 8px 25px var(--shadow);
    transition: all 0.5s ease;
}
```
- `box-shadow`: ظل (x, y, blur, color)
- `transition`: انتقال سلس

```css
.intro-image:hover {
    transform: scale(1.05) rotate(1deg);
}
```
- عند المرور: تكبير 5% + دوران درجة واحدة

### السطور 352-431: Features List (قائمة المميزات)
```css
.features-list {
    background:
```css
.features-list li::before {
    content: '✓';
    color: var(--accent-color);
}
```
- `::before`: علامة صح قبل كل نقطة

### السطور 433-496: Benefits Section (قسم المميزات)
```css
.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
```
- `display: grid`: تخطيط شبكي
- `repeat(auto-fit, minmax(250px, 1fr))`: أعمدة تلقائية (أقل عرض 250px)
- `gap`: مسافة بين العناصر

```css
.benefit-card {
    padding: 2.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 12px var(--shadow);
    border-top: 3px solid var(--accent-color);
}
```
- `border-top`: حد علوي أزرق

```css
.benefit-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 25px var(--shadow-hover);
}
```
- عند المرور: يتحرك لأعلى 6px + ظل أكبر

### السطور 498-578: Comparison Table (جدول المقارنة)
```css
table {
    width: 100%;
    border-collapse: collapse;
}
```
- `width: 100%`: عرض كامل
- `border-collapse: collapse`: دمج الحدود

```css
thead {
    background: var(--bg-light);
    border-bottom: 2px solid var(--accent-color);
}
```
- رأس الجدول بخلفية فاتحة + حد أزرق

```css
tbody tr:hover {
    background: var(--bg-light);
    transform: scale(1.01);
}
```
- عند المرور على الصف: خلفية فاتحة + تكبير 1%

### السطور 580-697: Applications Section (قسم التطبيقات)
```css
.application-card {
    border-right: 3px solid var(--accent-color);
    transition: all 0.4s ease;
}
```
- حد أيمن أزرق

```css
.application-card:hover {
    transform: translateX(-8px);
    box-shadow: 0 8px 30px var(--shadow-hover);
}
```
- عند المرور: يتحرك لليسار 8px

### السطور 699-930: Challenges Section (قسم التحديات)
```css
.challenges-list li {
    border-right: 3px solid var(--text-light);
    transition: all 0.3s ease;
}
```
- حد أيمن رمادي

```css
.challenges-list li:hover {
    border-right-color: var(--accent-color);
    transform: translateX(-5px);
}
```
- عند المرور: الحد يصبح أزرق + يتحرك لليسار

### السطور 932-1010: Footer (التذييل)
```css
.footer {
    background: var(--bg-light);
    border-top: 1px solid var(--border-color);
}
```
- خلفية فاتحة + حد علوي

### السطور 1012-1086: Contact Form (نموذج التواصل)
```css
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px var(--shadow);
}
```
- عرض أقصى 600px + توسيط + ظل

```css
.form-group input:focus {
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```
- عند التركيز: حد أزرق + ظل أزرق فاتح

```css
.submit-btn {
    background: var(--accent-color);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
```
- زر أزرق + مؤشر يد

```css
.submit-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
}
```
- عند المرور: لون أغمق + يتحرك لأعلى

### السطور 1088-1126: Responsive Design (التصميم المتجاوب)
```css
@media (max-width: 768px) {
    .hero-title {
        font-size: 1.8rem;
    }
}
```
- `@media`: استعلام وسائط
- `max-width: 768px`: للشاشات أقل من 768px
- داخل الأقواس: تنسيقات خاصة للجوال

### السطور 1128-1140: Smooth Scrolling (التمرير السلس)
```css
html {
    scroll-behavior: smooth;
}
```
- التمرير يكون سلس (بدون قفز)

### السطور 1142-1150: Accessibility (إمكانية الوصول)
```css
a:focus {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
}
```
- عند التركيز (بالكيبورد): إطار أزرق

### السطور 1152-1400: Additional Styles (تنسيقات إضافية)
```css
.back-to-top {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    opacity: 0;
    visibility: hidden;
}
```
- زر ثابت في الأسفل
- مخفي افتراضياً

```css
.back-to-top.show {
    opacity: 1;
    visibility: visible;
}
```
- عند إضافة كلاس `show`: يظهر

---

## مصطلحات CSS الأساسية:

| المصطلح | الوصف | مثال |
|---------|-------|------|
| `selector` | اختيار العنصر | `.header`, `#intro` |
| `property` | الخاصية | `color`, `font-size` |
| `value` | القيمة | `red`, `20px` |
| `margin` | مسافة خارجية | `margin: 10px` |
| `padding` | مسافة داخلية | `padding: 10px` |
| `display` | نوع العرض | `flex`, `grid`, `block` |
| `position` | الموضع | `relative`, `absolute`, `fixed` |
| `transition` | انتقال سلس | `transition: all 0.3s` |
| `animation` | أنيميشن | `animation: slide 1s` |
| `hover` | عند المرور | `:hover` |
| `focus` | عند التركيز | `:focus` |

---

## الألوان في CSS:

| الطريقة | الوصف | مثال |
|---------|-------|------|
| `#1e3a8a` | Hex (ست عشري) | `color: #1e3a8a` |
| `rgb(30, 58, 138)` | RGB | `color: rgb(30, 58, 138)` |
| `rgba(30, 58, 138, 0.5)` | RGB + شفافية | `rgba(..., 0.5)` |
| `var(--color)` | متغير | `color: var(--primary-color)` |

---

## الوحدات (Units):

| الوحدة | الوصف | مثال |
|--------|-------|------|
| `px` | بكسل (ثابت) | `20px` |
| `rem` | نسبة لحجم الخط الأساسي | `1.5rem` (24px) |
| `%` | نسبة | `50%` |
| `vh` | ارتفاع الشاشة | `100vh` (كامل الشاشة) |
| `vw` | عرض الشاشة | `50vw` (نصف الشاشة) |

---

## نصائح للمناقشة:

### إذا سألك الدكتور عن CSS:

1. **ما هو CSS؟**
   - لغة تنسيق للتحكم في تصميم الموقع
   - يحدد الألوان، الأحجام، المسافات

2. **ما الفرق بين `margin` و `padding`؟**
   - `margin`: مسافة خارجية (بين العناصر)
   - `padding`: مسافة داخلية (داخل العنصر)

3. **ما هو `flex` و `grid`؟**
   - `flex`: تخطيط مرن (عناصر بجانب بعض)
   - `grid`: تخطيط شبكي (صفوف وأعمدة)

4. **ما هي الأنيميشن؟**
   - حركات وتأثيرات بصرية
   - `@keyframes`: تعريف الحركة
   - `animation`: تطبيق الحركة

5. **ما هو Responsive Design؟**
   - تصميم يتكيف مع حجم الشاشة
   - `@media`: استعلامات للشاشات المختلفة

---

## الخلاصة:
- CSS = التصميم والتنسيق
- Selectors: اختيار العناصر
- Properties: الخصائص (لون، حجم، مسافة)
- Values: القيم (#1e3a8a, 20px)
- Animations: الحركات والتأثيرات

