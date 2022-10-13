import { ImgHTMLAttributes } from "react";
import { CardServiceContainer, ServiceDetailsInfo } from "./styles";

type CardProps = {
  title: string;
  price: string;
} & ImgHTMLAttributes<HTMLImageElement>;
export function CardService({ title, price, ...props }: CardProps) {
  return (
    <CardServiceContainer>
      <img {...props} />
      <ServiceDetailsInfo>
        <span>R$ {price}</span>
        <p>{title}</p>
      </ServiceDetailsInfo>
    </CardServiceContainer>
  );
}
