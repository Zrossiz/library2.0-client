import { DetailedHTMLProps, LinkHTMLAttributes } from "react";

export interface LinkItemProps
  extends DetailedHTMLProps<
    LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  > {
  children: JSX.Element | string;
  href: string;
}
