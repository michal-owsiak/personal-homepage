import { loadingText } from "../../../../../copy";
import { Caption, LoadingImage } from "./styled";

const Loading = () => (
  <>
    <Caption>{loadingText}</Caption>
    <LoadingImage />
  </>
);

export default Loading;