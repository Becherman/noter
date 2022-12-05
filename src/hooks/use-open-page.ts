import { useNavigate } from "react-router-dom";

export const useOpenPage = (pageName: string) => {
  const navigate = useNavigate();
  return () => navigate(pageName);
}

export const useOpenNewModalPage = () => useOpenPage('/new');

export const useOpenNoteModalPage = (id: string) => useOpenPage(`note/${id}`);