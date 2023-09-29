import { errorHeader, errorText } from "../../../../copy";
import warning from "../../../../images/error_icon.svg"
import Button from "../../../../common/Button";
import { socials } from "../../../../socialsList";
import {
  ErrorImage,
  ErrorHeader,
  ErrorText,
  Wrapper,
  Link,
} from "./styled";

const Error = () => {
  const gitHubLink = socials.find((item) => item.social === "GitHub").link;

  return (
    <>
      <ErrorImage
        src={warning}
      />
      <ErrorHeader>{errorHeader}</ErrorHeader>
      <ErrorText>{errorText}</ErrorText>
      <Wrapper>
        <Link
          href={gitHubLink}
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <Button caption="Go to Github" />
        </Link>
      </Wrapper>
    </>
  );
};

export default Error;