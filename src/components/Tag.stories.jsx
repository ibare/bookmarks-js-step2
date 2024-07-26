import { BrowserRouter } from 'react-router-dom'
import Tag from './Tag'

export default {
  title: 'Bookmark/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => <BrowserRouter><Story /></BrowserRouter>,
  ],
  argTypes: {
    size: {
      control: { 
        type: 'radio'
      },
      options: ['small', 'medium', 'large'],
    }
  },
  args: {
    url: '/bookmark/tag',
    selected: false,  
  }
}

export const Small = {
  args: {
    size: 'small',
    children: 'Small',
  }
}

export const Medium = {
  args: {
    size: 'medium',
    children: 'Medium',
  }
}

export const Large = {
  args: {
    size: 'large',
    children: 'Large',
  }
}
