export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The background image for the hero section',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The subtitle text (e.g., "Roadside comfort, minutes from Sydney CBD.")',
    },
    {
      name: 'supportingText',
      title: 'Supporting Text',
      type: 'string',
      description: 'The supporting text (e.g., "Comfortable rooms, easy parking, honest prices.")',
    },
  ],
  preview: {
    select: {
      title: 'subtitle',
      media: 'backgroundImage',
    },
  },
};
