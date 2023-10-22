//@ts-nocheck
import { FC } from "react";
import * as Styled from "./OurServiceMap.styles";

type Props = {
  service: {
    title: string;
    text: string;
    image: string;
  };
  index: number;
};

export const OurServiceMap: FC<Props> = ({ service, index }) => {
  return (
    <Styled.Container
      style={index % 2 === 1 ? { flexDirection: "row-reverse" } : {}}
    >
      <Styled.Image src={service.fields.file.url} />
      <Styled.TextBox>
        <Styled.Title>{service.fields.title}</Styled.Title>
        <Styled.Discription>{service.fields.description}</Styled.Discription>
      </Styled.TextBox>
    </Styled.Container>
  );
};
