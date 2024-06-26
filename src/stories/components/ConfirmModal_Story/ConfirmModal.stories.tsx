import { Button, ConfirmModal } from '@/components/client';
import { useModal } from '@/hooks';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * ## Confirm Modal Component
 *
 * ### Props
 * - **isShow : **useModal Hook에서 isShowModal을 전달 받아 모달의 공개 여부를 지정합니다.
 *
 * - **onReject : **Modal이 닫히기 위해 수행될 메서드를 전달받습니다. - Reject Button에도 전달됩니다.
 * - **onAccept : **Accept Button 클릭시 수행될 메서드를 전달받습니다.
 *
 * - **message : **사용자에게 전달할 Confirm 사항 메세지를 전달합니다.
 * - **warningMessage : **사용자에게 전달할 경고 메세지를 전달합니다.
 *
 * - **clickAwayEnable ? :**background click, Escape key를 통한 Modal 제어를 활성화 할지 전달합니다. - default : true
 *
 * - **acceptButtonTitle ? : **Accept Button의 타이틀을 변경할 수 있습니다.
 * - **rejectButtonTitle ? :**Reject Button의 타이틀을 변경할 수 있습니다.
 *
 * <hr>
 *
 * 기존 Modal Base Component를 이용해 제작한 Confirm Modal 입니다. <br>
 * 사용 방법은 기존과 동일하게 useModal과 함께 사용해 Modal을 제어할 수 있습니다.
 * */
const meta = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    acceptButtonTitle: {
      control: 'text',
      description: 'Accept Button의 타이틀을 변경할 수 있습니다.',
    },

    rejectButtonTitle: {
      control: 'text',
      description: 'Reject Button의 타이틀을 변경할 수 있습니다.',
    },

    onAccept: {
      control: { disable: true },
      description: 'Accept Button 클릭시 수행될 메서드를 전달받습니다.',
    },

    onReject: {
      control: { disable: true },
      description:
        'Modal이 닫히기 위해 수행될 메서드를 전달받습니다. - Reject Button에도 전달됩니다.',
    },

    isShow: {
      control: { disable: true },
      description: 'useModal Hook에서 isShowModal을 전달 받아 모달의 공개 여부를 지정합니다.',
    },

    message: {
      control: 'text',
      description: '사용자에게 전달할 Confirm 사항 메세지를 전달합니다.',
    },

    warningMessage: {
      control: 'text',
      description: '사용자에게 전달할 경고 메세지를 전달합니다.',
    },

    clickAwayEnable: {
      control: 'boolean',
      description:
        'background click, Escape key를 통한 Modal 제어를 활성화 할지 전달합니다. - default : true',
    },
  },

  args: {
    onAccept: () => {},
    onReject: () => {},
    isShow: true,
    message:
      '해당 메세지는 Confirm Modal 내부 메세지 입니다. br 태그를 이용해 줄바꿈도 가능합니다.',
    warningMessage: '사용자에게 전달할 경고 메세지 입니다.',
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (ModalComponent, { args }) => {
      const { showModal, isShowModal, closeModal } = useModal();

      const {
        acceptButtonTitle = '확인',
        rejectButtonTitle = '취소',
        clickAwayEnable = true,
        message = '해당 메세지는 Confirm Modal 내부 메세지 입니다. br 태그를 이용해 줄바꿈도 가능합니다.',
        warningMessage = '사용자에게 전달할 경고 메세지 입니다.',
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
              onAccept: () => {},
              onReject: closeModal,
              message,
              warningMessage,
              acceptButtonTitle,
              rejectButtonTitle,
              clickAwayEnable,
            }}
          />
        </section>
      );
    },
  ],
};
