import { loadingText } from "../../../../../common/copy";
import { Caption, LoadingImage } from "./styled";

const Loading = () => (
  <>
    <Caption>{loadingText}</Caption>
    <LoadingImage />
  </>
);

export default Loading;