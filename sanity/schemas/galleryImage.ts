export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Description of the image for accessibility',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which the image appears in the gallery (lower numbers appear first)',
      validation: (Rule: any) => Rule.required().min(0),
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
      order: 'order',
    },
    prepare(value: Record<string, any>) {
      const title = value.title || 'Untitled';
      const media = value.media;
      const order = value.order;
      return {
        title,
        subtitle: `Order: ${order}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
