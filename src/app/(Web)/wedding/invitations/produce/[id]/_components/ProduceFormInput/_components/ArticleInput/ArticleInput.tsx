import { Accordion, Input, TextEditor } from '@/components/client';

const ArticleInput = () => {
  return (
    <Accordion
      buttonTitle='모시는 글'
      type='edit'
      defaultToggleValue
    >
      <Input className='flex-col gap-[2.1rem] py-[4rem] justify-center'>
        <div className='flex items-center gap-[3.3rem]'>
          <Input.Label>제목</Input.Label>
          <Input.Input
            name='article.title'
            placeholder='소중한 분들을 초대합니다.'
          />
        </div>
        <div className='flex gap-[3.3rem] h-[40rem]'>
          <Input.Label>내용</Input.Label>
          <TextEditor name='article.contents' />
        </div>
      </Input>
    </Accordion>
  );
};

export default ArticleInput;
