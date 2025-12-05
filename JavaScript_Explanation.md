# شرح JavaScript - دليل شامل ومبسط

## ما هو JavaScript؟
JavaScript = لغة برمجة للويب
- تضيف **التفاعلية** و**الحركة** للموقع
- تجعل الموقع يستجيب لتفاعل المستخدم
- مثل المحرك الكهربائي للمبنى

---

## شرح ملف script.js

### السطور 1-19: منع التمرير التلقائي عند فتح الصفحة
```javascript
// لو في hash في URL (مثل #intro أو #benefits)
if (window.location.hash) {
    // نمسح الـ hash من URL بدون scroll
    // replaceState = غير الـ URL بدون إعادة تحميل
    history.replaceState(null, null, ' ');
    
    // نرجع الصفحة لأعلى
    window.scrollTo(0, 0);
}
```
**شرح:**
- `window.location.hash`: يتحقق من وجود hash في URL (مثل #intro)
- `history.replaceState`: يغير URL بدون إعادة تحميل
- `window.scrollTo(0, 0)`: يرجع الصفحة لأعلى
- **الهدف:** منع الانتقال التلقائي عند فتح الصفحة، عشان Hero section يظهر أولاً

### السطور 22-58: Smooth Scroll (التمرير السلس)

#### السطر 30: اختيار الروابط
```javascript
var navLinks = document.querySelectorAll('a[href^="#"]');
```
**شرح السطر:**
- `var`: تعريف متغير (مثل `int` في C++)
- `navLinks`: اسم المتغير (قائمة الروابط)
- `document`: صفحة HTML
- `querySelectorAll`: اختيار كل العناصر المطابقة
- `'a[href^="#"]'`: كل روابط `<a>` التي `href` يبدأ بـ `#`

**مثال:** يختار كل الروابط مثل `<a href="#intro">` و `<a href="#benefits">`

#### السطور 34-57: إضافة وظيفة لكل رابط
```javascript
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('href');
        var targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
```

**شرح كل سطر:**

**السطر 34:** `navLinks.forEach(function(link) {`
- `forEach`: حلقة تمر على كل عنصر (مثل `for` في C++)
- `function(link)`: دالة تأخذ كل رابط

**السطر 38:** `link.addEventListener('click', function(event) {`
- `addEventListener`: استمع لحدث
- `'click'`: حدث الضغط
- `function(event)`: دالة تنفذ عند الضغط
- `event`: معلومات عن الحدث

**السطر 39:** `event.preventDefault();`
- `preventDefault`: منع السلوك الافتراضي
- **الهدف:** منع القفز المفاجئ للقسم

**السطر 44:** `var targetId = this.getAttribute('href');`
- `this`: الرابط نفسه
- `getAttribute('href')`: خذ قيمة `href`
- **مثال:** `targetId = "#intro"`

**السطر 47:** `var targetSection = document.querySelector(targetId);`
- `querySelector`: اختيار عنصر واحد
- **مثال:** يختار `<section id="intro">`

**السطر 50:** `if (targetSection) {`
- `if`: شرط (نفس `if` في C++)
- **الهدف:** تأكد أن العنصر موجود

**السطور 53-55:** `targetSection.scrollIntoView({ behavior: 'smooth' });`
- `scrollIntoView`: انتقل للعنصر
- `behavior: 'smooth'`: حركة سلسة
- **النتيجة:** انتقال سلس للقسم

---

### السطور 62-109: Form Validation (التحقق من النموذج)

#### السطر 67: اختيار النموذج
```javascript
var contactForm = document.querySelector('.contact-form');
```
- `querySelector`: اختيار عنصر واحد
- `'.contact-form'`: كلاس اسمه `contact-form`
- **النتيجة:** يختار `<form class="contact-form">`

#### السطر 70: التحقق من وجود النموذج
```javascript
if (contactForm) {
```
- **الهدف:** تأكد أن النموذج موجود قبل إضافة الوظيفة

#### السطر 72: إضافة وظيفة عند الإرسال
```javascript
contactForm.addEventListener('submit', function(event) {
```
- `'submit'`: حدث الإرسال (عند الضغط على زر الإرسال)
- **الهدف:** التحقق من البيانات قبل الإرسال

#### السطر 74: منع الإرسال الافتراضي
```javascript
event.preventDefault();
```
- **الهدف:** منع إرسال النموذج (لنراجع البيانات أولاً)

#### السطور 80-82: أخذ قيم الحقول
```javascript
var name = this.querySelector('[name="name"]').value.trim();
var email = this.querySelector('[name="email"]').value.trim();
var message = this.querySelector('[name="message"]').value.trim();
```

**شرح كل سطر:**

**السطر 80:** `var name = this.querySelector('[name="name"]').value.trim();`
- `this`: النموذج نفسه
- `querySelector('[name="name"]')`: اختيار حقل `name="name"`
- `.value`: خذ القيمة المكتوبة
- `.trim()`: احذف المسافات من الأول والآخر
- **مثال:** `"  أحمد  "` يصبح `"أحمد"`

**السطر 81:** نفس الشيء لحقل البريد
**السطر 82:** نفس الشيء لحقل الرسالة

#### السطور 88-91: التحقق من الاسم
```javascript
if (name === '') {
    alert('الرجاء إدخال الاسم');
    return;
}
```

**شرح:**
- `name === ''`: هل الاسم فارغ؟
- `===`: مقارنة صارمة (نوع وقيمة)
- `alert`: نافذة تنبيه
- `return`: توقف هنا (لا تكمل)

#### السطور 93-96: التحقق من البريد
```javascript
if (email === '' || !email.includes('@')) {
    alert('الرجاء إدخال بريد إلكتروني صحيح');
    return;
}
```

**شرح:**
- `email === ''`: هل البريد فارغ؟
- `||`: أو (OR)
- `!email.includes('@')`: هل البريد لا يحتوي على `@`؟
- `includes`: يحتوي على
- `!`: نفي (NOT)

**مثال:**
- `"ahmed@gmail.com"` → صحيح ✓
- `"ahmedgmail.com"` → خطأ ✗ (لا يوجد @)

#### السطور 98-101: التحقق من الرسالة
```javascript
if (message === '') {
    alert('الرجاء إدخال الرسالة');
    return;
}
```
- نفس فكرة الاسم

#### السطور 104-107: نجاح التحقق
```javascript
alert('شكراً لك! تم إرسال رسالتك بنجاح.');
this.reset();
```

**شرح:**
- `alert`: رسالة نجاح
- `this.reset()`: امسح كل الحقول
- **النتيجة:** النموذج يصبح فارغاً

---

### السطور 113-225: Back to Top Button (زر العودة للأعلى) + Active Link Highlighting

#### السطور 119-122: إنشاء الزر
```javascript
var backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
```

**شرح كل سطر:**

**السطر 119:** `var backToTopBtn = document.createElement('button');`
- `createElement`: أنشئ عنصر HTML جديد
- `'button'`: نوع العنصر (زر)
- **النتيجة:** `<button></button>`

**السطر 120:** `backToTopBtn.innerHTML = '↑';`
- `innerHTML`: المحتوى الداخلي
- `'↑'`: سهم للأعلى
- **النتيجة:** `<button>↑</button>`

**السطر 121:** `backToTopBtn.className = 'back-to-top';`
- `className`: اسم الكلاس CSS
- **النتيجة:** `<button class="back-to-top">↑</button>`

#### السطر 126: إضافة الزر للصفحة
```javascript
document.body.appendChild(backToTopBtn);
```
- `body`: جسم الصفحة
- `appendChild`: أضف كطفل
- **النتيجة:** الزر يظهر في الصفحة

#### السطور 129-214: إظهار/إخفاء الزر وتحديث الرابط النشط
```javascript
window.addEventListener('scroll', function() {
    // حساب المسافة من أسفل الصفحة
    var scrollPosition = window.scrollY; // من فين اتمررنا
    var windowHeight = window.innerHeight; // ارتفاع الشاشة
    var pageHeight = document.documentElement.scrollHeight; // ارتفاع الصفحة كاملة
    var distanceFromBottom = pageHeight - (scrollPosition + windowHeight); // المسافة من تحت
    
    // footerHeight = ارتفاع الفوتر (تقريباً 150 بكسل)
    var footerHeight = 150;
    
    // الشرط: لو اتمررنا أكتر من 300 بكسل من فوق
    // ولسه مش قريبين من الفوتر (المسافة من تحت أكتر من ارتفاع الفوتر)
    if (scrollPosition > 300 && distanceFromBottom > footerHeight) {
        // classList.add = أضف كلاس (اعرض الزر)
        backToTopBtn.classList.add('show');
    } else {
        // classList.remove = احذف كلاس (اخفي الزر)
        backToTopBtn.classList.remove('show');
    }
    
    // ============================================
    // تحديث الرابط النشط حسب القسم الحالي
    // ============================================
    // الهدف: نحدد أي قسم نشاهده حالياً ونضيف highlight للرابط
    
    // نحسب موضع التمرير الحالي
    var scrollPos = window.scrollY;
    
    // نحسب ارتفاع Hero section (القسم اللي قبل المقدمة)
    var heroSection = document.querySelector('.hero');
    var heroHeight = 0;
    if (heroSection) {
        heroHeight = heroSection.offsetHeight; // ارتفاع Hero section
    }
    
    // لو المستخدم لسه في Hero section أو في أول الصفحة، ما نحددش active link
    // عشان Hero section مش في القائمة
    if (scrollPos < heroHeight - 100) {
        // نزيل الكلاس 'active' من كل الروابط
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        return; // توقف هنا، ما نكملش
    }
    
    // نحسب موضع التمرير مع إضافة مسافة للهيدر
    var scrollPosWithOffset = scrollPos + 150; // +150 للتعويض عن الهيدر
    
    // نختار كل الأقسام
    var sections = document.querySelectorAll('.section');
    
    // متغير لحفظ القسم الحالي
    var currentSection = '';
    
    // نمر على كل قسم
    sections.forEach(function(section) {
        // offsetTop = المسافة من أعلى الصفحة للقسم
        var sectionTop = section.offsetTop;
        // offsetHeight = ارتفاع القسم
        var sectionHeight = section.offsetHeight;
        
        // لو موضع التمرير داخل هذا القسم
        if (scrollPosWithOffset >= sectionTop && scrollPosWithOffset < sectionTop + sectionHeight) {
            // id = معرف القسم (مثل 'intro', 'benefits')
            currentSection = section.getAttribute('id');
        }
    });
    
    // نزيل الكلاس 'active' من كل الروابط
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    
    // نضيف الكلاس 'active' للرابط المطابق للقسم الحالي
    if (currentSection) {
        var activeLink = document.querySelector('a[href="#' + currentSection + '"]');
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
```

**شرح كل جزء:**

**السطر 129:** `window.addEventListener('scroll', function() {`
- `window`: نافذة المتصفح
- `'scroll'`: حدث التمرير
- **الهدف:** تنفيذ الكود عند كل تمرير

**السطور 136-139:** حساب المسافات
- `scrollY`: المسافة المتمررة من الأعلى
- `innerHeight`: ارتفاع الشاشة المرئية
- `scrollHeight`: ارتفاع الصفحة كاملة
- `distanceFromBottom`: المسافة المتبقية من الأسفل

**السطر 142:** `var footerHeight = 150;`
- ارتفاع الفوتر (تقريباً)

**السطر 146:** `if (scrollPosition > 300 && distanceFromBottom > footerHeight) {`
- `scrollPosition > 300`: هل تمررنا أكثر من 300px؟
- `&&`: و (AND)
- `distanceFromBottom > footerHeight`: هل المسافة من الأسفل أكبر من ارتفاع الفوتر؟
- **الهدف:** إظهار الزر فقط لو:
  1. تمررنا أكثر من 300px من الأعلى
  2. ولسنا قريبين من الفوتر

**السطر 148:** `backToTopBtn.classList.add('show');`
- `classList.add`: أضف كلاس
- `'show'`: اسم الكلاس
- **النتيجة:** الزر يظهر

**السطر 150:** `backToTopBtn.classList.remove('show');`
- `classList.remove`: احذف كلاس
- **النتيجة:** الزر يختفي

**السطور 160-177:** تحديد Hero Section
- نحسب ارتفاع Hero section
- لو المستخدم لسه في Hero section، ما نحددش active link
- عشان Hero section مش في القائمة

**السطور 180-200:** تحديد القسم الحالي
- نحسب موضع التمرير مع إضافة offset للهيدر
- نمر على كل الأقسام ونحدد أي قسم نشاهده حالياً
- نحفظ id القسم الحالي

**السطور 203-213:** تحديث الرابط النشط
- نزيل الكلاس `active` من كل الروابط
- نضيف الكلاس `active` للرابط المطابق للقسم الحالي

#### السطور 217-225: وظيفة الزر عند الضغط
```javascript
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

**شرح:**
- `'click'`: حدث الضغط
- `scrollTo`: انتقل لموضع معين
- `top: 0`: أعلى الصفحة
- `behavior: 'smooth'`: حركة سلسة
- **النتيجة:** عند الضغط، نرجع لأعلى الصفحة بسلاسة

---

## مصطلحات JavaScript الأساسية:

| المصطلح | الوصف | مثال |
|---------|-------|------|
| `var` | متغير | `var name = "أحمد";` |
| `function` | دالة | `function test() { ... }` |
| `if` | شرط | `if (x > 5) { ... }` |
| `===` | مقارنة صارمة | `if (x === 5) { ... }` |
| `&&` | و (AND) | `if (x > 5 && y < 10)` |
| `\|\|` | أو (OR) | `if (x > 5 \|\| y < 10)` |
| `!` | نفي (NOT) | `if (!x)` |
| `return` | إرجاع | `return;` |
| `document` | صفحة HTML | `document.querySelector(...)` |
| `addEventListener` | استمع لحدث | `button.addEventListener('click', ...)` |
| `querySelector` | اختيار عنصر واحد | `document.querySelector('.class')` |
| `querySelectorAll` | اختيار كل العناصر | `document.querySelectorAll('a')` |
| `getAttribute` | خذ قيمة الخاصية | `element.getAttribute('href')` |
| `classList.add` | أضف كلاس | `element.classList.add('active')` |
| `classList.remove` | احذف كلاس | `element.classList.remove('active')` |
| `scrollIntoView` | انتقل للعنصر | `element.scrollIntoView({ behavior: 'smooth' })` |
| `scrollTo` | انتقل لموضع | `window.scrollTo({ top: 0 })` |
| `createElement` | أنشئ عنصر | `document.createElement('button')` |
| `appendChild` | أضف كطفل | `parent.appendChild(child)` |
| `value` | قيمة الحقل | `input.value` |
| `trim()` | احذف المسافات | `"  text  ".trim()` → `"text"` |
| `includes()` | يحتوي على | `"text".includes('t')` → `true` |

---

## مقارنة مع C++:

| JavaScript | C++ | الوصف |
|------------|-----|-------|
| `var x = 5;` | `int x = 5;` | متغير |
| `if (x === 5)` | `if (x == 5)` | شرط |
| `function test()` | `void test()` | دالة |
| `x++` | `x++` | زيادة |
| `x && y` | `x && y` | و (AND) |
| `x \|\| y` | `x \|\| y` | أو (OR) |
| `!x` | `!x` | نفي |
| `array.forEach(...)` | `for (auto item : array)` | حلقة |

---

## نصائح للمناقشة:

### إذا سألك الدكتور عن JavaScript:

1. **ما هو JavaScript؟**
   - لغة برمجة تضيف التفاعلية للموقع
   - تجعل الموقع يستجيب لتفاعل المستخدم

2. **ما الذي أضفته في المشروع؟**
   - منع التمرير التلقائي: عند فتح الصفحة
   - Smooth Scroll: انتقال سلس بين الأقسام
   - Form Validation: التحقق من صحة البيانات
   - Back to Top Button: زر للعودة لأعلى
   - Active Link Highlighting: إظهار الرابط النشط تلقائياً

3. **كيف يعمل Smooth Scroll؟**
   - نستمع لحدث الضغط على الرابط
   - نمنع القفز الافتراضي بـ `preventDefault`
   - ننتقل للقسم بسلاسة باستخدام `scrollIntoView`

4. **كيف يعمل Form Validation؟**
   - نستمع لحدث الإرسال (`submit`)
   - نأخذ قيم الحقول بـ `.value`
   - نتحقق من البيانات (فارغ، بريد صحيح)
   - لو كل شيء صحيح، نعرض رسالة نجاح

5. **كيف يعمل Active Link Highlighting？**
   - نستمع لحدث التمرير (`scroll`)
   - نحسب موضع التمرير الحالي
   - نحدد أي قسم نشاهده حالياً
   - نضيف كلاس `active` للرابط المطابق

6. **كيف يعمل Back to Top Button؟**
   - ننشئ الزر بـ `createElement`
   - نضيفه للصفحة بـ `appendChild`
   - نستمع للتمرير ونظهره/نخفيه حسب الموضع
   - عند الضغط، نرجع لأعلى بـ `scrollTo`

7. **ما هو `addEventListener`؟**
   - دالة للاستماع للأحداث
   - `'click'`: حدث الضغط
   - `'scroll'`: حدث التمرير
   - `'submit'`: حدث الإرسال

8. **ما الفرق بين `querySelector` و `querySelectorAll`؟**
   - `querySelector`: يختار عنصر واحد
   - `querySelectorAll`: يختار كل العناصر المطابقة

9. **ما هو `preventDefault`؟**
   - منع السلوك الافتراضي
   - مثال: منع القفز عند الضغط على رابط

10. **كيف نتحقق من البريد الإلكتروني؟**
    - نتحقق إنه مش فارغ
    - نتحقق إنه فيه `@` باستخدام `includes('@')`

---

## أمثلة عملية:

### مثال 1: تغيير النص
```javascript
var title = document.querySelector('.title');
title.innerHTML = 'نص جديد';
```
- يغير نص العنوان

### مثال 2: إضافة كلاس
```javascript
var button = document.querySelector('.button');
button.classList.add('active');
```
- يضيف كلاس `active` للزر

### مثال 3: شرط بسيط
```javascript
if (age >= 18) {
    alert('أنت بالغ');
} else {
    alert('أنت قاصر');
}
```
- يتحقق من العمر

### مثال 4: حلقة على عناصر
```javascript
var links = document.querySelectorAll('a');
links.forEach(function(link) {
    link.style.color = 'blue';
});
```
- يغير لون كل الروابط للأزرق

---

## الخلاصة:
- JavaScript = التفاعلية والحركة
- `var`: المتغيرات
- `function`: الدوال
- `if`: الشروط
- `addEventListener`: الاستماع للأحداث
- `querySelector`: اختيار العناصر
- `preventDefault`: منع السلوك الافتراضي
- `scrollIntoView`: الانتقال السلس
- `classList`: إضافة/حذف الكلاسات
- Form Validation: التحقق من البيانات قبل الإرسال
- Active Link Highlighting: تحديث الرابط النشط تلقائياً
- Back to Top Button: زر للعودة لأعلى مع إخفاء عند الفوتر
