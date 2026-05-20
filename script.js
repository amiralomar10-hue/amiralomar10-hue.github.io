document.addEventListener("DOMContentLoaded", () => {
    
    // تأثير الكتابة المنظّم (Typing Effect) بدون Layout Shift
    const subtitle = document.querySelector(".subtitle");
    const text = "Informatics Engineering Student & Backend Developer";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            subtitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 60);
        }
    }
    
    // بدء تأثير الكتابة بعد انتهاء أنيميشن البروفايل الأصلي بقليل
    setTimeout(typeEffect, 400);

    // نظام المودال لعرض الشهادات بحجم أكبر
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.querySelector(".close-modal");

    // تحقق من وجود عناصر المودال أولاً لتجنب الأخطاء البرمجية
    if (modal && modalImg && closeModal) {
        document.querySelectorAll('.certificate-card img').forEach(img => {
            img.onclick = function() {
                modal.style.display = "flex";
                modalImg.src = this.src;
            }
        });

        closeModal.onclick = () => modal.style.display = "none";
        
        // إغلاق المودال عند الضغط في أي مكان خارج الصورة
        window.onclick = (e) => { 
            if (e.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // تأثير ظهور العناصر عند التمرير الذكي (Intersection Observer) - تم تعديله ليناسب الموبايل
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // التوقف عن مراقبة العنصر بعد ظهوره لأول مرة لتوفير الأداء وحل مشاكل الموبايل
                observer.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.05, // تقليل النسبة لـ 5% ليظهر العنصر بمجرد ملامسته للشاشة
        rootMargin: "0px 0px 50px 0px" // جعل التفاعل يبدأ مبكراً قبل دخول العنصر بالكامل
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // إنشاء زر العودة للأعلى آلياً وتنسيقه
    const backBtn = document.createElement("button");
    backBtn.innerHTML = "↑";
    backBtn.className = "back-to-top";
    backBtn.setAttribute("aria-label", "Back to top");
    document.body.appendChild(backBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backBtn.style.display = "block";
        } else {
            backBtn.style.display = "none";
        }
    });

    backBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
});
