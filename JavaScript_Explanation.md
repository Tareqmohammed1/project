# شرح JavaScript - دليل شامل ومبسط

## ما هو JavaScript؟
JavaScript = لغة برمجة للويب
- تضيف **التفاعلية** و**الحركة** للموقع
- تجعل الموقع يستجيب لتفاعل المستخدم
- مثل المحرك الكهربائي للمبنى

---

## شرح ملف script.js

### السطور 1-42: Smooth Scroll (التمرير السلس)

#### السطر 14: اختيار الروابط
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

#### السطور 18-42: إضافة وظيفة لكل رابط
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

**السطر 18:** `navLinks.forEach(function(link) {`
- `forEach`: حلقة تمر على كل عنصر (مثل `for` في C++)
- `function(link)`: دالة تأخذ كل رابط

**السطر 19:** `link.addEventListener('click', function(event) {`
- `addEventListener`: استمع لحدث
- `'click'`: حدث الضغط
- `function(event)`: دالة تنفذ عند الضغط
- `event`: معلومات عن الحدث

**السطر 20:** `event.preventDefault();`
- `preventDefault`: منع السلوك الافتراضي
- **الهدف:** منع القفز المفاجئ للقسم

**السطر 21:** `var targetId = this.getAttribute('href');`
- `this`: الرابط نفسه
- `getAttribute('href')`: خذ قيمة `href`
- **مثال:** `targetId = "#intro"`

**السطر 22:** `var targetSection = document.querySelector(targetId);`
- `querySelector`: اختيار عنصر واحد
- **مثال:** يختار `<section id="intro">`

**السطر 23:** `if (targetSection) {`
- `if`: شرط (نفس `if` في C++)
- **الهدف:** تأكد أن العنصر موجود

**السطور 24-27:** `targetSection.scrollIntoView({ behavior: 'smooth' });`
- `scrollIntoView`: انتقل للعنصر
- `behavior: 'smooth'`: حركة سلسة
- **النتيجة:** انتقال سلس للقسم

---

### السطور 45-93: Form Validation (التحقق من النموذج)

#### السطر 51: اختيار النموذج
```javascript
var contactForm = document.querySelector('.contact-form');
```
- `querySelector`: اختيار عنصر واحد
- `'.contact-form'`: كلاس اسمه `contact-form`
- **النتيجة:** يختار `<form class="contact-form">`

#### السطر 54: التحقق من وجود النموذج
```javascript
if (contactForm) {
```
- **الهدف:** تأكد أن النموذج موجود قبل إضافة الوظيفة

#### السطر 56: إضافة وظيفة عند الإرسال
```javascript
contactForm.addEventListener('submit', function(event) {
```
- `'submit'`: حدث الإرسال (عند الضغط على زر الإرسال)
- **الهدف:** التحقق من البيانات قبل الإرسال

#### السطر 57: منع الإرسال الافتراضي
```javascript
event.preventDefault();
```
- **الهدف:** منع إرسال النموذج (لنراجع البيانات أولاً)

#### السطور 64-66: أخذ قيم الحقول
```javascript
var name = this.querySelector('#name').value.trim();
var email = this.querySelector('#email').value.trim();
var message = this.querySelector('#message').value.trim();
```

**شرح كل سطر:**

**السطر 64:** `var name = this.querySelector('#name').value.trim();`
- `this`: النموذج نفسه
- `querySelector('#name')`: اختيار حقل `id="name"`
- `.value`: خذ القيمة المكتوبة
- `.trim()`: احذف المسافات من الأول والآخر
- **مثال:** `"  أحمد  "` يصبح `"أحمد"`

**السطر 65:** نفس الشيء لحقل البريد
**السطر 66:** نفس الشيء لحقل الرسالة

#### السطور 72-75: التحقق من الاسم
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

#### السطور 77-80: التحقق من البريد
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

#### السطور 82-85: التحقق من الرسالة
```javascript
if (message === '') {
    alert('الرجاء إدخال الرسالة');
    return;
}
```
- نفس فكرة الاسم

#### السطور 87-91: نجاح التحقق
```javascript
alert('شكراً لك! تم إرسال رسالتك بنجاح.');
this.reset();
```

**شرح:**
- `alert`: رسالة نجاح
- `this.reset()`: امسح كل الحقول
- **النتيجة:** النموذج يصبح فارغاً

---

### السطور 96-148: Back to Top Button (زر العودة للأعلى)

#### السطور 103-105: إنشاء الزر
```javascript
var backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
```

**شرح كل سطر:**

**السطر 103:** `var backToTopBtn = document.createElement('button');`
- `createElement`: أنشئ عنصر HTML جديد
- `'button'`: نوع العنصر (زر)
- **النتيجة:** `<button></button>`

**السطر 104:** `backToTopBtn.innerHTML = '↑';`
- `innerHTML`: المحتوى الداخلي
- `'↑'`: سهم للأعلى
- **النتيجة:** `<button>↑</button>`

