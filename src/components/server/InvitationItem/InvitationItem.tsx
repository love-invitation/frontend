import TemplateLayout from '../TemplateLayout/TemplateLayout';
import { InvitationItemProps } from './InvitationItem.type';

const InvitationItem = ({
  children,
  name,
  // id,
  isNew = false,
  price,
  discountPrice,
}: InvitationItemProps) => {
  return (
    <figure className='flex flex-col items-center justify-center gap-[2.8rem]'>
      <TemplateLayout size='medium'>{children}</TemplateLayout>

      <figcaption className='flex flex-col items-center gap-[2rem]'>
        <span className='relative flex justify-center'>
          <h1 className='text-size20 font-semiBold'>{name}</h1>
          {isNew && (
            <p className='text-size12 font-semiBold text-pink_500 rotate-[20deg] absolute left-[110%]'>
              NEW
            </p>
          )}
        </span>

        <span className='flex text-size18 font-medium gap-[1.6rem]'>
          <p>{discountPrice || price}원</p>
          {discountPrice && <p className='text-gray-400 line-through'>{price}원</p>}
        </span>
      </figcaption>
    </figure>
  );
};

export default InvitationItem;
