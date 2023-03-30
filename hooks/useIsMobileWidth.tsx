import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "theme";

export default function useIsMobileWidth() {
  return useMediaQuery(theme.breakpoints.down('sm'));

}