**السطر 105:** `backToTopBtn.className = 'back-to-top';`
- `className`: اسم الكلاس CSS
- **النتيجة:** `<button class="back-to-top">↑</button>`

#### السطر 110: إضافة الزر للصفحة
```javascript
document.body.appendChild(backToTopBtn);
```
- `body`: جسم الصفحة
- `appendChild`: أضف كطفل
- **النتيجة:** الزر يظهر في الصفحة

#### السطور 113-137: إظهار/إخفاء الزر حسب التمرير
```javascript
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var pageHeight = document.documentElement.scrollHeight;
    var distanceFromBottom = pageHeight - (scrollPosition + windowHeight);
    var footerHeight = 150;
    
    if (scrollPosition > 300 && distanceFromBottom > footerHeight) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});
```

**شرح كل سطر:**

**السطر 113:** `window.addEventListener('scroll', function() {`
- `window`: نافذة المتصفح
- `'scroll'`: حدث التمرير
- **الهدف:** تنفيذ الكود عند كل تمرير

**السطر 120:** `var scrollPosition = window.scrollY;`
- `scrollY`: المسافة المتمررة من الأعلى
- **مثال:** لو تمررنا 500px، `scrollPosition = 500`

**السطر 121:** `var windowHeight = window.innerHeight;`
- `innerHeight`: ارتفاع الشاشة المرئية
- **مثال:** لو الشاشة 800px، `windowHeight = 800`

**السطر 122:** `var pageHeight = document.documentElement.scrollHeight;`
- `scrollHeight`: ارتفاع الصفحة كاملة
- **مثال:** لو الصفحة 2000px، `pageHeight = 2000`

**السطر 123:** `var distanceFromBottom = pageHeight - (scrollPosition + windowHeight);`
- حساب المسافة المتبقية من الأسفل
- **مثال:** `2000 - (500 + 800) = 700px`

**السطر 126:** `var footerHeight = 150;`
- ارتفاع الفوتر (تقريباً)

**السطر 130:** `if (scrollPosition > 300 && distanceFromBottom > footerHeight) {`
- `scrollPosition > 300`: هل تمررنا أكثر من 300px؟
- `&&`: و (AND)
- `distanceFromBottom > footerHeight`: هل المسافة من الأسفل أكبر من ارتفاع الفوتر؟
- **الهدف:** إظهار الزر فقط لو:
  1. تمررنا أكثر من 300px من الأعلى
  2. ولسنا قريبين من الفوتر

**السطر 131:** `backToTopBtn.classList.add('show');`
- `classList.add`: أضف كلاس
- `'show'`: اسم الكلاس
- **النتيجة:** الزر يظهر

**السطر 133:** `backToTopBtn.classList.remove('show');`
- `classList.remove`: احذف كلاس
- **النتيجة:** الزر يختفي

#### السطور 140-148: وظيفة الزر عند الضغط
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
- `behavior: 'smooth'mooth'`: حركة سلسة
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

---

## نصائح للمناقشة:

### إذا سألك الدكتور عن JavaScript:

1. **ما هو JavaScript؟**
   - لغة برمجة تضيف التفاعلية للموقع
   - تجعل الموقع يستجيب لتفاعل المستخدم

2. **ما الذي أضفته في المشروع؟**
   - Smooth Scroll: انتقال سلس بين الأقسام
   - Form Validation: التحقق من صحة البيانات
   - Back to Top Button: زر للعودة لأعلى

3. **كيف يعمل Smooth Scroll؟**
   - نستمع لحدث الضغط على الرابط
   - نمنع القفز الافتراضي
   - ننتقل للقسم بسلاسة باستخدام `scrollIntoView`

4. **كيف يعمل Form Validation؟**
   - نستمع لحدث الإرسال
   - نأخذ قيم الحقول
   - نتحقق من البيانات (فارغ، بريد صحيح)
   - لو كل شيء صحيح، نرسل

5. **ما هو `addEventListener`؟**
   - دالة للاستماع للأحداث
   - `'click'`: حدث الضغط
   - `'scroll'`: حدث التمرير
   - `'submit'`: حدث الإرسال

6. **ما الفرق بين `querySelector` و `querySelectorAll`؟**
   - `querySelector`: يختار عنصر واحد
   - `querySelectorAll`: يختار كل العناصر المطابقة

7. **ما هو `preventDefault`؟**
   - منع السلوك الافتراضي
   - مثال: منع القفز عند الضغط على رابط

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

---

## الخلاصة:
- JavaScript = التفاعلية والحركة
- `var`: المتغيرات
- `function`: الدوال
- `if`: الشروط
- `addEventListener`: الاستماع للأحداث
- `querySelector`: اختيار العناصر
- `preventDefault`: منع السلوك الافتراضي

