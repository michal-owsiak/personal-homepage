import spinner from "./icon-spinner.svg";
import {
  Caption,
  LoadingImage,
} from "./styled";

const Loading = () => (
  <>
    <Caption>
      Please wait, projects are being loaded...
    </Caption>
    <LoadingImage
      src={spinner}
      alt={"Loading..."}
    />
  </>
);

export default Loading;