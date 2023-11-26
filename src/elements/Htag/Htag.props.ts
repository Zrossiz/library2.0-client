import { DetailedHTMLProps, ReactNode } from "react";

export interface HtagProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLTitleElement>,
    HTMLTitleElement
  > {
  children: ReactNode;
  tag: "h1" | "h2" | "h3";
}
