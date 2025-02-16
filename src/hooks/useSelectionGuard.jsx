import { useCallback } from "react";

function useSelectionGuard () {
    const handlePointerEnter = useCallback(() => {
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      }
    }, []);
  
    return { handlePointerEnter };
  }

export default useSelectionGuard