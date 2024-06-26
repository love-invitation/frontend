'use client';

import { useFormContext } from 'react-hook-form';

import { useParams } from 'next/navigation';

import { Button, WeddingTemplates } from '@/components/client';
import { Modal } from '@/components/client/Modal';

import { PreviewModalProps } from './PreviewModal.type';

const PreviewModal = ({ isShow, onClose }: PreviewModalProps) => {
  const { id } = useParams();
  const { watch } = useFormContext();
  const IMAGE_ASSETS =
    'https://invitation-bucket.s3.ap-northeast-2.amazonaws.com/productInfo/sample_image.png';
  const coverImageUrl = watch('cover.image')
    ? URL.createObjectURL(watch('cover.image'))
    : IMAGE_ASSETS;

  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      clickAwayEnable
      disabledCloseButton
    >
      <div className='w-[26rem] h-[45.7rem]'>
        <WeddingTemplates
          id={Number(id || id[0])}
          details={watch('cover.contents') || '예약 일시 및 장소'}
          groomName={watch('groom.name') || '신랑님 이름'}
          brideName={watch('bride.name') || '신부님 이름'}
          imageUrl={coverImageUrl}
        />
      </div>

      <Button onClick={onClose}> 닫기</Button>
    </Modal>
  );
};

export default PreviewModal;
