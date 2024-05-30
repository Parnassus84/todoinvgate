import React, { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<any> {
  children: ReactNode;
}

export const Header = ({children, ...restProps}: Props) => (
  <div {...restProps}>
    {children}    
  </div>

);