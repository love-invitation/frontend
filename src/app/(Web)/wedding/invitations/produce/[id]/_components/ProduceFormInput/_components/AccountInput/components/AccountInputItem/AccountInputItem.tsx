import { useMemo } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import tailwindConfig from '@/../tailwind.config';
import { Button, Input } from '@/components/client';
import { CloseIcon } from '@/components/server';

import { AccountInputItemProps } from './AccountInputItem.type';

import resolveConfig from 'tailwindcss/resolveConfig';

const AccountInputItem = ({ type }: AccountInputItemProps) => {
  const { control } = useFormContext();
  const { fields, remove, insert } = useFieldArray({
    control,
    name: `accounts.${type}`,
  });

  const { theme } = resolveConfig(tailwindConfig);

  const typeName = useMemo(() => (type === 'groom' ? '신랑' : '신부'), [type]);

  const style = useMemo(
    () => ({
      bankInput: 'basis-1/2',
      phoneInput: 'grow-1',
      inputLayout:
        'w-full relative flex items-center gap-[0.6rem] tablet:flex-col tablet:items-start mobile:flex-col mobile:items-start',
      inputContainer: 'flex items-center gap-[0.6rem]',
    }),
    [],
  );

  return (
    <div className='w-full flex flex-col py-[4rem] items-center gap-[4rem]'>
      <div className='w-full flex flex-col gap-[2rem]'>
        <Input.Label>{`${typeName}측 계좌`}</Input.Label>
        <ul className='w-full flex flex-col gap-[2rem]'>
          {fields.map((field, index) => (
            <li
              className={style.inputLayout}
              key={field.id}
            >
              <div className={style.inputContainer}>
                <Input.Input
                  className={style.bankInput}
                  name={`accounts.${type}.${index}.bankName`}
                  placeholder='은행명'
                />
                <Input.Input
                  className={style.bankInput}
                  name={`accounts.${type}.${index}.name`}
                  placeholder='이름'
                />
                <Button
                  backgroundColor='naked'
                  className='w-[2.4rem] p-0 h-[2.4rem] hidden tablet:block mobile:block'
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
                className={style.phoneInput}
                name={`accounts.${type}.${index}.accountNumber`}
                placeholder='계좌 번호'
              />

              <Button
                backgroundColor='naked'
                className='w-[2.4rem] p-0 h-[2.4rem] block tablet:hidden mobile:hidden'
                onClick={() => {
                  remove(index);
                }}
              >
                <CloseIcon
                  size='2.4rem'
                  fill={theme.colors.gray_500}
                />
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <Button
        className='w-[20rem]'
        backgroundColor='naked'
        border='gray'
        fontColor='black'
        radius='0.8rem'
        onClick={() => {
          insert(fields.length, { name: '', bankName: '', accountNumber: '' });
        }}
      >
        {`+ ${typeName}측 계좌 번호 추가`}
      </Button>
    </div>
  );
};

export default AccountInputItem;
