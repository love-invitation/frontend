'use client';

import { FormEvent, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { Accordion, CheckBox, Input } from '@/components/client';

import { GroomBrideInputProps } from './GroomBrideInput.type';

const GroomBrideInput = ({ type }: GroomBrideInputProps) => {
  const { watch, setValue } = useFormContext();

  const handleClickCheckBox = (e: FormEvent<HTMLInputElement>, name: string) => {
    setValue(name, e.currentTarget.checked);
  };

  const typeName = useMemo(() => (type === 'bride' ? '신부' : '신랑'), [type]);

  const commonStyle = {
    inputContainer: 'w-full flex items-center gap-[2rem]',
    checkboxContainer: 'h-full flex items-center gap-2',
    checkboxLabel: 'text-size16 font-bold',
  };

  return (
    <Accordion
      type='edit'
      buttonTitle={`${typeName}측 정보`}
      defaultToggleValue
    >
      <Input className='flex flex-col py-[2rem] gap-[2rem]'>
        <div className={commonStyle.inputContainer}>
          <Input.Label>{`${typeName}측 아버님`}</Input.Label>
          <Input.Input
            className='w-[20rem] tablet:w-full'
            name={`${type}.father.name`}
            placeholder='이름'
          />

          <div className={commonStyle.checkboxContainer}>
            <CheckBox
              id={`produce_${type}_father`}
              checked={watch(`${type}.father.deceased`)}
              onChange={(event) => handleClickCheckBox(event, `${type}.father.deceased`)}
            />
            <label
              className={commonStyle.checkboxLabel}
              htmlFor={`produce_${type}_father`}
            >
              故
            </label>
          </div>
        </div>

        <div className={commonStyle.inputContainer}>
          <Input.Label>{`${typeName}측 어머님`}</Input.Label>
          <Input.Input
            className='w-[20rem] tablet:w-full'
            name={`${type}.mother.name`}
            placeholder='이름'
          />

          <div className={commonStyle.checkboxContainer}>
            <CheckBox
              id={`produce_${type}_mother`}
              checked={watch(`${type}.mother.deceased`)}
              onChange={(event) => handleClickCheckBox(event, `${type}.mother.deceased`)}
            />
            <label
              className={commonStyle.checkboxLabel}
              htmlFor={`produce_${type}_mother`}
            >
              故
            </label>
          </div>
        </div>

        <div className={commonStyle.inputContainer}>
          <Input.Label>관계</Input.Label>
          <Input.Input
            className='w-[10rem]'
            name={`${type}.relation`}
            placeholder={type === 'bride' ? '딸' : '아들'}
          />
        </div>

        <p className='mt-[1rem] text-size14 text-gray_200 font-medium'>
          아버님, 어머님 성함은 생략하실 수 있습니다.
        </p>
      </Input>
    </Accordion>
  );
};

export default GroomBrideInput;
