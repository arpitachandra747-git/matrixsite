// components/layout/Script.jsx

import { useEffect } from "react";

export default function Script() {
  useEffect(() => {
    // CSS Load
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "/assets/vendor/spectrum/spectrum.min.css";
    document.head.appendChild(css);

    // JS Files
    const scripts = [
      "/assets/vendor/bootstrap/5.1.3/bootstrap.min.js",
      "/assets/vendor/offcanvas-nav/hc-offcanvas-nav.js",
      "/assets/vendor/greensock/gsap.min.js",
      "/assets/vendor/greensock/ScrollTrigger.min.js",
      "/assets/vendor/greensock/ScrollSmoother.min.js",
      "/assets/vendor/greensock/ScrollToPlugin.min.js",
      "/assets/vendor/slick/1.8.1/slick.min.js",
      "/assets/vendor/parallax/3.1.0/parallax.min.js",
      "/assets/js/theme.js",
      "/assets/vendor/spectrum/spectrum.min.js",
      "/assets/vendor/clipboard/clipboard.min.js",
      "/assets/js/theme-preview-only.js",
    ];

    const loadedScripts = [];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false; // order maintain karega
      document.body.appendChild(script);
      loadedScripts.push(script);
    });

    // Cleanup
    return () => {
      loadedScripts.forEach((script) => {
        document.body.removeChild(script);
      });

      document.head.removeChild(css);
    };
  }, []);

  return null;
}