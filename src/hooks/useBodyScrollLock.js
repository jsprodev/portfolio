import { useLayoutEffect } from "react";

export function useBodyScrollLock(isLocked) {
  useLayoutEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}
