import { loadingText } from "../../../../../common/data";
import { Caption, LoadingImage } from "./styled";

const Loading = () => (
  <>
    <Caption>{loadingText}</Caption>
    <LoadingImage />
  </>
);

export default Loading;