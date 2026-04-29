document.addEventListener("DOMContentLoaded", () => {
    const subtitle = document.querySelector(".subtitle");
    const text = "Informatics Engineering Student & Backend Developer";
    let index = 0;

    subtitle.innerHTML = ""; 
    function typeEffect() {
        if (index < text.length) {
            subtitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 60);
        }
    }
    typeEffect();

    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.querySelector(".close-modal");

    document.querySelectorAll('.certificate-card img').forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
        }
    });

    closeModal.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    const backBtn = document.createElement("button");
    backBtn.innerHTML = "↑";
    backBtn.className = "back-to-top";
    document.body.appendChild(backBtn);

    window.onscroll = () => {
        if (window.scrollY > 400) backBtn.style.display = "block";
        else backBtn.style.display = "none";
    };

    backBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
});