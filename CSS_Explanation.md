# شرح CSS - دليل شامل ومبسط

## ما هو CSS؟
CSS = Cascading Style Sheets (أوراق الأنماط المتتالية)
- يتحكم في **التصميم** و**التنسيق** للموقع
- يحدد الألوان، الأحجام، المسافات، الأنيميشن
- مثل الدهان والديكور للمبنى

---

## شرح الملف style.css

### السطور 1-5: Reset (إعادة التعيين)
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

### السطور 7-20: CSS Variables (المتغيرات) - Dark Theme
```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --primary-light: #818cf8;
    --bg-color: #0a0a0f;
    --bg-light: #1a1a24;
    --bg-lighter: #252535;
    --text-color: #f8f9fa;
    --text-light: #cbd5e1;
    --text-lighter: #94a3b8;
    --border-color: #2d2d3a;
    --shadow: rgba(99, 102, 241, 0.15);
    --shadow-hover: rgba(99, 102, 241, 0.25);
}
```
- `:root`: الجذر (كل الصفحة)
- `--primary-color`: اللون الأساسي (#6366f1 - بنفسجي/أزرق)
- `--primary-dark`: اللون الأساسي الداكن (#4f46e5)
- `--primary-light`: اللون الأساسي الفاتح (#818cf8)
- `--bg-color`: لون الخلفية الرئيسي (#0a0a0f - أسود داكن جداً)
- `--bg-light`: لون خلفية فاتح (#1a1a24 - رمادي داكن)
- `--bg-lighter`: لون خلفية أفتح (#252535)
- `--text-color`: لون النص الرئيسي (#f8f9fa - أبيض فاتح)
- `--text-light`: لون نص فاتح (#cbd5e1 - رمادي فاتح)
- `--text-lighter`: لون نص أفتح (#94a3b8)
- `--border-color`: لون الحدود (#2d2d3a - رمادي داكن)
- `--shadow`: لون الظل (شفاف بنفسجي)
- `--shadow-hover`: لون الظل عند المرور
- `var(--primary-color)`: استخدام المتغير

**ملاحظة مهمة:** التصميم يستخدم **Dark Theme** (خلفية داكنة ونص فاتح) ليكون مريح للعين وحديث

**لماذا؟** لتسهيل تغيير الألوان من مكان واحد

### السطور 22-28: Body (جسم الصفحة)
```css
body {
    font-family: 'Cairo', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
    overflow-x: hidden;
}
```
- `font-family`: نوع الخط (Cairo - يدعم العربية)
- `line-height`: ارتفاع السطر (1.6 = 160%)
- `color`: لون النص (أبيض فاتح)
- `background-color`: لون الخلفية (أسود داكن)
- `overflow-x: hidden`: إخفاء التمرير الأفقي

### السطور 30-34: Container (الحاوية)
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```
- `max-width`: أقصى عرض (1200 بكسل)
- `margin: 0 auto`: مسافة علوية وسفلية 0، يمين ويسار تلقائي (توسيط)
- `padding`: مسافة داخلية (0 علوي/سفلي، 20px يمين/يسار)

### السطور 36-38: Smooth Scrolling (التمرير السلس)
```css
html {
    scroll-behavior: smooth;
}
```
- التمرير يكون سلس (بدون قفز)

### السطر 40: Animation (الأنيميشن)
```css
@keyframes fadeIn { 
    from { opacity: 0; transform: translateY(20px); } 
    to { opacity: 1; transform: translateY(0); } 
}
```
- `@keyframes`: تعريف أنيميشن
- `fadeIn`: اسم الأنيميشن
- `from`: الحالة الأولى (شفاف، من تحت)
- `to`: الحالة النهائية (ظاهر، في مكانه)
- `opacity`: الشفافية (0 = شفاف، 1 = ظاهر)
- `transform: translateY`: حركة عمودية

### السطور 42-50: Header (الهيدر)
```css
.header {
    background: var(--bg-color);
    padding: 1.2rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px var(--shadow);
    border-bottom: 1px solid var(--border-color);
}
```
- `background`: لون الخلفية (أسود داكن)
- `padding: 1.2rem 0`: مسافة علوية وسفلية (1.2rem = 19.2px)
- `position: sticky`: ثابت عند التمرير
- `top: 0`: يلتصق بالأعلى
- `z-index: 1000`: الترتيب (الأعلى يظهر فوق)
- `box-shadow`: ظل خفيف
- `border-bottom`: حد سفلي

### السطور 52-68: Logo (الشعار)
```css
.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-color);
    transition: all 0.3s ease;
}
```
- `font-size`: حجم الخط (1.5rem = 24px)
- `font-weight: 700`: سماكة الخط (عريض)
- `color`: لون النص (أبيض فاتح)
- `transition`: انتقال سلس (0.3 ثانية)

```css
.logo:hover {
    color: var(--primary-color);
    transform: scale(1.05);
}
```
- `:hover`: عند المرور بالماوس
- `color`: يصبح بنفسجي/أزرق
- `scale(1.05)`: تكبير 5%

### السطور 70-75: Navigation List (قائمة التنقل)
```css
.nav-list {
    display: flex;
    list-style: none;
    gap: 1.2rem;
    flex-wrap: wrap;
}
```
- `display: flex`: تخطيط مرن (عناصر بجانب بعض)
- `list-style: none`: إزالة النقاط
- `gap: 1.2rem`: مسافة بين العناصر
- `flex-wrap: wrap`: التفاف عند الحاجة

### السطور 77-91: Navigation Links (روابط التنقل)
```css
.nav-link {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
}
```
- `color`: لون النص (رمادي فاتح)
- `text-decoration: none`: إزالة الخط تحت الرابط
- `font-weight: 500`: سماكة متوسطة
- `padding`: مسافة داخلية
- `border-radius: 6px`: زوايا دائرية
- `transition`: انتقال سلس
- `font-size`: حجم الخط (0.9rem)

```css
.nav-link:hover, .nav-link.active {
    color: var(--primary-color);
    background-color: var(--bg-light);
    transform: translateY(-2px);
}
```
- عند المرور أو عند النشاط: لون بنفسجي/أزرق + خلفية داكنة + حركة لأعلى

### السطور 93-115: Hero Section (القسم الرئيسي)
```css
.hero {
    background: var(--bg-light);
    padding: 3.5rem 0;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
}
```
- `background`: خلفية رمادية داكنة
- `padding: 3.5rem 0`: مسافة علوية وسفلية كبيرة
- `text-align: center`: توسيط النص
- `border-bottom`: حد سفلي

```css
.hero-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    font-weight: 700;
    color: var(--text-color);
    line-height: 1.3;
}
```
- `font-size`: حجم كبير (2rem = 32px)
- `font-weight: 700`: عريض
- `color`: أبيض فاتح
- `line-height`: ارتفاع السطر

```css
.hero-subtitle {
    font-size: 1rem;
    color: var(--text-light);
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
}
```
- `font-size`: حجم متوسط (1rem = 16px)
- `color`: رمادي فاتح
- `max-width`: أقصى عرض
- `margin: 0 auto`: توسيط

### السطور 117-142: Section (القسم العام)
```css
.section {
    padding: 3.5rem 0;
}
```
- مسافة علوية وسفلية للأقسام

```css
.section-title {
    font-size: 1.8rem;
    color: var(--text-color);
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    padding-bottom: 1rem;
    position: relative;
    line-height: 1.3;
}
```
- `font-size`: حجم كبير (1.8rem)
- `color`: أبيض فاتح
- `text-align: center`: توسيط
- `position: relative`: لرسم خط تحته

```css
.section-title::after { 
    content: ''; 
    position: absolute; 
    bottom: 0; 
    right: 50%; 
    transform: translateX(50%); 
    width: 80px; 
    height: 3px; 
    background: var(--primary-color); 
    border-radius: 2px; 
}
```
- `::after`: عنصر وهمي بعد العنوان
- خط بنفسجي/أزرق تحت العنوان (80px عرض، 3px ارتفاع)

```css
.section-intro {
    text-align: center;
    color: var(--text-light);
    font-size: 0.95rem;
    margin: 0 auto 2rem;
    max-width: 750px;
    line-height: 1.7;
    padding: 0 1rem;
}
```
- مقدمة القسم (موسطة، رمادية فاتحة)

### السطور 145-181: Content Wrapper & Intro Section
```css
.content-wrapper {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}
```
- `display: flex`: تخطيط مرن
- `gap`: مسافة بين العناصر
- `flex-wrap: wrap`: التفاف عند الحاجة

```css
.intro-text {
    flex: 1;
    min-width: 280px;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-light);
}
```
- `flex: 1`: يأخذ المساحة المتاحة
- `min-width`: أقل عرض
- `color`: رمادي فاتح

```css
.intro-image {
    flex: 1;
    min-width: 300px;
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 25px var(--shadow);
    transition: all 0.3s ease;
    align-self: flex-start;
    margin-top: 0.5rem;
}
```
- `border-radius: 12px`: زوايا دائرية
- `box-shadow`: ظل
- `transition`: انتقال سلس

```css
.intro-image:hover {
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.3);
    transform: scale(1.05) translateY(-5px);
}
```
- عند المرور: ظل أكبر + تكبير + حركة لأعلى

### السطور 183-222: Features List (قائمة المميزات)
```css
.features-list {
    background: var(--bg-light);
    padding: 2rem;
    border-radius: 10px;
    margin-top: 1.5rem;
    box-shadow: 0 2px 15px var(--shadow);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}
```
- خلفية رمادية داكنة + ظل + حد

```css
.features-list:hover {
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.2);
    transform: translateY(-3px);
}
```
- عند المرور: ظل أكبر + حركة لأعلى

```css
.features-list h3 { 
    color: var(--text-color); 
    margin-bottom: 1.2rem; 
    font-size: 1.2rem; 
    font-weight: 600; 
}
```

```css
.features-list ul {
    list-style: none;
    padding-right: 1.5rem;
}
```

```css
.features-list li {
    padding: 0.6rem 2rem 0.6rem 1.8rem;
    position: relative;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    line-height: 1.6;
}
```

```css
.features-list li:hover {
    color: var(--primary-color);
    transform: translateX(-5px);
    padding-right: 2.5rem;
}
```
- عند المرور: لون بنفسجي/أزرق + حركة لليسار

```css
.features-list li::before { 
    content: '✓'; 
    position: absolute; 
    right: 0.5rem; 
    color: var(--primary-color); 
    font-weight: bold; 
    font-size: 1.3rem; 
    transition: all 0.3s ease; 
}
```
- `::before`: علامة صح قبل كل نقطة

```css
.features-list li:hover::before { 
    transform: scale(1.2) rotate(5deg); 
    color: var(--primary-dark); 
}
```
- عند المرور: تكبير + دوران

### السطور 225-263: Benefits Grid & Cards
```css
.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}
```
- `display: grid`: تخطيط شبكي
- `repeat(auto-fit, minmax(240px, 1fr))`: أعمدة تلقائية (أقل عرض 240px)
- `gap`: مسافة بين العناصر

```css
.benefit-card {
    background: var(--bg-color);
    padding: 1.8rem;
    border-radius: 10px;
    box-shadow: 0 2px 12px var(--shadow);
    border-top: 3px solid var(--primary-color);
    transition: all 0.3s ease;
}
```
- خلفية سوداء داكنة + حد علوي بنفسجي/أزرق

```css
.benefit-card:hover {
    box-shadow: 0 10px 35px rgba(99, 102, 241, 0.25);
    transform: translateY(-8px);
    border-top-width: 4px;
}
```
- عند المرور: ظل أكبر + حركة لأعلى + حد أسمك

```css
.benefit-card h3 {
    color: var(--text-color);
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
    font-weight: 600;
    transition: color 0.3s ease;
}
```

```css
.benefit-card:hover h3 { 
    color: var(--primary-color); 
}
```
- عند المرور: العنوان يصبح بنفسجي/أزرق

```css
.benefit-card p {
    color: var(--text-light);
    line-height: 1.6;
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
}
```

### السطور 265-318: Comparison Table (جدول المقارنة)
```css
.comparison-table {
    margin-top: 2rem;
    background: var(--bg-color);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px var(--shadow);
    transition: all 0.3s ease;
}
```

```css
.comparison-table:hover {
    box-shadow: 0 8px 35px rgba(99, 102, 241, 0.2);
    transform: translateY(-3px);
}
```

```css
.comparison-table h3 { 
    color: var(--text-color); 
    margin-bottom: 1.2rem; 
    text-align: center; 
    font-size: 1.2rem; 
    font-weight: 600; 
}
```

```css
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    background: var(--bg-color);
}
```
- `width: 100%`: عرض كامل
- `border-collapse: collapse`: دمج الحدود

```css
th {
    padding: 1rem;
    text-align: center;
    font-weight: 600;
    color: var(--text-color);
    background: var(--bg-color);
    border-bottom: 2px solid var(--primary-color);
    font-size: 0.95rem;
}
```
- رأس الجدول: أبيض فاتح + حد سفلي بنفسجي/أزرق

```css
td {
    padding: 1rem;
    text-align: center;
    color: var(--text-light);
    border-bottom: 1px solid var(--border-color);
    background: var(--bg-color);
    font-size: 0.9rem;
}
```
- خلايا الجدول: رمادي فاتح + حد سفلي

```css
tbody tr {
    transition: all 0.3s ease;
}
```

```css
tbody tr:hover {
    transform: scale(1.02);
}
```
- عند المرور: تكبير بسيط

```css
tbody tr:hover td {
    background: rgba(99, 102, 241, 0.12);
    color: var(--text-color);
}
```
- عند المرور: خلفية بنفسجية فاتحة + نص أبيض

### السطور 322-407: Application Cards
```css
.application-card {
    margin-bottom: 2rem;
    background: var(--bg-color);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 12px var(--shadow);
    border-right: 3px solid var(--primary-color);
    transition: all 0.3s ease;
}
```
- خلفية سوداء داكنة + حد أيمن بنفسجي/أزرق

```css
.application-card:hover {
    box-shadow: 0 12px 40px rgba(99, 102, 241, 0.3);
}
```

```css
.application-card h3 {
    color: var(--text-color);
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    padding-bottom: 0.6rem;
    border-bottom: 2px solid var(--primary-color);
    font-weight: 600;
    line-height: 1.4;
    word-break: keep-all;
    transition: color 0.3s ease;
}
```

```css
.application-card:hover h3 { 
    color: var(--primary-color); 
}
```

```css
.app-content {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 1rem;
}
```

```css
.app-image {
    flex: 1;
    min-width: 300px;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 5px 20px var(--shadow);
    transition: all 0.3s ease;
    align-self: center;
    margin-top: 1.5rem;
}
```

```css
.app-image:hover {
    box-shadow: 0 15px 45px rgba(99, 102, 241, 0.35);
    transform: scale(1.06) translateY(-8px);
}
```

```css
.app-text {
    flex: 1;
    min-width: 0;
    overflow-wrap: break-word;
}
```

```css
.app-text p {
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
    color: var(--text-color);
    font-weight: 600;
    line-height: 1.6;
    word-break: keep-all;
}
```

```css
.app-text ol {
    padding-right: 1.5rem;
    color: var(--text-light);
}
```

```css
.app-text li {
    padding: 0.5rem 0;
    line-height: 1.6;
    transition: all 0.3s ease;
    font-size: 0.9rem;
}
```

```css
.app-text li::marker { 
    color: var(--primary-color); 
    font-weight: bold; 
}
```

```css
.app-text li:hover {
    color: var(--primary-color);
}
```

### السطور 409-456: Challenges Section
```css
.challenges-content {
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 15px var(--shadow);
    max-width: 850px;
    margin: 0 auto;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}
```

```css
.challenges-content:hover {
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.2);
    transform: translateY(-3px);
}
```

```css
.challenges-content > p { 
    font-size: 1rem; 
    margin-bottom: 1.5rem; 
    color: var(--text-color); 
    text-align: center; 
    font-weight: 600; 
    line-height: 1.6; 
}
```

```css
.challenges-list {
    list-style: none;
    padding: 0;
}
```

```css
.challenges-list li {
    padding: 1rem;
    margin-bottom: 1rem;
    background: var(--bg-light);
    border-right: 3px solid var(--text-light);
    border-radius: 8px;
    box-shadow: 0 1px 5px var(--shadow);
    transition: all 0.3s ease;
    line-height: 1.7;
    font-size: 0.9rem;
}
```
- خلفية رمادية داكنة + حد أيمن رمادي فاتح

```css
.challenge-note { 
    display: block; 
    margin-top: 0.6rem; 
    color: var(--text-lighter); 
    font-size: 0.85rem; 
    font-style: italic; 
    padding-top: 0.5rem; 
    border-top: 1px solid var(--border-color); 
    line-height: 1.6; 
}
```

```css
.challenges-list li:hover {
    background: var(--bg-color);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.25);
    border-right-color: var(--primary-color);
    border-right-width: 4px;
    transform: translateX(-8px) scale(1.02);
}
```
- عند المرور: خلفية سوداء + حد بنفسجي/أزرق + حركة + تكبير

```css
.challenges-list strong { 
    color: var(--text-color); 
    display: block; 
    margin-bottom: 0.4rem; 
    font-size: 0.95rem; 
    font-weight: 600; 
    transition: all 0.3s ease; 
}
```

```css
.challenges-list li:hover strong { 
    color: var(--primary-color); 
}
```

### السطور 458-527: Contact Form (نموذج التواصل)
```css
.contact-form {
    max-width: 550px;
    margin: 0 auto;
    background: var(--bg-color);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px var(--shadow);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}
