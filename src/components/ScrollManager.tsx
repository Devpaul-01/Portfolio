import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// React Router does not manage scroll for a plain <BrowserRouter>. Without
// this, following a "View case study" link would land the visitor at
// whatever scroll offset the homepage was at, mid-page in the new route.
//
// Behaviour:
//   - Browser back/forward (POP): leave scroll alone, so the visitor returns
//     to where they were on the homepage.
//   - New navigation with a #hash: scroll that element into view.
//   - Any other new navigation: jump to top.
//
// Smooth scrolling is applied globally via `html { scroll-behavior: smooth }`
// in index.css, which would make a route change visibly glide from the old
// offset. Route changes should be instant, so this overrides it for the jump.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") return;

    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    if (hash) {
      // Wait a frame so the target route has rendered its sections.
      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView();
        else window.scrollTo(0, 0);
        root.style.scrollBehavior = previous;
      });
    } else {
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previous;
    }
  }, [pathname, hash, navigationType]);

  return null;
}
