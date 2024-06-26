import { useMemo } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import tailwindConfig from '@/../tailwind.config';
import { Button, Input } from '@/components/client';
import { CloseIcon } from '@/components/server';

import { ContactInputItemProps } from './ContactInputItem.type';

import resolveConfig from 'tailwindcss/resolveConfig';

const ContactInputItem = ({ type }: ContactInputItemProps) => {
  const { control } = useFormContext();
  const { fields, remove, insert } = useFieldArray({
    control,
    name: `contacts.${type}`,
  });

  const typeName = useMemo(() => (type === 'groom' ? '신랑' : '신부'), [type]);
  const { theme } = resolveConfig(tailwindConfig);

  const style = useMemo(
    () => ({
      nameInput: 'basis-1/2',
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
        <Input.Label>{`${typeName}측`}</Input.Label>
        <ul className='w-full flex flex-col gap-[2rem]'>
          {fields.map((field, index) => (
            <li
              className={style.inputLayout}
              key={field.id}
            >
              <div className={style.inputContainer}>
                <Input.Input
                  className={style.nameInput}
                  name={`contacts.${type}.${index}.relation`}
                  placeholder='관계'
                />
                <Input.Input
                  className={style.nameInput}
                  name={`contacts.${type}.${index}.name`}
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
                type='tel'
                className={style.phoneInput}
                name={`contacts.${type}.${index}.phoneNumber`}
                placeholder='전화 번호 (010-1234-5678)'
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
          insert(fields.length, { relation: '', name: '', phoneNumber: '' });
        }}
      >
        {`+ ${typeName}측 연락처 추가`}
      </Button>
    </div>
  );
};

export default ContactInputItem;
