import { useCallback } from "react";
import { useNavigate } from "react-router";
import { PATHS } from "@/routing";

export function useNotFound() {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate(PATHS.home);
  }, [navigate]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return {
    goHome,
    goBack,
  }
}