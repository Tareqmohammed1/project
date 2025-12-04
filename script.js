// ============================================
// JavaScript بسيط جداً - شرح مفصل
// ============================================

// ============================================
// منع التمرير التلقائي عند فتح الصفحة
// ============================================
// الهدف: لو في hash في URL (#intro مثلاً)، ما نعملش scroll تلقائي
// عشان Hero section يظهر أولاً

// لو في hash في URL (مثل #intro أو #benefits)
if (window.location.hash) {
    // نمسح الـ hash من URL بدون scroll
    // replaceState = غير الـ URL بدون إعادة تحميل
    history.replaceState(null, null, ' ');
    
    // نرجع الصفحة لأعلى
    window.scrollTo(0, 0);
}

// ============================================
// الجزء الأول: Smooth Scroll (التمرير السلس)
// ============================================
// الهدف: لما نضغط على رابط في القائمة، ننتقل للقسم بشكل سلس

// الخطوة 1: نختار كل الروابط في القائمة
// document = صفحة HTML
// querySelectorAll = اختار كل العناصر اللي مطابقة
// 'a[href^="#"]' = كل روابط <a> اللي href بتاعها يبدأ بـ #
var navLinks = document.querySelectorAll('a[href^="#"]');

// الخطوة 2: نمر على كل رابط ونضيف له وظيفة عند الضغط
// forEach = مر على كل عنصر في القائمة
navLinks.forEach(function(link) {
    // addEventListener = استمع لحدث معين
    // 'click' = حدث الضغط
    // function = الوظيفة اللي هتتنفذ لما نضغط
    link.addEventListener('click', function(event) {
        // preventDefault = منع السلوك الافتراضي (القفز المفاجئ)
        event.preventDefault();
        
        // getAttribute = خد قيمة الـ href من الرابط
        // مثال: '#intro' أو '#benefits'
        var targetId = this.getAttribute('href');
        
        // querySelector = اختار العنصر اللي معرفه هو targetId
        var targetSection = document.querySelector(targetId);
        
        // if = لو العنصر موجود
        if (targetSection) {
            // scrollIntoView = انتقل للعنصر
            // behavior: 'smooth' = حركة سلسة
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ============================================
// الجزء الثاني: Form Validation (التحقق من النموذج)
// ============================================
// الهدف: نتأكد إن المستخدم دخل البيانات صح قبل الإرسال

// الخطوة 1: نختار النموذج
var contactForm = document.querySelector('.contact-form');

// الخطوة 2: لو النموذج موجود، نضيف له وظيفة عند الإرسال
if (contactForm) {
    // addEventListener = استمع لحدث الإرسال
    contactForm.addEventListener('submit', function(event) {
        // preventDefault = منع الإرسال الافتراضي
        event.preventDefault();
        
        // الخطوة 3: ناخد قيم الحقول
        // querySelector = اختار الحقل
        // .value = خد القيمة المكتوبة
        // trim() = احذف المسافات من الأول والآخر
        var name = this.querySelector('#name').value.trim();
        var email = this.querySelector('#email').value.trim();
        var message = this.querySelector('#message').value.trim();
        
        // الخطوة 4: نتحقق من البيانات
        // === '' = لو الحقل فاضي
        // || = أو
        // includes = يحتوي على
        if (name === '') {
            alert('الرجاء إدخال الاسم');
            return; // توقف هنا
        }
        
        if (email === '' || !email.includes('@')) {
            alert('الرجاء إدخال بريد إلكتروني صحيح');
            return; // توقف هنا
        }
        
        if (message === '') {
            alert('الرجاء إدخال الرسالة');
            return; // توقف هنا
        }
        
        // الخطوة 5: لو كل حاجة صح، نعرض رسالة نجاح
        alert('شكراً لك! تم إرسال رسالتك بنجاح.');
        
        // reset = امسح كل الحقول
        this.reset();
    });
}


// ============================================
// الجزء الثالث: Back to Top Button (زر العودة للأعلى)
// ============================================
// الهدف: نضيف زر للعودة لأعلى الصفحة

// الخطوة 1: ننشئ الزر
// createElement = أنشئ عنصر HTML جديد
var backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑'; // النص اللي جوا الزر
backToTopBtn.className = 'back-to-top'; // الكلاس CSS

// الخطوة 2: نضيف الزر للصفحة
// body = جسم الصفحة
// appendChild = أضف العنصر كطفل
document.body.appendChild(backToTopBtn);

// الخطوة 3: نستمع لحدث التمرير
window.addEventListener('scroll', function() {
    // scrollY = المسافة اللي اتمررناها من فوق
    // innerHeight = ارتفاع الشاشة المرئية
    // scrollHeight = ارتفاع الصفحة كاملة
    // footer = الفوتر (آخر جزء في الصفحة)
    
    // نحسب المسافة من أسفل الصفحة
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

// الخطوة 4: لما نضغط على الزر، نرجع لأعلى
backToTopBtn.addEventListener('click', function() {
    // scrollTo = انتقل لموضع معين
    // top: 0 = أعلى الصفحة
    // behavior: 'smooth' = حركة سلسة
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ============================================
// شرح المصطلحات الأساسية (مقارنة بـ C++):
// ============================================
// 
// 1. var = متغير (مثل int, string في C++)
//    مثال: var name = "أحمد";
//
// 2. document = صفحة HTML (مثل object في C++)
//
// 3. querySelector = اختار عنصر واحد (مثل pointer في C++)
//    مثال: document.querySelector('#name')
//
// 4. querySelectorAll = اختار كل العناصر (مثل array في C++)
//
// 5. addEventListener = استمع لحدث (مثل function call في C++)
//    مثال: button.addEventListener('click', function() { ... })
//
// 6. function = دالة (مثل function في C++)
//    مثال: function myFunction() { ... }
//
// 7. if = شرط (نفس if في C++)
//    مثال: if (name === '') { ... }
//
// 8. === = مقارنة (مثل == في C++)
//    مثال: if (x === 5) { ... }
//
// 9. forEach = حلقة تمر على عناصر (مثل for loop في C++)
//    مثال: array.forEach(function(item) { ... })
//
// 10. return = ارجع (نفس return في C++)
//     مثال: return; (توقف هنا)
//
// ============================================
// ملاحظات مهمة:
// ============================================
// 1. JavaScript حساس لحالة الأحرف (case sensitive)
// 2. نستخدم 'var' للمتغيرات (بسيط وسهل)
// 3. كل سطر ينتهي بـ ; (نقطة فاصلة)
// 4. نستخدم '' أو "" للنصوص (strings)
// 5. // للتعليقات (مثل // في C++)
// ============================================
