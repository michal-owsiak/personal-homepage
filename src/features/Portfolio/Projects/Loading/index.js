import spinner from "../../../../images/loading_icon.svg";
import { loadingText } from "../../../../copy";
import {
  Caption,
  LoadingImage,
} from "./styled";

const Loading = () => (
  <>
    <Caption>{loadingText}</Caption>
    <LoadingImage
      src={spinner}
      alt={"Loading..."}
    />
  </>
);

export default Loading;