```

```css
.contact-form:hover {
    box-shadow: 0 8px 35px rgba(99, 102, 241, 0.25);
    transform: translateY(-3px);
}
```

```css
.form-group {
    margin-bottom: 1.2rem;
}
```

```css
.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-color);
    font-weight: 600;
    font-size: 1rem;
}
```

```css
.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    font-family: 'Cairo', sans-serif;
    font-size: 1rem;
    color: var(--text-color);
    background: var(--bg-light);
    transition: all 0.3s ease;
    outline: none;
}
```
- خلفية رمادية داكنة + حد رمادي + نص أبيض فاتح

```css
.form-group input:focus, .form-group textarea:focus {
    border-color: var(--primary-color);
    background: var(--bg-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    transform: translateY(-2px);
}
```
- عند التركيز: حد بنفسجي/أزرق + خلفية سوداء + ظل + حركة

```css
.form-group textarea { 
    resize: vertical; 
    min-height: 120px; 
}
```

```css
.submit-btn {
    width: 100%;
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-family: 'Cairo', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
```
- زر بنفسجي/أزرق + نص أبيض

```css
.submit-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
```
- عند المرور: لون أغمق + حركة + ظل

### السطور 529-572: Footer (التذييل)
```css
.footer {
    background: var(--bg-light);
    color: var(--text-color);
    padding: 2rem 0;
    text-align: center;
    border-top: 1px solid var(--border-color);
}
```

```css
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}
```

```css
.copyright {
    margin: 0;
    color: var(--text-light);
    font-size: 0.95rem;
}
```

```css
.social-links {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
    justify-content: center;
}
```

```css
.social-link {
    color: var(--text-light);
    text-decoration: none;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
    font-size: 0.9rem;
}
```

```css
.social-link:hover {
    background-color: var(--bg-color);
    color: var(--primary-color);
    border-color: var(--primary-color);
}
```

### السطور 574-600: Back to Top Button
```css
.back-to-top {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 100;
    box-shadow: 0 4px 12px var(--shadow);
}
```
- `position: fixed`: ثابت في مكانه
- `bottom: 2rem; left: 2rem`: في الأسفل اليسار
- `opacity: 0; visibility: hidden`: مخفي افتراضياً
- `z-index: 100`: أقل من الفوتر
- زر دائري بنفسجي/أزرق

```css
.back-to-top.show { 
    opacity: 1; 
    visibility: visible; 
}
```
- `.show`: كلاس يضيفه JavaScript لإظهار الزر

```css
.back-to-top:hover { 
    background: var(--primary-dark); 
}
```

### السطور 596-600: Accessibility & Error States
```css
a:focus, button:focus { 
    outline: 2px solid var(--primary-color); 
    outline-offset: 2px; 
    border-radius: 4px; 
}
```
- عند التركيز (بالكيبورد): إطار بنفسجي/أزرق

```css
.form-group input.error, .form-group textarea.error { 
    border-color: #ef4444; 
    background-color: #fef2f2; 
}
```

```css
.error-message { 
    color: #ef4444; 
    font-size: 0.875rem; 
    margin-top: 0.5rem; 
}
```

### السطور 602-698: Responsive Design (التصميم المتجاوب)
```css
@media (max-width: 768px) {
    .header {
        padding: 0.8rem 0;
    }

    .header .container {
        flex-direction: column;
        gap: 0.8rem;
    }

    .logo {
        font-size: 1.3rem;
    }

    .nav-list {
        flex-direction: row;
        gap: 0.5rem;
        text-align: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .nav-link {
        font-size: 0.8rem;
        padding: 0.3rem 0.6rem;
    }

    .hero {
        padding: 2.5rem 0;
    }

    .hero-title {
        font-size: 1.5rem;
        padding: 0 1rem;
    }

    .hero-subtitle {
        font-size: 0.85rem;
        padding: 0 1rem;
    }

    .section {
        padding: 2.5rem 0;
    }

    .section-title {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        padding: 0 1rem;
    }

    .section-intro {
        font-size: 0.9rem;
        padding: 0 1rem;
    }

    .content-wrapper, .app-content {
        flex-direction: column;
        gap: 1.2rem;
    }

    .intro-image, .app-image {
        margin-top: 1rem;
        align-self: stretch;
    }

    .intro-text {
        font-size: 0.9rem;
    }

    .benefits-grid {
        grid-template-columns: 1fr;
        gap: 1.2rem;
    }

    .benefit-card, .application-card, .features-list, .challenges-content, .contact-form {
        padding: 1.5rem;
    }

    .footer {
        padding: 1.5rem 0;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    table {
        font-size: 0.85rem;
    }

    th, td {
        padding: 0.6rem 0.4rem;
    }
}
```
- `@media`: استعلام وسائط
- `max-width: 768px`: للشاشات أقل من 768px
- داخل الأقواس: تنسيقات خاصة للجوال
- تقليل الأحجام والمسافات
- تغيير التخطيط من flex إلى column
- Grid يصبح عمود واحد

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
| `position` | الموضع | `relative`, `absolute`, `fixed`, `sticky` |
| `transition` | انتقال سلس | `transition: all 0.3s` |
| `animation` | أنيميشن | `animation: slide 1s` |
| `hover` | عند المرور | `:hover` |
| `focus` | عند التركيز | `:focus` |
| `::before` | عنصر وهمي قبل | `::before` |
| `::after` | عنصر وهمي بعد | `::after` |
| `var()` | استخدام متغير | `color: var(--primary-color)` |

---

## الألوان في CSS:

| الطريقة | الوصف | مثال |
|---------|-------|------|
| `#6366f1` | Hex (ست عشري) | `color: #6366f1` |
| `rgb(99, 102, 241)` | RGB | `color: rgb(99, 102, 241)` |
| `rgba(99, 102, 241, 0.15)` | RGB + شفافية | `rgba(..., 0.15)` |
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

6. **ما هو Dark Theme؟**
   - خلفية داكنة ونص فاتح
   - مريح للعين وحديث
   - يستخدم متغيرات CSS لتسهيل التغيير

7. **ما هي CSS Variables؟**
   - متغيرات لتخزين القيم (ألوان، أحجام)
   - `:root`: تعريف المتغيرات
   - `var(--name)`: استخدام المتغير
   - تسهل التغيير من مكان واحد

---

## الخلاصة:
- CSS = التصميم والتنسيق
- Selectors: اختيار العناصر
- Properties: الخصائص (لون، حجم، مسافة)
- Values: القيم (#6366f1 للبنفسجي/الأزرق، 20px)
- Animations: الحركات والتأثيرات
- Variables: المتغيرات لتسهيل التعديل
- Responsive: التصميم المتجاوب للجوال
- Dark Theme: خلفية داكنة ونص فاتح
- Hover Effects: تأثيرات عند المرور بالماوس
- Transitions: انتقالات سلسة

## ملاحظات مهمة عن التعديلات الأخيرة:
1. **Dark Theme:** تم استخدام تصميم داكن (خلفية سوداء/رمادية داكنة ونص أبيض/رمادي فاتح)
2. **الألوان:** اللون الأساسي بنفسجي/أزرق (#6366f1) بدلاً من الأخضر
3. **CSS Variables:** تم استخدام متغيرات CSS لتسهيل التغيير
4. **Hover Effects:** تم إضافة تأثيرات عند المرور بالماوس على كل العناصر
5. **Responsive Design:** تم إضافة تصميم متجاوب للجوال
6. **Active Links:** تم إضافة highlight تلقائي للروابط النشطة
7. **Back to Top:** تم إضافة زر للعودة لأعلى مع إخفاء عند الفوتر
8. **Transitions:** تم إضافة انتقالات سلسة لكل العناصر
9. **Shadows:** تم استخدام ظلال بنفسجية فاتحة
10. **Border Radius:** تم استخدام زوايا دائرية للعناصر
