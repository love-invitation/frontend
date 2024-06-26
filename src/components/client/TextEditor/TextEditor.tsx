'use client';

import 'react-quill/dist/quill.snow.css';

import { useFormContext } from 'react-hook-form';

import dynamic from 'next/dynamic';

import { TextEditorProps } from './TextEditor.type';
import { modules } from './constants';

import { twMerge } from 'tailwind-merge';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const TextEditor = ({ name = 'content', className }: TextEditorProps) => {
  const { watch, setValue } = useFormContext();

  return (
    <ReactQuill
      theme='snow'
      className={twMerge('overscroll-contain h-[80%]', className)}
      modules={modules}
      value={watch(name)}
      onChange={(newContent: string) => setValue(name, newContent)}
    />
  );
};

export default TextEditor;
