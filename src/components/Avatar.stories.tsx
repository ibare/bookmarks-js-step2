import { Meta, StoryObj } from "@storybook/react"
import Avatar from "./Avatar"

const meta: Meta<typeof Avatar> = {
  title: "Bookmark/Avatar",
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    name: "Kim",
    url: "https://ai-avatar-generator.com/samples/sample11.jpg",
    size: 'small',
  }
}
