import { useEffect } from "react";

// Sets document.title for the current route and restores the previous title
// on unmount, so navigating back never leaves a stale case-study title behind.
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
