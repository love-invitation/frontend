'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';

import tailwindConfig from '@/../tailwind.config';
import { Accordion, Button, Input } from '@/components/client';
import { CloseIcon } from '@/components/server';

import resolveConfig from 'tailwindcss/resolveConfig';

const TransportationInput = () => {
  const { control, setValue, getValues } = useFormContext();
  const { fields, remove } = useFieldArray({
    control,
    name: 'transport',
  });
  const { theme } = resolveConfig(tailwindConfig);

  return (
    <Accordion
      type='edit'
      buttonTitle='교통수단'
      defaultToggleValue
    >
      <Input className='w-full  pt-[2rem] pb-[4rem] flex flex-col gap-[5.2rem] items-center'>
        <ul className='w-full flex flex-col gap-[3.2rem]'>
          {fields.map((field, index) => (
            <li
              key={field.id}
              className='w-full flex flex-col gap-[1.2rem]'
            >
              <div className='flex justify-between items-center'>
                <Input.Label>교통수단</Input.Label>
                <Button
                  backgroundColor='naked'
                  className='w-[2.4rem] p-0 h-[2.4rem]'
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <CloseIcon
                    size='2.4rem'
                    fill={theme.colors.gray_500}
                  />
                </Button>
              </div>
              <Input.Input
                name={`transport.${index}.kind`}
                placeholder='교통 수단을 입력해주세요. (지하철, 버스)'
              />
              <Input.Input
                name={`transport.${index}.detail`}
                placeholder='가는 방법을 작성해주세요.'
              />
            </li>
          ))}
        </ul>

        <Button
          className='w-[20rem]'
          backgroundColor='naked'
          border='gray'
          fontColor='black'
          radius='0.8rem'
          onClick={() => {
            setValue('transport', [...getValues('transport'), { kind: '', detail: '' }]);
          }}
        >
          + 교통수단 추가
        </Button>
      </Input>
    </Accordion>
  );
};

export default TransportationInput;
