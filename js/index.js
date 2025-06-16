lucide.createIcons();

    // Scroll acelerado y frenado
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          const start = window.scrollY;
          const end = target.offsetTop;
          const distance = end - start;
          const duration = 1500;
          let startTime = null;

          function easeOutQuart(t) {
            return 1 - (--t) * t * t * t;
          }

          function scrollStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const time = timestamp - startTime;
            const percent = Math.min(time / duration, 1);
            const eased = easeOutQuart(percent);

            window.scrollTo(0, start + distance * eased);

            if (percent < 1) {
              requestAnimationFrame(scrollStep);
            }
          }

          requestAnimationFrame(scrollStep);
        }
      });
    });

    // Movimiento aleatorio del degradado del nombre
    const nombre = document.getElementById("nombre");
    const rand = (min, max) => `${Math.floor(Math.random() * (max - min + 1)) + min}%`;

    nombre.style.setProperty("--xStart", rand(0, 30));
    nombre.style.setProperty("--yStart", rand(0, 100));
    nombre.style.setProperty("--xEnd", rand(70, 100));
    nombre.style.setProperty("--yEnd", rand(0, 100));
    nombre.style.setProperty("--speed", `${Math.floor(Math.random() * 10) + 10}s`);


    function toggleSkills() {
      const extras = document.querySelectorAll('.extra-skill');
      const arrow = document.getElementById("arrowIcon");
      const text = document.getElementById("toggleText");

      const isHidden = extras[0].classList.contains("hidden");

      extras.forEach(el => {
        if (isHidden) {
          el.classList.remove("hidden");
          el.classList.add("inline-flex");
        } else {
          el.classList.add("hidden");
          el.classList.remove("inline-flex");
        }
      });

      arrow.classList.toggle("rotate-180");
      text.textContent = isHidden ? "Conocer menos" : "Conocer más";
    }


    document.addEventListener("DOMContentLoaded", function () {
      new TypeIt("#typing-text", {
        speed: 50,
        loop: true,
        breakLines: false,
        deleteSpeed: 30,
        nextStringDelay: 1500,
        waitUntilVisible: true
      })
      .type("Dedicado a crear experiencias digitales atractivas.")
      .pause(1000)
      .delete()
      .type("Funcionales y accesibles.")
      .pause(1000)
      .delete()
      .type("Rápidas y optimizadas para SEO.")
      .pause(1000)
      .delete()
      .type("Diseñadas para todos los dispositivos.")
      .pause(1000)
      .delete()
      .type("Con amor por el código limpio ❤️")
      .pause(1000)
      .delete()
      .go();
    });

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });