import { AlertModal, Button } from '@/components/client';
import { useModal } from '@/hooks';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * ## Alert Modal Component
 *
 * ### Props
 * - **isShow : **useModal Hook에서 isShowModal을 전달 받아 모달의 공개 여부를 지정합니다.
 *
 * - **onClose : **close Button의 타이틀을 변경할 수 있습니다.
 *
 * - **message : **사용자에게 전달할 Confirm 사항 메세지를 전달합니다.
 *
 * - **subMessage : **사용자에게 전달할 추가 전달 사항 메세지를 전달합니다.
 * - **warningMessage : **추가 전달 사항 메세지의 타입을 변경합니다.
 *   - danger : 빨간색
 *   - warning : 노란색
 *   - safe : 초록색
 *   - basic : 회색 - default Value
 *
 * - **clickAwayEnable ? :**background click, Escape key를 통한 Modal 제어를 활성화 할지 전달합니다. - default : true
 *
 * - **buttonTitle ? : **닫기 버튼의 타이틀을 변경할 수 있습니다.
 *
 * <hr>
 *
 * 기존 Modal Base Component를 이용해 제작한 Alert Modal 입니다. <br>
 * 사용 방법은 기존과 동일하게 useModal과 함께 사용해 Modal을 제어할 수 있습니다.
 * */
const meta = {
  title: 'Components/Alert',
  component: AlertModal,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    buttonTitle: {
      control: 'text',
      description: 'close Button의 타이틀을 변경할 수 있습니다.',
    },

    onClose: {
      control: { disable: true },
      description: 'Modal을 닫을때 사용할 메서드를 전달 받습니다.',
    },

    isShow: {
      control: { disable: true },
      description: 'useModal Hook에서 isShowModal을 전달 받아 모달의 공개 여부를 지정합니다.',
    },

    message: {
      control: 'text',
      description: '사용자에게 전달할 Confirm 사항 메세지를 전달합니다.',
    },

    subMessage: {
      control: 'text',
      description: '사용자에게 전달할 수 있는 추가 메세지를 전달합니다.',
    },

    subMessageType: {
      control: 'inline-radio',
      options: ['danger', 'warning', 'safe', 'basic'],
      description:
        'danger warning basic safe 중 원하는 타입을 지정할 수 있습니다. - 타입에 따라 색상이 변경됩니다.',
    },

    clickAwayEnable: {
      control: 'boolean',
      description:
        'background click, Escape key를 통한 Modal 제어를 활성화 할지 전달합니다. - default : true',
    },
  },

  args: {
    isShow: true,
    onClose: () => {},
    message:
      '해당 메세지는 Confirm Modal 내부 메세지 입니다. br 태그를 이용해 줄바꿈도 가능합니다.',
    subMessage: '사용자에게 전달할 추가 메세지 입니다.',
  },
} satisfies Meta<typeof AlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (ModalComponent, { args }) => {
      const { showModal, isShowModal, closeModal } = useModal();

      const {
        subMessage = '사용자에게 전달할 추가 메세지 입니다.',
        subMessageType = 'basic',
        clickAwayEnable = true,
        message = '해당 메세지는 Confirm Modal 내부 메세지 입니다. br 태그를 이용해 줄바꿈도 가능합니다.',
        buttonTitle = '닫기',
      } = args;

      return (
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button onClick={showModal}>모달 오픈!</Button>

          <ModalComponent
            args={{
              isShow: isShowModal,
              onClose: closeModal,
              message,
              subMessage,
              subMessageType,
              clickAwayEnable,
              buttonTitle,
            }}
          />
        </section>
      );
    },
  ],
};
