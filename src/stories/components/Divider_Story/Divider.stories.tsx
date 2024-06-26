import { Divider } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## Divider Component
 *
 *  ### Props
 *  - **direction : **구분선의 방향을 지정합니다. - horizontal | vertical
 *  - **className : **Tailwind CSS를 사용하여 Divider의 스타일을 추가 및 수정 합니다.
 *  - **...rest : **hr태그 요소가 가진 모든 표준 HTML 속성을 지원합니다.
 */

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    direction: {
      defaultValue: 'horizontal',
      control: 'inline-radio',
      option: ['horizontal', 'vertical'],
      description: '구분선의 방향을 지정합니다.',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS를 사용하여 Divider의 스타일을 추가 및 수정 합니다.',
    },
  },

  decorators: [
    (DividerComponent, { args }) => {
      return (
        <div
          style={{
            width: '40rem',
            height: '40rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DividerComponent args={args} />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
};
