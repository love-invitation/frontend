import { useFormContext } from 'react-hook-form';

import { Accordion, Input, UploadImage } from '@/components/client';

const ThumbnailInput = () => {
  const { watch, setValue } = useFormContext();

  return (
    <Accordion
      buttonTitle='공유 썸네일'
      type='edit'
    >
      <div className='flex flex-col gap-[4.7rem] py-[4rem]'>
        <UploadImage
          className='gap-[4rem]'
          onChange={(image) => setValue('thumbnail.image', image[0])}
        >
          <Input.Label>사진</Input.Label>
          <div className='bg-gray_900 w-[16rem] h-[16rem] rounded-[1rem] flex items-center justify-center'>
            <UploadImage.InputLabel visible={!watch('thumbnail.image')}>
              클릭 후 업로드
            </UploadImage.InputLabel>
            <UploadImage.View
              className='w-full h-full'
              alt='청첩장 표지'
              fill
            />
          </div>
        </UploadImage>
        <Input className='gap-[3.3rem] items-center'>
          <Input.Label>제목</Input.Label>
          <Input.Input
            name='thumbnail.title'
            placeholder='(하트) 결혼합니다'
          />
        </Input>
        <Input className='gap-[3.3rem] items-center'>
          <Input.Label>내용</Input.Label>
          <Input.Input
            name='thumbnail.contents'
            placeholder='1월 18일 목요일 오후 1시 30분'
          />
        </Input>
      </div>
    </Accordion>
  );
};

export default ThumbnailInput;