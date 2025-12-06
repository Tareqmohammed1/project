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

### السطور 7-20: CSS Variables (المتغيرات) - Dark Theme مع تدرج خفيف
```css
:root {
    --primary-color: #15facf;
    --primary-dark: #0fc4a8;
    --primary-light: #3dfce0;
    --bg-color: #1e2328;
    --bg-light: #252a30;
    --bg-lighter: #2d3339;
    --text-color: #ffffff;
    --text-light: #e0e0e0;
    --text-lighter: #b0b0b0;
    --border-color: #3a4047;
    --shadow: rgba(21, 250, 207, 0.15);
    --shadow-hover: rgba(21, 250, 207, 0.25);
}
```
- `:root`: الجذر (كل الصفحة)
- `--primary-color`: اللون الأساسي (#15facf - فيروزي/أخضر فاتح)
- `--primary-dark`: اللون الأساسي الداكن (#0fc4a8)
- `--primary-light`: اللون الأساسي الفاتح (#3dfce0)
- `--bg-color`: لون الخلفية الرئيسي (#1e2328 - رمادي داكن)
- `--bg-light`: لون خلفية فاتح (#252a30 - رمادي داكن فاتح)
- `--bg-lighter`: لون خلفية أفتح (#2d3339)
- `--text-color`: لون النص الرئيسي (#ffffff - أبيض)
- `--text-light`: لون نص فاتح (#e0e0e0 - رمادي فاتح)
- `--text-lighter`: لون نص أفتح (#b0b0b0)
- `--border-color`: لون الحدود (#3a4047 - رمادي داكن)
- `--shadow`: لون الظل (شفاف فيروزي)
- `--shadow-hover`: لون الظل عند المرور
- `var(--primary-color)`: استخدام المتغير

**ملاحظة مهمة:** التصميم يستخدم **Dark Theme** (خلفية داكنة ونص فاتح) مع تدرج خفيف من الأزرق-الأخضر الفاتح، مطابق لتصميم HR Attrition Dashboard

**لماذا؟** لتسهيل تغيير الألوان من مكان واحد

### السطور 22-31: Body (جسم الصفحة) مع تدرج خفيف
```css
body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background: #1e2328;
    background-image: 
        linear-gradient(135deg, rgba(232, 245, 243, 0.08) 0%, transparent 50%),
        linear-gradient(225deg, rgba(212, 237, 233, 0.06) 0%, transparent 50%),
        linear-gradient(45deg, rgba(192, 229, 223, 0.04) 0%, transparent 50%);
    background-attachment: fixed;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}
```
- `font-family`: نوع الخط (Inter - خط إنجليزي احترافي وحديث) - تم التحديث من Cairo
- `line-height`: ارتفاع السطر (1.6 = 160%)
- `color`: لون النص (أبيض)
- `background`: لون الخلفية الأساسي (#1e2328 - رمادي داكن)
- `background-image`: تدرج خفيف متعدد الطبقات من الأزرق-الأخضر الفاتح (شفافية منخفضة)
  - الطبقة الأولى: تدرج بزاوية 135 درجة
  - الطبقة الثانية: تدرج بزاوية 225 درجة
  - الطبقة الثالثة: تدرج بزاوية 45 درجة
- `background-attachment: fixed`: التدرج ثابت عند التمرير
- `min-height: 100vh`: الحد الأدنى للارتفاع هو ارتفاع الشاشة
- `overflow-x: hidden`: إخفاء التمرير الأفقي
- `position: relative`: للسماح بتحديد موضع العناصر الفرعية

### السطور 30-34: Container (الحاوية)
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}
```
- `max-width`: أقصى عرض (1200 بكسل)
- `margin: 0 auto`: مسافة علوية وسفلية 0، يمين ويسار تلقائي (توسيط)
- `padding`: مسافة داخلية (0 علوي/سفلي، 24px يمين/يسار) - تم زيادة المسافة من 20px إلى 24px

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

### السطور 44-52: Header (الهيدر) - تم تحسينه مع شفافية
```css
.header {
    background: rgba(30, 35, 40, 0.95);
    backdrop-filter: blur(10px);
    padding: 1.25rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px var(--shadow);
    border-bottom: 1px solid var(--border-color);
}
```
- `background`: لون الخلفية (رمادي داكن شفاف 95% مع تأثير blur)
- `backdrop-filter: blur(10px)`: تأثير الضبابية للخلفية (10 بكسل)
- `padding: 1.25rem 0`: مسافة علوية وسفلية (1.25rem = 20px) - تم زيادة المسافة من 1.2rem
- `position: sticky`: ثابت عند التمرير
- `top: 0`: يلتصق بالأعلى
- `z-index: 1000`: الترتيب (الأعلى يظهر فوق)
- `box-shadow`: ظل خفيف
- `border-bottom`: حد سفلي

**تحسينات الهيدر الجديدة:**
- تم زيادة المسافة العلوية والسفلية للهيدر لتحسين المظهر
- تم تحسين المسافات بين العناصر في القائمة

### السطور 68-103: Logo Wrapper و Logo Icon (حاوية الشعار والأيقونة) - إضافة جديدة

#### السطور 68-75: Logo Wrapper
```css
.logo-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
    transition: all 0.3s ease;
    cursor: pointer;
}
```
- `display: flex`: تخطيط مرن (لترتيب الأيقونة والنص بجانب بعض)
- `align-items: center`: محاذاة العناصر في المنتصف عموديًا
- `gap: 0.75rem`: مسافة بين الأيقونة والنص (12px)
- `flex-shrink: 0`: منع التصغير عند الضغط
- `transition`: انتقال سلس (0.3 ثانية)
- `cursor: pointer`: مؤشر يد عند المرور

#### السطور 77-84: Logo Icon (أيقونة الشعار)
```css
.logo-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
    transition: all 0.3s ease;
    flex-shrink: 0;
    filter: drop-shadow(0 0 8px rgba(21, 250, 207, 0.4));
}
```
- `width: 40px`: عرض الأيقونة (40 بكسل)
- `height: 40px`: ارتفاع الأيقونة (40 بكسل)
- `object-fit: contain`: الحفاظ على نسبة الأيقونة
- `filter: drop-shadow`: ظل متوهج باللون الأساسي (تأثير جميل)
- `flex-shrink: 0`: منع التصغير

#### السطور 86-89: تأثير Hover على الأيقونة
```css
.logo-wrapper:hover .logo-icon {
    filter: drop-shadow(0 0 15px rgba(21, 250, 207, 0.7)) brightness(1.1);
    transform: scale(1.08);
}
```
- عند المرور بالماوس على الحاوية:
  - `drop-shadow`: ظل أقوى وأكثر توهجًا
  - `brightness(1.1)`: زيادة السطوع بنسبة 10%
  - `transform: scale(1.08)`: تكبير الأيقونة بنسبة 8%

#### السطور 91-99: Logo Text (نص الشعار)
```css
.logo {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-color);
    transition: all 0.3s ease;
    white-space: nowrap;
    flex-shrink: 0;
    margin: 0;
}
```
- `font-size`: حجم الخط (1.4rem = 22.4px)
- `font-weight: 700`: سماكة الخط (عريض)
- `color`: لون النص (أبيض فاتح)
- `transition`: انتقال سلس (0.3 ثانية)
- `white-space: nowrap`: منع كسر الكلمات
- `flex-shrink: 0`: منع التصغير
- `margin: 0`: إزالة المسافات الافتراضية

#### السطور 101-103: تأثير Hover على النص
```css
.logo-wrapper:hover .logo {
    color: var(--primary-color);
}
```
- عند المرور بالماوس على الحاوية:
  - `color`: يصبح النص فيروزي/أخضر فاتح

### السطور 71-79: Navigation List (قائمة التنقل) - تم تحسينه
```css
.nav-list {
    display: flex;
    list-style: none;
    gap: 0.2rem;  /* تم تقليلها من 0.25rem */
    flex-wrap: nowrap;  /* تم تغييرها من wrap لمنع الانقسام */
    align-items: center;
    margin: 0;
    padding: 0;
    flex: 1;
    justify-content: flex-end;
}
```
- `display: flex`: تخطيط مرن
- `list-style: none`: إزالة النقاط
- `gap: 0.2rem`: مسافة بين العناصر - تم تقليلها بعد إضافة تبويب About
- `flex-wrap: nowrap`: منع الانقسام على سطرين (تم تغييره من wrap)
- `flex: 1`: يأخذ المساحة المتبقية
- `justify-content: flex-end`: محاذاة لليمين
- `align-items: center`: توسيط عمودي
- **السبب**: بعد إضافة تبويب About (9 تبويبات)، كان الهيدر ينقسم على سطرين

### السطور 81-96: Navigation Links (روابط التنقل) - تم تحسينه
```css
.nav-link {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0.8rem;  /* تم تقليلها من 1rem */
    border-radius: 6px;
    transition: all 0.2s ease;
    font-size: 0.85rem;  /* تم تقليلها من 0.9rem */
    white-space: nowrap;
    display: inline-block;
}
```
- `color`: لون النص (رمادي فاتح)
- `text-decoration: none`: إزالة الخط السفلي
- `font-weight: 500`: سماكة متوسطة
- `padding: 0.5rem 1rem`: مسافة داخلية (0.5rem علوي/سفلي، 1rem يمين/يسار) - تم تحسينها
- `border-radius: 6px`: زوايا دائرية
- `transition: all 0.2s ease`: انتقال سلس (0.2 ثانية) - تم تقليلها من 0.3s
- `font-size: 0.9rem`: حجم الخط
- `white-space: nowrap`: منع كسر الكلمات - إضافة جديدة
- `display: inline-block`: عرض كعنصر inline-block

```css
.nav-link:hover, .nav-link.active {
    color: var(--primary-color);
    background-color: var(--bg-light);
}
```
- عند المرور بالماوس أو عندما يكون الرابط نشطاً
- `color`: يصبح فيروزي/أخضر فاتح
- `background-color`: خلفية فاتحة
- تم إزالة `transform` و `box-shadow` لتبسيط التصميم

### السطور 52-57: Header Container - تم تحسينه
```css
.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}
```
- `display: flex`: تخطيط مرن
- `justify-content: space-between`: توزيع العناصر (اللوجو على اليسار، القائمة على اليمين)
- `align-items: center`: توسيط عمودي
- `gap: 2rem`: مسافة بين اللوجو والقائمة (2rem = 32px) - إضافة جديدة لتحسين المسافات
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
- عند المرور أو عند النشاط: لون فيروزي/أخضر فاتح + خلفية داكنة + حركة لأعلى

### السطور 100-108: Hero Section (القسم الرئيسي) - مع شفافية
```css
.hero {
    background: rgba(37, 42, 48, 0.6);
    padding: 3.5rem 0;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
    position: relative;
    z-index: 1;
}
```
- `background`: خلفية رمادية داكنة شفافة (60%)
- `position: relative`: لتحديد موضع العناصر الفرعية
- `z-index: 1`: لضمان ظهور العناصر فوق الخلفية
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

### السطور 132-137: Section (القسم العام)
```css
.section {
    padding: 3.5rem 0;
    position: relative;
    z-index: 1;
    scroll-margin-top: 90px; /* Offset for sticky header when scrolling to section */
}
```
- `padding: 3.5rem 0`: مسافة علوية وسفلية للأقسام
- `position: relative`: موضع نسبي (للاستخدام مع z-index)
- `z-index: 1`: طبقة فوق الخلفية
- `scroll-margin-top: 90px`: إزاحة عند التمرير للقسم (لتعويض ارتفاع الـ header الثابت)
  - **الهدف:** عند الضغط على رابط في القائمة، يظهر القسم تحت الـ header مباشرة
  - **ملاحظة:** هذا يعمل كدعم إضافي مع JavaScript للحصول على تمرير دقيق

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
- `::after`: عنصر وهمي يضاف بعد العنوان
- `content: ''`: محتوى فارغ (نرسم خط فقط)
- `position: absolute`: موضع مطلق
- `bottom: 0`: في الأسفل
- `right: 50%`: يبدأ من منتصف العنصر
- `transform: translateX(50%)`: يتحرك 50% من عرضه لليمين (لتوسيطه)
- `width: 80px`: عرض الخط
- `height: 3px`: ارتفاع الخط
- `background: var(--primary-color)`: لون فيروزي/أخضر فاتح
- **الوظيفة:** رسم خط تحت العنوان لتزيينه
- `::after`: عنصر وهمي بعد العنوان
- خط فيروزي/أخضر فاتح تحت العنوان (80px عرض، 3px ارتفاع)

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
    box-shadow: 0 15px 40px rgba(21, 250, 207, 0.3);
    transform: scale(1.05) translateY(-5px);
}
```
- عند المرور: ظل أكبر + تكبير + حركة لأعلى

### السطور 208-217: Features List (قائمة المميزات) - مع شفافية
```css
.features-list {
    background: rgba(37, 42, 48, 0.7);
    padding: 2rem;
    border-radius: 10px;
    margin-top: 1.5rem;
    box-shadow: 0 2px 15px var(--shadow);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}
```
- خلفية رمادية داكنة شفافة (70%) + تأثير blur + ظل + حد

```css
.features-list:hover {
    box-shadow: 0 8px 30px rgba(21, 250, 207, 0.2);
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
    padding-left: 1.5rem;
}
```
- `list-style: none`: إزالة النقاط الافتراضية
- `padding-left: 1.5rem`: مسافة من اليسار (تم التحديث من padding-right لـ LTR)

```css
.features-list li {
    padding: 0.6rem 2rem 0.6rem 1.8rem;
    position: relative;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    line-height: 1.6;
}
```
- `padding: 0.6rem 2rem 0.6rem 1.8rem`: مسافات داخلية (علوي، يمين، سفلي، يسار)
- `position: relative`: موضع نسبي (لتمكين `::before` المطلق)
- `transition`: انتقال سلس للتغييرات

```css
.features-list li:hover {
    color: var(--primary-color);
    transform: translateX(5px);
    padding-left: 2.5rem;
}
```
- عند المرور: لون فيروزي/أخضر فاتح + حركة لليمين (تم التحديث من translateX(-5px) لـ LTR)
- `padding-left: 2.5rem`: زيادة المسافة من اليسار (تم التحديث من padding-right)

```css
.features-list li::before { 
    content: '✓'; 
    position: absolute; 
    left: 0.5rem; 
    color: var(--primary-color); 
    font-weight: bold; 
    font-size: 1.3rem; 
    transition: all 0.3s ease; 
}
```
- `::before`: عنصر وهمي يضاف قبل كل `<li>`
- `content: '✓'`: المحتوى (علامة صح)
- `position: absolute`: موضع مطلق بالنسبة للعنصر الأب
- `left: 0.5rem`: المسافة من اليسار (تم التحديث من right لـ LTR)
- **الوظيفة:** إضافة علامة صح قبل كل عنصر في القائمة

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
    background: rgba(30, 35, 40, 0.8);
    padding: 1.8rem;
    border-radius: 10px;
    box-shadow: 0 2px 12px var(--shadow);
    border-top: 3px solid var(--primary-color);
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}
```
- خلفية رمادية داكنة شفافة (80%) + تأثير blur + حد علوي فيروزي/أخضر فاتح

```css
.benefit-card:hover {
    box-shadow: 0 10px 35px rgba(21, 250, 207, 0.25);
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
- عند المرور: العنوان يصبح فيروزي/أخضر فاتح

```css
.benefit-card p {
    color: var(--text-light);
    line-height: 1.6;
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
}
```

### السطور 270-283: Comparison Table (جدول المقارنة) - مع شفافية
```css
.comparison-table {
    margin-top: 2rem;
    background: rgba(30, 35, 40, 0.8);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px var(--shadow);
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}
```

```css
.comparison-table:hover {
    box-shadow: 0 8px 35px rgba(21, 250, 207, 0.2);
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
- رأس الجدول: أبيض فاتح + حد سفلي فيروزي/أخضر فاتح

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
    background: rgba(21, 250, 207, 0.12);
    color: var(--text-color);
}
```
- عند المرور: خلفية فيروزية فاتحة + نص أبيض

### السطور 343-383: Application Cards - مع شفافية ومشغلات الصوت
```css
.application-card {
    margin-bottom: 2rem;
    background: rgba(30, 35, 40, 0.8);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 12px var(--shadow);
    border-left: 3px solid var(--primary-color);
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}
```
- خلفية رمادية داكنة شفافة (80%) + تأثير blur + حد يسار فيروزي/أخضر فاتح (تم التحديث من border-right لـ LTR)

```css
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
    padding-bottom: 0.6rem;
    border-bottom: 2px solid var(--primary-color);
    gap: 1rem;
    flex-wrap: wrap;
}
```
- **الوظيفة**: حاوية تجمع العنوان ومشغل الصوت في نفس السطر
- `display: flex`: استخدام flexbox للتخطيط
- `justify-content: space-between`: العنوان على اليسار والمشغل على اليمين
- `align-items: center`: توسيط عمودي للعناصر
- `border-bottom`: خط سفلي باللون الأساسي يفصل الرأس عن المحتوى
- `flex-wrap: wrap`: السماح بلف العناصر في الشاشات الصغيرة

```css
.application-card:hover {
    box-shadow: 0 12px 40px rgba(21, 250, 207, 0.3);
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
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
}
```
- `align-items: center`: توسيط الصورة عمودياً مع النص (تم التحديث من flex-start)

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
    box-shadow: 0 15px 45px rgba(21, 250, 207, 0.35);
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
    padding-left: 1.5rem;
    color: var(--text-light);
}
```
- `padding-left: 1.5rem`: مسافة من اليسار للقائمة المرتبة (تم التحديث من padding-right لـ LTR)

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

### السطور 414-427: Challenges Section - مع شفافية
```css
.challenges-content {
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 15px var(--shadow);
    max-width: 850px;
    margin: 0 auto;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    background: rgba(37, 42, 48, 0.7);
    backdrop-filter: blur(5px);
}
```

```css
.challenges-content:hover {
    box-shadow: 0 8px 30px rgba(21, 250, 207, 0.2);
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
    border-left: 3px solid var(--text-light);
    border-radius: 8px;
    box-shadow: 0 1px 5px var(--shadow);
    transition: all 0.3s ease;
    line-height: 1.7;
    font-size: 0.9rem;
}
```
- خلفية رمادية داكنة + حد يسار رمادي فاتح (تم التحديث من border-right لـ LTR)

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
    box-shadow: 0 6px 20px rgba(21, 250, 207, 0.25);
    border-left-color: var(--primary-color);
    border-left-width: 4px;
    transform: translateX(8px) scale(1.02);
}
```
- عند المرور: خلفية رمادية داكنة + حد يسار فيروزي/أخضر فاتح + حركة لليمين + تكبير (تم التحديث من border-right و translateX(-8px) لـ LTR)

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

### السطور 463-476: Contact Form (نموذج التواصل) - مع شفافية
```css
.contact-form {
    max-width: 550px;
    margin: 0 auto;
    background: rgba(30, 35, 40, 0.8);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px var(--shadow);
    backdrop-filter: blur(5px);
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
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: var(--text-color);
    background: rgba(37, 42, 48, 0.6);
    transition: all 0.3s ease;
    outline: none;
}
```
- خلفية رمادية داكنة شفافة (60%) + حد رمادي + نص أبيض فاتح

```css
.form-group input:focus, .form-group textarea:focus {
    border-color: var(--primary-color);
    background: rgba(30, 35, 40, 0.8);
    box-shadow: 0 0 0 3px rgba(21, 250, 207, 0.15);
    transform: translateY(-2px);
}
```
- عند التركيز: حد فيروزي/أخضر فاتح + خلفية رمادية داكنة + ظل + حركة

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
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
```
- زر فيروزي/أخضر فاتح + نص أبيض

```css
.submit-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(21, 250, 207, 0.3);
}
```
- عند المرور: لون أغمق + حركة + ظل

### السطور 534-547: Footer (التذييل) - مع شفافية
```css
.footer {
    background: rgba(37, 42, 48, 0.6);
    color: var(--text-color);
    padding: 2rem 0;
    text-align: center;
    border-top: 1px solid var(--border-color);
    position: relative;
    z-index: 1;
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
- زر دائري فيروزي/أخضر فاتح

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
- عند التركيز (بالكيبورد): إطار فيروزي/أخضر فاتح

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
| `#15facf` | Hex (ست عشري) | `color: #15facf` |
| `rgb(99, 102, 241)` | RGB | `color: rgb(99, 102, 241)` |
| `rgba(21, 250, 207, 0.15)` | RGB + شفافية | `rgba(..., 0.15)` |
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
- Values: القيم (#15facf للفيروزي/الأخضر الفاتح، 20px)
- Animations: الحركات والتأثيرات
- Variables: المتغيرات لتسهيل التعديل
- Responsive: التصميم المتجاوب للجوال
- Dark Theme: خلفية داكنة ونص فاتح
- Hover Effects: تأثيرات عند المرور بالماوس
- Transitions: انتقالات سلسة

### السطور 700-780: Thank You Page Styles (تنسيقات صفحة الشكر)

تم إضافة تنسيقات جديدة لصفحة الشكر (`Thank-You.html`) التي تظهر بعد إرسال النموذج بنجاح.

#### السطور 707-720: حاوية رسالة الشكر - مع شفافية
```css
.thank-you-message {
    max-width: 700px;
    margin: 0 auto;
    background: rgba(30, 35, 40, 0.8);
    padding: 3rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px var(--shadow);
    border: 1px solid var(--border-color);
    text-align: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}
```
- `max-width: 700px`: عرض أقصى 700 بكسل (للمركز)
- `margin: 0 auto`: توسيط أفقي
- `text-align: center`: توسيط النص
- خلفية رمادية داكنة شفافة (80%) + تأثير blur + ظلال وحدود

```css
.thank-you-message:hover {
    box-shadow: 0 8px 35px rgba(21, 250, 207, 0.25);
    transform: translateY(-3px);
}
```
- عند المرور: ظل أقوى + حركة للأعلى

#### السطور 722-732: أيقونة النجاح
```css
.thank-you-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 2rem;
    background: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(21, 250, 207, 0.3);
    animation: fadeIn 0.5s ease;
}
```
- دائرة فيروزية 80x80 بكسل
- `border-radius: 50%`: دائرة كاملة
- `display: flex`: لتوسيط علامة ✓
- `animation: fadeIn`: حركة ظهور سلسة
- ظل فيروزي فاتح

#### السطور 734-744: محتوى الرسالة
```css
.thank-you-content {
    margin-bottom: 2.5rem;
}

.thank-you-text {
    color: var(--text-light);
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    text-align: center;
}
```
- نص رمادي فاتح
- `line-height: 1.8`: مسافة بين الأسطر للقراءة السهلة
- كل فقرة لها `margin-bottom` للفصل

#### السطور 746-780: الأزرار
```css
.thank-you-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
}
```
- `display: flex`: تخطيط مرن
- `gap: 1rem`: مسافة بين الأزرار
- `flex-wrap: wrap`: التفاف على الشاشات الصغيرة

```css
.thank-you-btn-primary {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    min-width: 180px;
}
```
- زر أساسي: خلفية فيروزية + نص أبيض
- `min-width: 180px`: عرض أدنى للزر

```css
.thank-you-btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(21, 250, 207, 0.4);
}
```
- عند المرور: لون أغمق + حركة + ظل أقوى

```css
.thank-you-btn-secondary {
    background: rgba(37, 42, 48, 0.6);
    color: var(--text-color);
    border: 2px solid var(--primary-color);
    padding: 1rem 2rem;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    min-width: 180px;
}
```
- زر ثانوي: خلفية رمادية داكنة شفافة (60%) + حد فيروزي
- نفس الحجم والخط

```css
.thank-you-btn-secondary:hover {
    background: rgba(30, 35, 40, 0.8);
    color: var(--primary-color);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(21, 250, 207, 0.3);
}
```
- عند المرور: خلفية أغمق + نص فيروزي + حركة + ظل

#### السطور 782-800: Responsive Design للشاشات الصغيرة
```css
@media (max-width: 768px) {
    .thank-you-message {
        padding: 2rem 1.5rem;
    }

    .thank-you-icon {
        width: 60px;
        height: 60px;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }

    .thank-you-text {
        font-size: 0.95rem;
    }

    .thank-you-actions {
        flex-direction: column;
        align-items: stretch;
    }

    .thank-you-btn-primary,
    .thank-you-btn-secondary {
        width: 100%;
        min-width: 100%;
    }
}
```
- على الشاشات الصغيرة:
  - أيقونة أصغر (60x60 بدلاً من 80x80)
  - نص أصغر
  - الأزرار تصبح عمودية وعرض كامل

---

## ملاحظات مهمة عن التعديلات الأخيرة:
1. **Dark Theme:** تم استخدام تصميم داكن (خلفية سوداء/رمادية داكنة ونص أبيض/رمادي فاتح)
2. **الألوان:** اللون الأساسي فيروزي/أخضر فاتح (#15facf) مطابق لتصميم HR Attrition Dashboard
3. **CSS Variables:** تم استخدام متغيرات CSS لتسهيل التغيير
4. **Hover Effects:** تم إضافة تأثيرات عند المرور بالماوس على كل العناصر
5. **Responsive Design:** تم إضافة تصميم متجاوب للجوال
6. **Active Links:** تم إضافة highlight تلقائي للروابط النشطة
7. **Back to Top:** تم إضافة زر للعودة لأعلى مع إخفاء عند الفوتر
8. **Transitions:** تم إضافة انتقالات سلسة لكل العناصر
9. **Shadows:** تم استخدام ظلال فيروزية فاتحة
10. **Border Radius:** تم استخدام زوايا دائرية للعناصر
11. **Thank You Page:** تم إضافة تنسيقات كاملة لصفحة الشكر مع أيقونة نجاح وأزرار تفاعلية

---

---

## شرح CSS Classes الإضافية:

### 1. Section Classes (كلاسات الأقسام)

#### `.intro-section`
```css
/* يستخدم نفس تنسيق .section مع إضافات خاصة */
```
- **الاستخدام:** في أقسام المقدمة والتاريخ والأمثلة
- **الوظيفة:** يحدد التنسيق الخاص بالأقسام التي تحتوي على نص وصورة جنباً إلى جنب
- **المواقع:** `#intro`, `#history`, `#examples`

#### `.benefits-section`
```css
/* يستخدم نفس تنسيق .section مع إضافات خاصة */
```
- **الاستخدام:** في أقسام المميزات والمستقبل
- **الوظيفة:** يحدد التنسيق الخاص بالأقسام التي تحتوي على بطاقات (benefit-card) في grid layout
- **المواقع:** `#benefits`, `#future`

#### `.applications-section`
```css
/* يستخدم نفس تنسيق .section مع إضافات خاصة */
```
- **الاستخدام:** في قسم التطبيقات
- **الوظيفة:** يحدد التنسيق الخاص بالأقسام التي تحتوي على بطاقات تطبيقات (application-card)
- **الموقع:** `#applications`

#### `.challenges-section`
```css
/* يستخدم نفس تنسيق .section مع إضافات خاصة */
```
- **الاستخدام:** في قسم التحديات
- **الوظيفة:** يحدد التنسيق الخاص بقسم التحديات الذي يحتوي على قائمة التحديات (challenges-list)
- **الموقع:** `#challenges`

#### `.contact-section`
```css
/* يستخدم نفس تنسيق .section مع إضافات خاصة */
```
- **الاستخدام:** في صفحة التواصل
- **الوظيفة:** يحدد التنسيق الخاص بصفحة التواصل التي تحتوي على نموذج
- **الموقع:** `contact.html`

### 2. Features List Classes

#### `.features-list-spaced`
```css
/* لا يوجد تنسيق خاص في CSS، لكن يمكن إضافته لاحقاً */
```
- **الاستخدام:** مع `.features-list` في أقسام الأمثلة والمستقبل
- **الوظيفة:** يضيف مسافات إضافية بين العناصر للقراءة الأفضل في الأقسام الطويلة
- **المواقع:** في `#examples` و `#future`

### 3. Thank You Page Classes

#### `.thank-you-message`
```css
.thank-you-message {
    max-width: 700px;
    margin: 0 auto;
    background: var(--bg-color);
    padding: 3rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px var(--shadow);
    border: 1px solid var(--border-color);
    text-align: center;
    transition: all 0.3s ease;
}
```
- **الاستخدام:** الحاوية الرئيسية لرسالة الشكر
- **الوظيفة:** تنسيق الحاوية التي تحتوي على كل محتوى صفحة الشكر
- **الموقع:** `Thank-You.html`

#### `.thank-you-icon`
```css
.thank-you-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 2rem;
    background: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(21, 250, 207, 0.3);
    animation: fadeIn 0.5s ease;
}
```
- **الاستخدام:** أيقونة النجاح (✓)
- **الوظيفة:** دائرة فيروزية تحتوي على علامة صح
- **الخصائص:** 
  - `border-radius: 50%`: يجعلها دائرة كاملة
  - `animation: fadeIn`: أنيميشن للظهور التدريجي

#### `.thank-you-content`
```css
.thank-you-content {
    margin-bottom: 2.5rem;
}
```
- **الاستخدام:** حاوية لمحتوى الرسالة
- **الوظيفة:** تجميع رسائل الشكر مع تنسيق موحد

#### `.thank-you-text`
```css
.thank-you-text {
    color: var(--text-light);
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    text-align: center;
}
```
- **الاستخدام:** كل فقرة نصية في رسالة الشكر
- **الوظيفة:** تنسيق موحد لجميع فقرات الرسالة

#### `.thank-you-actions`
```css
.thank-you-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
}
```
- **الاستخدام:** حاوية للأزرار
- **الوظيفة:** تخطيط مرن للأزرار مع توسيط

#### `.thank-you-btn-primary`
```css
.thank-you-btn-primary {
    background: var(--primary-color);
    color: white;
    border: none;
    /* ... */
}
```
- **الاستخدام:** الزر الرئيسي (العودة للصفحة الرئيسية)
- **الوظيفة:** زر فيروزي للعودة للصفحة الرئيسية

#### `.thank-you-btn-secondary`
```css
.thank-you-btn-secondary {
    background: var(--bg-light);
    color: var(--text-color);
    border: 2px solid var(--primary-color);
    /* ... */
}
```
- **الاستخدام:** الزر الثانوي (إرسال رسالة أخرى)
- **الوظيفة:** زر بحد فيروزي لإرسال رسالة أخرى

---

## شرح Pseudo-elements و Pseudo-classes:

### Pseudo-elements (العناصر الوهمية)

#### `::before` و `::after`
```css
.features-list li::before {
    content: '✓';
    position: absolute;
    left: 0.5rem;
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.3rem;
    transition: all 0.3s ease;
}
```
- **`::before`**: يضيف محتوى قبل العنصر
- **`::after`**: يضيف محتوى بعد العنصر
- **`content`**: المحتوى الذي سيتم إضافته (مطلوب)
- **الاستخدام:** 
  - `::before` في `.features-list li` لإضافة علامة ✓ قبل كل عنصر
  - `::after` في `.section-title` لإضافة خط تحت العنوان

#### `::marker`
```css
.app-text li::marker {
    color: var(--primary-color);
    font-weight: bold;
}
```
- **الوظيفة:** تنسيق علامات القوائم المرتبة (1, 2, 3...)
- **الاستخدام:** في `.app-text li` لتلوين أرقام القائمة باللون الفيروزي

### Pseudo-classes (الفئات الوهمية)

#### `:hover`
```css
.nav-link:hover {
    color: var(--primary-color);
    background-color: var(--bg-light);
}
```
- **الوظيفة:** تنسيق العنصر عند المرور بالماوس فوقه
- **الاستخدام:** في جميع العناصر القابلة للنقر (روابط، أزرار، بطاقات)

#### `:active`
```css
.nav-link.active {
    color: var(--primary-color);
    background-color: var(--bg-light);
}
```
- **الوظيفة:** تنسيق العنصر عندما يكون نشطاً
- **الاستخدام:** في `.nav-link` لإظهار الرابط النشط في القائمة

#### `:focus`
```css
.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--primary-color);
    background: var(--bg-color);
    box-shadow: 0 0 0 3px rgba(21, 250, 207, 0.15);
    transform: translateY(-2px);
}
```
- **الوظيفة:** تنسيق العنصر عندما يكون في حالة التركيز (focus)
- **الاستخدام:** في حقول النموذج عند الكتابة
- **الأهمية:** مهم جداً لإمكانية الوصول (accessibility)

#### `:last-of-type`
```css
.thank-you-text:last-of-type {
    margin-bottom: 0;
}
```
- **الوظيفة:** يختار آخر عنصر من نفس النوع
- **الاستخدام:** في `.thank-you-text` لإزالة المسافة السفلية من آخر فقرة

---

## شرح الأنماط المتقدمة في CSS:

### 1. Flexbox Layout (التخطيط المرن)

#### `.content-wrapper` و `.app-content`
```css
.content-wrapper {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}
```
- **`display: flex`**: تفعيل Flexbox
- **`gap: 1.5rem`**: مسافة بين العناصر (بديل عن margin)
- **`align-items: flex-start`**: محاذاة العناصر من الأعلى
- **`flex-wrap: wrap`**: السماح بالتفاف العناصر عند الحاجة
- **الاستخدام:** لتوزيع النص والصورة جنباً إلى جنب

#### `.footer-content`
```css
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}
```
- **`justify-content: space-between`**: توزيع العناصر (حقوق النشر على اليسار، الروابط على اليمين)
- **`align-items: center`**: توسيط عمودي
- **الاستخدام:** في Footer لتوزيع المحتوى

### 2. Grid Layout (التخطيط الشبكي)

#### `.benefits-grid`
```css
.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}
```
- **`display: grid`**: تفعيل Grid Layout
- **`grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`**: 
  - `repeat`: تكرار النمط
  - `auto-fit`: عدد الأعمدة يتكيف مع العرض المتاح
  - `minmax(240px, 1fr)`: كل عمود بحد أدنى 240px وحد أقصى 1fr (جزء متساوي)
- **`gap: 1.5rem`**: مسافة بين البطاقات
- **الاستخدام:** لتوزيع بطاقات المميزات في شبكة متجاوبة

### 3. Transform و Transition (التحويلات والانتقالات)

#### Transform Properties:
- **`transform: scale(1.05)`**: تكبير العنصر 5%
- **`transform: translateY(-5px)`**: تحريك العنصر 5px لأعلى
- **`transform: translateX(5px)`**: تحريك العنصر 5px لليمين (LTR)
- **`transform: rotate(5deg)`**: دوران العنصر 5 درجات
- **`transform: translateX(50%)`**: تحريك العنصر 50% من عرضه (للتوسيط)

#### Transition Properties:
- **`transition: all 0.3s ease`**: انتقال سلس لجميع الخصائص لمدة 0.3 ثانية
- **`transition: color 0.3s ease`**: انتقال سلس للون فقط
- **الاستخدام:** لإضافة حركات سلسة عند hover أو focus

### 4. Box Shadow (الظلال)

#### أنواع الظلال المستخدمة:
```css
box-shadow: 0 2px 10px var(--shadow);
```
- **`0`**: الإزاحة الأفقية (لا إزاحة)
- **`2px`**: الإزاحة العمودية (2px لأسفل)
- **`10px`**: التمويه (blur)
- **`var(--shadow)`**: اللون (فيروزي فاتح شفاف)

#### أمثلة أخرى:
- **`box-shadow: 0 8px 25px var(--shadow)`**: ظل أكبر للصور
- **`box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15)`**: ظل داخلي للتركيز (focus)

### 5. Position Properties (خصائص الموضع)

#### `position: sticky`
```css
.header {
    position: sticky;
    top: 0;
    z-index: 1000;
}
```
- **الوظيفة:** الهيدر يلتصق بالأعلى عند التمرير
- **`top: 0`**: يلتصق عند الوصول لأعلى الصفحة
- **`z-index: 1000`**: يظهر فوق العناصر الأخرى

#### `position: fixed`
```css
.back-to-top {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
}
```
- **الوظيفة:** الزر ثابت في مكانه حتى عند التمرير
- **`bottom: 2rem`**: من الأسفل
- **`left: 2rem`**: من اليسار

#### `position: absolute`
```css
.features-list li::before {
    position: absolute;
    left: 0.5rem;
}
```
- **الوظيفة:** موضع مطلق بالنسبة للعنصر الأب (relative)
- **`left: 0.5rem`**: المسافة من اليسار

#### `position: relative`
```css
.features-list li {
    position: relative;
}
```
- **الوظيفة:** يجعل العنصر مرجعاً للعناصر المطلقة داخله

### 6. Opacity و Visibility (الشفافية والظهور)

```css
.back-to-top {
    opacity: 0;
    visibility: hidden;
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
}
```
- **`opacity: 0`**: شفاف تماماً (غير مرئي)
- **`visibility: hidden`**: مخفي (لا يأخذ مساحة)
- **`opacity: 1`**: ظاهر تماماً
- **`visibility: visible`**: مرئي
- **الاستخدام:** لإظهار/إخفاء زر العودة للأعلى

### 7. Animation (الأنيميشن)

```css
@keyframes fadeIn { 
    from { opacity: 0; transform: translateY(20px); } 
    to { opacity: 1; transform: translateY(0); } 
}
```
- **`@keyframes`**: تعريف أنيميشن
- **`fadeIn`**: اسم الأنيميشن
- **`from`**: الحالة الأولى (شفاف، من تحت)
- **`to`**: الحالة النهائية (ظاهر، في مكانه)
- **الاستخدام:** في `.thank-you-icon` لإظهار أيقونة النجاح بشكل سلس

### 8. Advanced Selectors (المحددات المتقدمة)

#### Descendant Selector (محدد النسل):
```css
.benefit-card h3 {
    color: var(--text-color);
}
```
- يختار جميع `<h3>` داخل `.benefit-card`

#### Child Selector (محدد الابن):
```css
.challenges-content > p {
    font-size: 1rem;
}
```
- يختار `<p>` الذي هو ابن مباشر لـ `.challenges-content`

#### Attribute Selector (محدد الخاصية):
```css
.form-group input[type="text"],
.form-group input[type="email"] {
    /* ... */
}
```
- يختار العناصر بناءً على قيمة الخاصية

#### Pseudo-class Selector (محدد الفئة الوهمية):
```css
.thank-you-text:last-of-type {
    margin-bottom: 0;
}
```
- يختار آخر عنصر من نفس النوع

### 9. Responsive Design (التصميم المتجاوب)

#### Media Query:
```css
@media (max-width: 768px) {
    /* تنسيقات للشاشات الصغيرة */
}
```
- **`@media`**: استعلام الوسائط
- **`max-width: 768px`**: للشاشات أقل من 768px (الجوال)
- **الاستخدام:** لتعديل التخطيط على الشاشات الصغيرة

#### التغييرات في Media Query:
- **`flex-direction: column`**: تغيير الاتجاه من أفقي إلى عمودي
- **`grid-template-columns: 1fr`**: عمود واحد في Grid
- **تقليل الأحجام:** `font-size`, `padding`, `margin`
- **تغيير المسافات:** `gap`, `padding`

### 10. Advanced Properties (الخصائص المتقدمة)

#### `word-break`:
```css
word-break: keep-all;
```
- **الوظيفة:** منع كسر الكلمات
- **الاستخدام:** في العناوين والنصوص المهمة

#### `overflow-wrap`:
```css
overflow-wrap: break-word;
```
- **الوظيفة:** السماح بكسر الكلمات الطويلة عند الحاجة
- **الاستخدام:** في النصوص الطويلة

#### `resize`:
```css
.form-group textarea {
    resize: vertical;
}
```
- **الوظيفة:** السماح بتغيير حجم textarea عمودياً فقط
- **`vertical`**: عمودي فقط (لا أفقي)

#### `cursor`:
```css
.submit-btn {
    cursor: pointer;
}
```
- **الوظيفة:** تغيير شكل المؤشر عند المرور فوق الزر
- **`pointer`**: يد (يدل على قابلية النقر)

#### `outline`:
```css
a:focus, button:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}
```
- **الوظيفة:** إضافة حد خارجي عند التركيز (مهم لإمكانية الوصول)
- **`outline-offset`**: المسافة بين الحد والعنصر

---

## التعديلات الجديدة (التحويل للغة الإنجليزية):

### 1. تغيير الخط من Cairo إلى Inter
- **الخط القديم:** `font-family: 'Cairo', sans-serif` (يدعم العربية)
- **الخط الجديد:** `font-family: 'Inter', sans-serif` (خط إنجليزي احترافي وحديث)
- **السبب:** الخط Inter أكثر احترافية ووضوحاً للنصوص الإنجليزية
- **المواقع:** تم التحديث في `body` وكل العناصر التي تستخدم الخط

### 2. تغيير الاتجاه من RTL إلى LTR
- **التغييرات في CSS:**
  - `padding-right` → `padding-left` (للقوائم والعناصر)
  - `border-right` → `border-left` (للبطاقات والعناصر)
  - `margin-right` → `margin-left` (حيث لزم الأمر)
  - `right` → `left` (للمواضع المطلقة)
  - `translateX(-5px)` → `translateX(5px)` (لحركات hover)
  - `translateX(-8px)` → `translateX(8px)` (لعناصر التحديات)

### 3. تحسينات الهيدر (Header)
- **زيادة المسافات:**
  - `padding: 1.2rem 0` → `padding: 1.25rem 0` (زيادة طفيفة)
  - إضافة `gap: 2rem` في `.header .container` (مسافة بين اللوجو والقائمة)
  - `padding: 0 20px` → `padding: 0 24px` في `.container` (زيادة المسافة الجانبية)

- **تحسينات اللوجو:**
  - إضافة `white-space: nowrap` لمنع كسر الكلمات
  - إزالة `transform: scale(1.05)` من hover لتبسيط التصميم

- **تحسينات روابط التنقل:**
  - `gap: 1.2rem` → `gap: 0.25rem` (تقليل المسافة بين الروابط)
  - `padding: 0.4rem 0.8rem` → `padding: 0.5rem 1rem` (تحسين المسافات الداخلية)
  - `transition: 0.3s` → `transition: 0.2s` (انتقال أسرع)
  - إضافة `white-space: nowrap` لمنع كسر الكلمات
  - إزالة `transform` و `box-shadow` من hover لتبسيط التصميم

- **تحسينات التخطيط:**
  - إضافة `align-items: center` و `margin: 0` و `padding: 0` للقائمة
  - تحسين التصميم المتجاوب على الشاشات الصغيرة

### 4. ملخص التغييرات في القيم:
| العنصر | القيمة القديمة | القيمة الجديدة | السبب |
|--------|----------------|----------------|--------|
| `body font-family` | 'Cairo' | 'Inter' | خط إنجليزي احترافي |
| `.header padding` | 1.2rem | 1.25rem | تحسين المظهر |
| `.container padding` | 0 20px | 0 24px | زيادة المسافة الجانبية |
| `.header .container gap` | - | 2rem | مسافة بين اللوجو والقائمة |
| `.nav-list gap` | 1.2rem | 0.25rem | تقليل المسافة بين الروابط |
| `.nav-link padding` | 0.4rem 0.8rem | 0.5rem 1rem | تحسين المسافات |
| `.nav-link transition` | 0.3s | 0.2s | انتقال أسرع |

### 5. العناصر المضافة:
- `white-space: nowrap` في `.logo` و `.nav-link` (منع كسر الكلمات)
- `gap: 2rem` في `.header .container` (مسافة بين العناصر)
- `align-items: center` في `.nav-list` (توسيط عمودي)
- `margin: 0` و `padding: 0` في `.nav-list` (إزالة المسافات الافتراضية)

### 6. العناصر المحذوفة:
- `transform: scale(1.05)` من `.logo:hover` (تبسيط التصميم)
- `transform: translateY(-2px)` من `.nav-link:hover` (تبسيط التصميم)
- `box-shadow` من `.nav-link:hover` (تبسيط التصميم)

### 7. التصميم المتجاوب:
- تم تحديث `@media (max-width: 768px)` ليتوافق مع التغييرات الجديدة
- تحسين المسافات والتخطيط على الشاشات الصغيرة

---

## ملخص شامل لجميع الأنماط والخصائص:

### CSS Classes الكاملة المستخدمة:

#### Layout Classes (كلاسات التخطيط):
- **`.container`**: حاوية رئيسية (max-width: 1200px, centered)
- **`.content-wrapper`**: حاوية للمحتوى (flexbox, نص وصورة)
- **`.app-content`**: حاوية لمحتوى التطبيق (flexbox)
- **`.footer-content`**: حاوية لمحتوى Footer (flexbox)
- **`.thank-you-actions`**: حاوية لأزرار صفحة الشكر (flexbox)

#### Section Classes (كلاسات الأقسام):
- **`.section`**: قسم عام (padding: 3.5rem 0)
- **`.intro-section`**: قسم المقدمة/التاريخ/الأمثلة
- **`.benefits-section`**: قسم المميزات/المستقبل
- **`.applications-section`**: قسم التطبيقات
- **`.challenges-section`**: قسم التحديات
- **`.contact-section`**: قسم التواصل

#### Header & Navigation Classes:
- **`.header`**: الهيدر (sticky, top: 0)
- **`.logo`**: الشعار (font-size: 1.5rem, hover effect)
- **`.nav-list`**: قائمة التنقل (flexbox, gap: 0.25rem)
- **`.nav-link`**: رابط في القائمة (padding: 0.5rem 1rem, hover effect)
- **`.nav-link.active`**: الرابط النشط (لون فيروزي، خلفية فاتحة)

#### Hero Section Classes:
- **`.hero`**: القسم الرئيسي (background: var(--bg-light))
- **`.hero-title`**: عنوان Hero (font-size: 2rem)
- **`.hero-subtitle`**: نص فرعي Hero (font-size: 1rem)

#### Content Classes:
- **`.section-title`**: عنوان القسم (font-size: 1.8rem, مع خط تحته)
- **`.section-intro`**: مقدمة القسم (text-align: center)
- **`.intro-text`**: نص المقدمة (flex: 1)
- **`.intro-image`**: صورة المقدمة (flex: 1, hover effect)

#### List Classes:
- **`.features-list`**: قائمة المميزات (background: var(--bg-light), hover effect)
- **`.features-list-spaced`**: قائمة مميزات بمسافات إضافية
- **`.challenges-list`**: قائمة التحديات (list-style: none)
- **`.challenge-note`**: ملاحظة التحدي (italic, border-top)

#### Card Classes:
- **`.benefit-card`**: بطاقة مميزة (grid item, border-top, hover effect)
- **`.application-card`**: بطاقة تطبيق (border-left, hover effect)

#### Grid Classes:
- **`.benefits-grid`**: شبكة المميزات (grid, auto-fit, minmax(240px, 1fr))

#### Table Classes:
- **`.comparison-table`**: جدول المقارنة (background, padding, hover effect)
- **`table`**: الجدول (width: 100%, border-collapse)
- **`th`**: رأس الجدول (border-bottom: 2px solid)
- **`td`**: خلية الجدول (border-bottom: 1px solid)
- **`tbody tr:hover`**: صف عند المرور (scale, background change)

#### Form Classes:
- **`.contact-form`**: النموذج (max-width: 550px, centered, hover effect)
- **`.form-group`**: مجموعة الحقل (margin-bottom: 1.2rem)
- **`.form-group label`**: تسمية الحقل (display: block, font-weight: 600)
- **`.form-group input`**: حقل الإدخال (width: 100%, border, focus effect)
- **`.form-group textarea`**: حقل النص (resize: vertical, min-height: 120px)
- **`.submit-btn`**: زر الإرسال (width: 100%, background: var(--primary-color), hover effect)

#### Footer Classes:
- **`.footer`**: Footer (background: var(--bg-light), border-top)
- **`.copyright`**: حقوق النشر (color: var(--text-light))
- **`.social-links`**: روابط اجتماعية (flexbox, gap: 0.8rem)
- **`.social-link`**: رابط اجتماعي (border, hover effect)

#### Button Classes:
- **`.back-to-top`**: زر العودة للأعلى (fixed, bottom: 2rem, left: 2rem, opacity: 0)
- **`.back-to-top.show`**: زر مرئي (opacity: 1, visibility: visible)

#### Thank You Page Classes:
- **`.thank-you-message`**: رسالة الشكر (max-width: 700px, centered, hover effect)
- **`.thank-you-icon`**: أيقونة النجاح (80x80px, circle, animation)
- **`.thank-you-content`**: محتوى الرسالة (margin-bottom: 2.5rem)
- **`.thank-you-text`**: نص الرسالة (color: var(--text-light), line-height: 1.8)
- **`.thank-you-actions`**: أزرار الإجراءات (flexbox, gap: 1rem)
- **`.thank-you-btn-primary`**: زر رئيسي (background: var(--primary-color))
- **`.thank-you-btn-secondary`**: زر ثانوي (border: 2px solid var(--primary-color))

### Pseudo-elements المستخدمة:

| Pseudo-element | العنصر | الوظيفة |
|----------------|--------|---------|
| `::before` | `.features-list li` | إضافة علامة ✓ قبل كل عنصر |
| `::after` | `.section-title` | رسم خط تحت العنوان |
| `::marker` | `.app-text li` | تنسيق أرقام القائمة المرتبة |

### Pseudo-classes المستخدمة:

| Pseudo-class | العنصر | الوظيفة |
|--------------|--------|---------|
| `:hover` | جميع العناصر القابلة للنقر | تغيير التنسيق عند المرور |
| `:active` | `.nav-link` | تنسيق الرابط النشط |
| `:focus` | `.form-group input`, `.form-group textarea` | تنسيق الحقل عند التركيز |
| `:last-of-type` | `.thank-you-text` | إزالة margin-bottom من آخر فقرة |

### CSS Properties المستخدمة:

#### Layout Properties:
- `display`: flex, grid, block, inline-block, none
- `flex-direction`: row, column
- `flex-wrap`: wrap, nowrap
- `justify-content`: space-between, center, flex-end
- `align-items`: center, flex-start, stretch
- `gap`: 0.25rem إلى 3rem
- `grid-template-columns`: repeat(auto-fit, minmax(240px, 1fr)), 1fr

#### Position Properties:
- `position`: static, relative, absolute, fixed, sticky
- `top`, `bottom`, `left`, `right`: 0, 2rem, 50%
- `z-index`: 100, 1000

#### Size Properties:
- `width`: 100%, 50px, 80px, 700px
- `height`: auto, 50px, 80px
- `max-width`: 550px, 700px, 800px, 850px, 1200px
- `min-width`: 0, 180px, 240px, 280px, 300px

#### Spacing Properties:
- `margin`: 0, auto, 0 auto, 1rem, 2rem, 3rem
- `padding`: 0, 0.4rem, 0.5rem, 0.6rem, 1rem, 1.2rem, 1.5rem, 1.8rem, 2rem, 2.5rem, 3rem, 3.5rem
- `gap`: 0.25rem, 0.5rem, 0.8rem, 1rem, 1.2rem, 1.5rem, 2rem, 3rem
- `scroll-margin-top`: 90px (إزاحة عند التمرير للقسم لتعويض الـ header الثابت)

#### Typography Properties:
- `font-family`: 'Inter', sans-serif
- `font-size`: 0.8rem, 0.85rem, 0.9rem, 0.95rem, 1rem, 1.05rem, 1.1rem, 1.2rem, 1.3rem, 1.4rem, 1.5rem, 1.6rem, 1.8rem, 2rem, 3rem
- `font-weight`: 400, 500, 600, 700
- `line-height`: 1.3, 1.4, 1.6, 1.7, 1.8
- `letter-spacing`: -0.02em, 0.01em
- `text-align`: left, center
- `text-decoration`: none
- `white-space`: nowrap
- `word-break`: keep-all
- `overflow-wrap`: break-word

#### Color Properties:
- `color`: var(--text-color), var(--text-light), var(--text-lighter), var(--primary-color), white
- `background-color`: var(--bg-color), var(--bg-light), var(--bg-lighter), var(--primary-color), var(--primary-dark)
- `border-color`: var(--border-color), var(--primary-color), var(--text-light)

#### Border Properties:
- `border`: none, 1px solid, 2px solid, 3px solid, 4px solid
- `border-top`: 3px solid, 4px solid
- `border-bottom`: 1px solid, 2px solid
- `border-left`: 3px solid, 4px solid
- `border-right`: (تم إزالته في LTR)
- `border-radius`: 4px, 6px, 8px, 10px, 12px, 50%

#### Shadow Properties:
- `box-shadow`: 0 2px 10px var(--shadow), 0 4px 20px var(--shadow), 0 8px 25px var(--shadow), إلخ

#### Transform Properties:
- `transform`: scale(1.02), scale(1.05), scale(1.06), scale(1.2), translateY(-2px), translateY(-3px), translateY(-5px), translateY(-8px), translateX(5px), translateX(8px), translateX(50%), rotate(5deg)

#### Transition Properties:
- `transition`: all 0.2s ease, all 0.3s ease, color 0.3s ease

#### Other Properties:
- `opacity`: 0, 1
- `visibility`: hidden, visible
- `cursor`: pointer
- `resize`: vertical
- `outline`: 2px solid var(--primary-color)
- `outline-offset`: 2px
- `list-style`: none
- `border-collapse`: collapse

### Media Queries:

#### `@media (max-width: 768px)`:
- تقليل جميع الأحجام (font-size, padding, margin)
- تغيير `flex-direction` إلى `column`
- تغيير `grid-template-columns` إلى `1fr`
- تقليل المسافات (gap, padding)
- تعديل التخطيط للشاشات الصغيرة

### Animations:

#### `@keyframes fadeIn`:
- من: `opacity: 0, transform: translateY(20px)`
- إلى: `opacity: 1, transform: translateY(0)`
- الاستخدام: في `.thank-you-icon`

### CSS Variables المستخدمة:

| المتغير | القيمة | الاستخدام |
|---------|--------|-----------|
| `--primary-color` | #15facf | اللون الأساسي (فيروزي/أخضر فاتح) |
| `--primary-dark` | #0fc4a8 | اللون الأساسي الداكن |
| `--primary-light` | #3dfce0 | اللون الأساسي الفاتح |
| `--bg-color` | #0a0a0f | لون الخلفية الرئيسي |
| `--bg-light` | #1a1a24 | لون خلفية فاتح |
| `--bg-lighter` | #252535 | لون خلفية أفتح |
| `--text-color` | #f8f9fa | لون النص الرئيسي |
| `--text-light` | #cbd5e1 | لون نص فاتح |
| `--text-lighter` | #94a3b8 | لون نص أفتح |
| `--border-color` | #2d2d3a | لون الحدود |
| `--shadow` | rgba(21, 250, 207, 0.15) | لون الظل |
| `--shadow-hover` | rgba(21, 250, 207, 0.25) | لون الظل عند hover |

---

## مشغلات الصوت للترجمة الصوتية

### السطور 448-560: Audio Player Styles

#### `.audio-section`:
```css
.audio-section {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
}
```
- **الوظيفة**: قسم يحتوي على مشغل الصوت
- `justify-content: flex-end`: وضع المشغل على اليمين
- `flex-shrink: 0`: منع تقلص المشغل عند الضغط

#### `.audio-player-wrapper`:
```css
.audio-player-wrapper {
    width: auto;
    min-width: 280px;
    max-width: 100%;
    background: rgba(30, 35, 40, 0.8);
    border: 1px solid var(--border-color);
    border-left: 3px solid var(--primary-color);
    border-radius: 6px;
    padding: 0.5rem 0.8rem;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    box-sizing: border-box;
    overflow: visible;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: help;
}
```
- **الوظيفة**: حاوية مشغل الصوت مع التصميم
- `background: rgba(30, 35, 40, 0.8)`: خلفية داكنة شفافة (80%)
- `border-left: 3px solid var(--primary-color)`: حد يسار باللون الأساسي (3px)
- `border-radius: 6px`: زوايا دائرية
- `backdrop-filter: blur(5px)`: تأثير blur للخلفية
- `display: flex`: flexbox لترتيب النص التوضيحي والمشغل
- `align-items: center`: توسيط عمودي
- `gap: 0.8rem`: مسافة بين النص والمشغل
- `cursor: help`: مؤشر مساعدة عند التمرير
- `min-width: 280px`: حد أدنى للعرض لضمان ظهور المشغل بشكل كامل

```css
.audio-player-wrapper:hover {
    border-color: var(--primary-color);
    background: rgba(30, 35, 40, 0.95);
    box-shadow: 0 2px 10px rgba(21, 250, 207, 0.15);
}
```
- عند التمرير: تغيير لون الحد، زيادة شفافية الخلفية، إضافة ظل

#### `.audio-label-text`:
```css
.audio-label-text {
    color: var(--primary-color);
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    flex-shrink: 0;
    letter-spacing: 0.3px;
}
```
- **الوظيفة**: نص توضيحي "ترجمة صوتية"
- `color: var(--primary-color)`: لون النص باللون الأساسي (#15facf)
- `font-size: 0.75rem`: حجم خط صغير (12px)
- `font-weight: 600`: وزن خط متوسط-ثقيل
- `white-space: nowrap`: منع كسر النص
- `flex-shrink: 0`: منع تقلص النص
- `letter-spacing: 0.3px`: تباعد بين الأحرف

#### `.audio-element`:
```css
.audio-element {
    flex: 1;
    min-width: 0;
    height: 36px;
    outline: none;
    display: block;
    box-sizing: border-box;
}
```
- **الوظيفة**: عنصر الصوت نفسه
- `flex: 1`: يأخذ المساحة المتبقية
- `height: 36px`: ارتفاع ثابت
- `min-width: 0`: يسمح بالانكماش في flexbox

#### تخصيص عناصر التحكم (Webkit):
```css
.audio-element::-webkit-media-controls-panel {
    background-color: transparent !important;
}
```
- إزالة خلفية عناصر التحكم الافتراضية

```css
.audio-element::-webkit-media-controls-play-button {
    background-color: var(--primary-color) !important;
    border-radius: 50% !important;
    width: 28px !important;
    height: 28px !important;
}
```
- زر التشغيل: دائري، باللون الأساسي، حجم 28px

```css
.audio-element::-webkit-media-controls-current-time-display,
.audio-element::-webkit-media-controls-time-remaining-display {
    color: var(--text-light) !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 0.75rem !important;
    font-weight: 500;
}
```
- عرض الوقت: لون فاتح، خط Inter، حجم صغير

```css
.audio-element::-webkit-media-controls-timeline {
    background-color: rgba(58, 64, 71, 0.8) !important;
    border-radius: 2px;
    height: 3px;
    margin: 0 0.4rem;
}
```
- شريط التقدم: خلفية داكنة، ارتفاع 3px

```css
.audio-element::-webkit-media-controls-timeline::-webkit-slider-thumb {
    background-color: var(--primary-color) !important;
    border-radius: 50%;
    width: 10px;
    height: 10px;
}
```
- مؤشر شريط التقدم: دائري، باللون الأساسي

#### التصميم المتجاوب:
```css
@media (max-width: 768px) {
    .audio-section {
        justify-content: flex-start;
        width: 100%;
    }

    .audio-player-wrapper {
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        padding: 0.45rem 0.7rem;
        box-sizing: border-box;
        flex-wrap: wrap;
        gap: 0.6rem;
    }

    .audio-label-text {
        font-size: 0.7rem;
        width: 100%;
    }

    .audio-element {
        height: 32px;
        width: 100%;
        flex: 1 1 100%;
    }
}
```
- في الشاشات الصغيرة:
  - المشغل يأخذ العرض الكامل
  - النص التوضيحي في سطر منفصل
  - تقليل الأحجام والمسافات

### ملخص التصميم:

- **النمط:** Dark Theme (خلفية داكنة، نص فاتح)
- **اللون الأساسي:** فيروزي/أخضر فاتح (#15facf) - مطابق لتصميم HR Attrition Dashboard
- **الخط:** Inter (خط إنجليزي احترافي)
- **الاتجاه:** LTR (يسار لليمين)
- **التصميم:** متجاوب (responsive) للجوال والكمبيوتر
- **الأنيميشن:** انتقالات سلسة في جميع العناصر
- **إمكانية الوصول:** outline للتركيز، aria-label للروابط
- **مشغلات الصوت:** في الزاوية اليمنى العليا لكل قسم تطبيق، مع نص توضيحي (تم إزالة title attribute)

---

## CSS لصفحة About (about.html)

### نظرة عامة:
تنسيقات خاصة لصفحة About التي تعرض معلومات فريق المشروع.

### `.about-content`:
```css
.about-content {
    max-width: 900px;
    margin: 0 auto;
}
```
- **الوظيفة**: حاوية رئيسية للمحتوى
- **max-width**: 900px (أقل من container العادي 1200px)
- **margin: 0 auto**: توسيط المحتوى

### `.about-card`:
```css
.about-card {
    background: rgba(30, 35, 40, 0.8);
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px var(--shadow);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}

.about-card:hover {
    box-shadow: 0 8px 35px rgba(21, 250, 207, 0.25);
    transform: translateY(-3px);
}
```
- **الوظيفة**: بطاقة تحتوي على معلومات الفريق
- **التصميم**: نفس نمط البطاقات الأخرى في الموقع
- **Hover Effect**: رفع البطاقة قليلاً عند التمرير

### `.team-grid`:
```css
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
}
```
- **الوظيفة**: شبكة لعرض أسماء الطلاب
- **Grid Layout**: توزيع تلقائي حسب حجم الشاشة
- **auto-fit**: يتكيف مع عدد العناصر
- **minmax(200px, 1fr)**: كل بطاقة بحد أدنى 200px

### `.team-member-card`:
```css
.team-member-card {
    background: rgba(37, 42, 48, 0.6);
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.team-member-card:hover {
    border-color: var(--primary-color);
    box-shadow: 0 6px 25px rgba(21, 250, 207, 0.2);
    transform: translateY(-5px);
}
```
- **الوظيفة**: بطاقة لكل طالب
- **text-align: center**: توسيط النص
- **Hover Effect**: تغيير لون الحد ورفع البطاقة

### `.member-name`:
```css
.member-name {
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    transition: color 0.3s ease;
}

.team-member-card:hover .member-name {
    color: var(--primary-color);
}
```
- **الوظيفة**: اسم الطالب
- **Hover Effect**: تغيير اللون إلى اللون الأساسي عند التمرير

### Responsive Design:
```css
@media (max-width: 768px) {
    .about-card {
        padding: 1.5rem;
    }

    .team-grid {
        grid-template-columns: 1fr;
        gap: 0.8rem;
    }
}
```
- في الشاشات الصغيرة:
  - تقليل padding للبطاقة
  - عرض عمود واحد للشبكة

---

## تحسينات Navigation (Header) - تحديثات حديثة

### تحسينات تمت بعد إضافة تبويب About:
```css
.nav-link {
    font-size: 0.85rem;  /* تم تقليلها من 0.9rem */
    padding: 0.5rem 0.8rem;  /* تم تقليلها من 1rem */
}

.nav-list {
    gap: 0.2rem;  /* تم تقليلها من 0.25rem */
    flex-wrap: nowrap;  /* لمنع الانقسام على سطرين */
    flex: 1;
    justify-content: flex-end;
}

.logo {
    font-size: 1.4rem;  /* تم تقليلها من 1.5rem */
    flex-shrink: 0;
}

.header .container {
    gap: 1.5rem;  /* تم تقليلها من 2rem */
    flex-wrap: nowrap;
}
```
- **السبب**: بعد إضافة تبويب About، أصبح عدد التبويبات 9، مما تسبب في انقسام الهيدر على سطرين
- **الحل**: تقليل الأحجام والمسافات ومنع الانقسام على الشاشات الكبيرة

### Media Queries للـ Navigation:
```css
@media (max-width: 1200px) {
    .nav-link {
        font-size: 0.8rem;
        padding: 0.45rem 0.7rem;
    }
    
    .nav-list {
        gap: 0.15rem;
    }
    
    .logo {
        font-size: 1.3rem;
    }
    
    .logo-icon {
        width: 35px;
        height: 35px;
    }
}

@media (max-width: 1024px) {
    .nav-list {
        flex-wrap: wrap;  /* السماح بالانقسام على الشاشات المتوسطة */
    }
    
    .header .container {
        gap: 1rem;
    }
}
```
- **الشاشات الكبيرة (>1024px)**: التبويبات في سطر واحد
- **الشاشات المتوسطة (768px-1024px)**: السماح بالانقسام عند الحاجة
- **الشاشات الصغيرة (<768px)**: تصميم عمودي كامل

---

## تحسينات Applications Section - تحديثات حديثة

### تقليل المساحة الفارغة:
```css
.applications-section {
    padding-top: 2rem;  /* تم تقليلها من 3.5rem */
}

.applications-section .section-title {
    margin-bottom: 0.5rem;  /* تم تقليلها من 2rem */
}
```
- **الوظيفة**: تقليل المساحة الفارغة فوق عنوان القسم والملف الصوتي
- **النتيجة**: العنوان والملف الصوتي أقرب للقسم السابق
- **ملاحظة**: تم الحفاظ على التصميم الأصلي للـ card-header (space-between) وموقع الملف الصوتي في اليمين

---

## التعديلات الأخيرة - تنظيف الكود

### إزالة التعليقات المفرطة:

#### التعليقات التي تم إزالتها:
1. **فواصل القسم المفرطة**:
   - تم إزالة `/* ============================================ */` من جميع الأماكن
   - كانت موجودة قبل `.audio-section`, `.thank-you-message`, `.about-content`

2. **التعليقات التوضيحية المفرطة**:
   - تم إزالة `/* Customize audio controls - Dark theme, remove white colors */`
   - تم إزالة `/* Remove white backgrounds from controls */`
   - تم إزالة `/* Offset for sticky header when scrolling to section */`

### تنظيف الأسطر الفارغة:
- تم إزالة الأسطر الفارغة المفرطة بين القواعد CSS
- الكود الآن أكثر نظافة ووضوحًا
- مثال: تم إزالة السطر الفارغ المفرط بين `.features-list` و `.features-list:hover`

### ملاحظات:
- جميع التعديلات تمت للحفاظ على وظائف الموقع كما هي
- لا توجد تغييرات في التصميم أو الوظائف
- الكود الآن أكثر احترافية ونظافة
- استخدام `!important` في عناصر audio controls لا يزال موجودًا لأنه ضروري للتحكم في عناصر media controls

---

## الإضافات الجديدة - Logo و Favicon

### إضافة Logo Icon (أيقونة الشعار):

#### التعديلات في HTML:
- تم إضافة `<div class="logo-wrapper">` في جميع صفحات HTML
- تم إضافة `<img src="logo.png" alt="AI Logo" class="logo-icon">` داخل الـ wrapper
- تم نقل `<h1 class="logo">` داخل الـ wrapper

**قبل التعديل**:
```html
<h1 class="logo">Artificial Intelligence</h1>
```

**بعد التعديل**:
```html
<div class="logo-wrapper">
    <img src="logo.png" alt="AI Logo" class="logo-icon">
    <h1 class="logo">Artificial Intelligence</h1>
</div>
```

#### التعديلات في CSS:
- تم إضافة `.logo-wrapper` (السطور 68-75)
- تم إضافة `.logo-icon` (السطور 77-84)
- تم إضافة `.logo-wrapper:hover .logo-icon` (السطور 86-89)
- تم تحديث `.logo-wrapper:hover .logo` (السطور 101-103)

#### Media Queries للـ Logo:
- **الشاشات الكبيرة (>1200px)**: الأيقونة 40px × 40px
- **الشاشات المتوسطة (768px-1200px)**: الأيقونة 35px × 35px
- **الشاشات الصغيرة (<768px)**: الأيقونة 32px × 32px، تقليل gap في wrapper

```css
@media (max-width: 1200px) {
    .logo-icon {
        width: 35px;
        height: 35px;
    }
}

@media (max-width: 768px) {
    .logo-wrapper {
        gap: 0.6rem;  /* تقليل المسافة بين الأيقونة والنص */
    }
    
    .logo-icon {
        width: 32px;
        height: 32px;
    }
}
```

### تغيير Favicon:
- تم تغيير `favicon.ico` إلى `favicon.png` في جميع ملفات HTML
- تم تحديث `<link rel="icon" type="image/x-icon" href="favicon.png">` في جميع الصفحات

### الملفات الجديدة:
- **logo.png**: صورة الشعار (40px × 40px)
- **favicon.png**: أيقونة الموقع (تم التحديث من favicon.ico)

### ملاحظات:
- جميع الصفحات تم تحديثها: `index.html`, `about.html`, `contact.html`, `Thank_You.html`
- التصميم متجاوب ويعمل على جميع أحجام الشاشات
- تأثيرات hover جميلة على الأيقونة والنص
