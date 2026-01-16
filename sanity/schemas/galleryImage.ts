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
    prepare({ title, media, order }: { title: string; media: any; order: number }) {
      return {
        title: title || 'Untitled',
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
