import { TitleText } from "components/Title/styles";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <TitleText>{title}</TitleText>;
};

export default Title;
