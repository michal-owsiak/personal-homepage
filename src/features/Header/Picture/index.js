import { Image, Frame } from "./styled";
import portrait from "./portrait.jpg"

const Photo = () => (
  <Frame>
    <Image src={portrait} alt="Portrait" />
  </Frame>
);

export default Photo;