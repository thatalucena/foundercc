/* =========================================================
   Founders · Link da Bio
   Interação dos destaques + animações (GSAP) + scroll suave (Lenis)
   ========================================================= */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined";
  var animate = hasGsap && !reduceMotion;

  /* ---------- Destaques: troca o case ---------- */
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".hl"));
  var items = Array.prototype.slice.call(document.querySelectorAll(".case-item"));
  var current = 0;

  function showCase(i) {
    if (i === current) return;
    current = i;

    buttons.forEach(function (b, j) {
      b.setAttribute("aria-pressed", j === i ? "true" : "false");
    });

    items.forEach(function (item, j) {
      if (j === i) return;
      item.hidden = true;
      if (animate) {
        gsap.killTweensOf(item);
        gsap.set(item, { clearProps: "opacity,visibility,transform" });
      }
    });

    var next = items[i];
    next.hidden = false;
    if (animate) {
      gsap.fromTo(next, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" });
    }

    var btn = buttons[i];
    if (btn && btn.scrollIntoView) {
      btn.scrollIntoView({ inline: "nearest", block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
    }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      showCase(Number(b.dataset.i));
    });
  });

  /* Setas do teclado navegam entre os destaques */
  var group = document.querySelector(".highlights");
  if (group) {
    group.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var idx = buttons.indexOf(document.activeElement);
      if (idx < 0) return;
      e.preventDefault();
      var next = (idx + (e.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus();
      showCase(next);
    });
  }

  /* Sem animação: libera tudo e para aqui */
  if (!animate) {
    root.classList.remove("anim");
    return;
  }

  /* ---------- Scroll suave (Lenis) ---------- */
  if (typeof window.ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);

  if (typeof window.Lenis !== "undefined") {
    var lenis = new Lenis({
      duration: 1.1,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      autoRaf: false
    });
    if (window.ScrollTrigger) lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------- Headline: quebra em palavras com máscara ---------- */
  var h1 = document.querySelector("h1");

  function splitWords(el) {
    Array.prototype.slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        var frag = document.createDocumentFragment();
        node.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
          } else {
            var w = document.createElement("span");
            w.className = "w";
            var wi = document.createElement("span");
            wi.className = "wi";
            wi.textContent = part;
            w.appendChild(wi);
            frag.appendChild(w);
          }
        });
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === 1) {
        splitWords(node);
      }
    });
  }

  if (h1) {
    h1.setAttribute("aria-label", h1.textContent.replace(/\s+/g, " ").trim());
    splitWords(h1);
    Array.prototype.slice.call(h1.children).forEach(function (c) { c.setAttribute("aria-hidden", "true"); });
  }

  /* ---------- Contadores dos números ---------- */
  function formatNumber(n) {
    return Math.round(n).toLocaleString("pt-BR");
  }

  function countUp(el, delay) {
    var end = parseFloat(el.dataset.count);
    var prefix = el.dataset.prefix || "";
    var suffix = el.dataset.suffix || "";
    var final = el.textContent;
    var obj = { v: 0 };
    el.textContent = prefix + "0" + suffix;
    return gsap.to(obj, {
      v: end,
      duration: 1.2,
      delay: delay || 0,
      ease: "power2.out",
      onUpdate: function () { el.textContent = prefix + formatNumber(obj.v) + suffix; },
      onComplete: function () { el.textContent = final; }
    });
  }

  /* ---------- Estado inicial ---------- */
  var q = gsap.utils.toArray;
  var words = h1 ? q(".wi", h1) : [];
  var lede = document.querySelector(".lede");
  var stats = document.querySelector(".stats");
  var statItems = q(".stat");
  var casesLabel = document.querySelector("#t-cases");
  var rings = q(".hl");
  var caseBox = document.querySelector(".case");
  var ctaBar = document.querySelector(".cta-bar");

  gsap.set("[data-anim]", { autoAlpha: 0 });
  if (h1) gsap.set(h1, { autoAlpha: 1 });
  gsap.set(words, { yPercent: 110 });
  gsap.set(lede, { y: 14 });
  gsap.set(statItems, { autoAlpha: 0, y: 10 });
  gsap.set(rings, { autoAlpha: 0, scale: 0.7 });
  gsap.set(caseBox, { y: 12 });
  gsap.set(ctaBar, { autoAlpha: 1, yPercent: 100 });
  root.classList.remove("anim");

  /* ---------- Entrada (primeira dobra) ---------- */
  var intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  intro
    .to(words, { yPercent: 0, duration: 0.85, stagger: 0.045 })
    .to(lede, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.55")
    .to(stats, { autoAlpha: 1, duration: 0.4 }, "-=0.45")
    .to(statItems, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 }, "<")
    .add(function () {
      q(".stat b[data-count]").forEach(function (el, i) { countUp(el, i * 0.08); });
    }, "<")
    .to(casesLabel, { autoAlpha: 1, duration: 0.4 }, "-=0.35")
    .to(rings, { autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.06, ease: "back.out(1.6)" }, "<")
    .to(caseBox, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.35")
    .to(ctaBar, { yPercent: 0, duration: 0.7, ease: "power4.out" }, 0.9)
    .add(function () { gsap.set(rings, { clearProps: "transform" }); });

  /* ---------- Revelação no scroll ---------- */
  q("[data-reveal]").forEach(function (section) {
    var targets = q("[data-anim]", section);
    if (!targets.length) return;
    gsap.set(targets, { y: 16 });

    var play = function () {
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: "power3.out",
        delay: intro.isActive() ? Math.max(0, 1.1 - intro.time()) : 0
      });
    };

    if (window.ScrollTrigger) {
      ScrollTrigger.create({ trigger: section, start: "top 92%", once: true, onEnter: play });
    } else {
      play();
    }
  });
})();
