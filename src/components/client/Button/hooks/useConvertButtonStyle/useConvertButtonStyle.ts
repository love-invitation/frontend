import { ButtonFontSizeType, ButtonRadiusType } from '../../Button.type';
import { UseConvertButtonStyleProps } from './useConvertButtonStyle.type';

import { twJoin } from 'tailwind-merge';

const useConvertButtonStyle = ({ radius, fontSize }: UseConvertButtonStyleProps) => {
  const convertRadius = (radiusValue: ButtonRadiusType) => {
    switch (radiusValue) {
      case '0.4rem':
        return 'rounded-[0.4rem]';

      case '0.8rem':
        return 'rounded-[0.8rem]';

      case '1.4rem':
        return 'rounded-[1.4rem]';

      case 'rounded':
        return 'rounded-[999rem]';

      default:
        return 'rounded-[0.4rem]';
    }
  };

  const convertFontSize = (fontSizeValue: ButtonFontSizeType) => {
    switch (fontSizeValue) {
      case '1.4rem':
        return 'text-[1.4rem]';

      case '1.8rem':
        return 'text-[1.8rem]';

      case '2rem':
        return 'text-[2rem]';

      default:
        return 'text-[1.4rem]';
    }
  };

  return twJoin(convertRadius(radius), convertFontSize(fontSize));
};

export default useConvertButtonStyle;
