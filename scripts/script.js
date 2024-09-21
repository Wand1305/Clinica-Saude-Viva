document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li a");

    // Mudar o menu conforme a rolagem da página
    window.addEventListener("scroll", () => {
        let current = "";
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Verifica se a seção está visível
            if (scrollPosition >= (sectionTop - sectionHeight / 3) && scrollPosition < (sectionTop + sectionHeight)) {
                current = section.getAttribute("id");
            }
        });

        // Atualiza a classe "active" no menu
        navLi.forEach(a => {
            a.classList.remove("active");
            if (a.getAttribute("href").substring(1) === current) {
                a.classList.add("active");
            }
        });

        // Log para verificar a seção ativa
        console.log(`Seção ativa: ${current}`);
    });

    // Rolagem suave ao clicar nos links do menu
    navLi.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Evita o comportamento padrão do link

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const topPosition = targetSection.offsetTop - 180; // Ajuste para compensar o cabeçalho fixo

                // Rolagem suave
                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
