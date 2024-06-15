export interface NavbarLink {
  name: string;
  path: string;
  icon?: JSX.Element;
  sub?: NavbarLink[]
}