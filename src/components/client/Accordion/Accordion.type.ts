export type AccordionStyleType = 'main' | 'edit';

export interface AccordionProps {
  children: React.ReactNode;
  buttonTitle: string;
  type?: AccordionStyleType;
  defaultToggleValue?: boolean;
}
