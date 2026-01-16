export default {
  name: 'roomPrice',
  title: 'Room Price',
  type: 'document',
  fields: [
    {
      name: 'roomId',
      title: 'Room ID',
      type: 'string',
      description: 'Must match existing room ID: deluxe-single, deluxe-queen, deluxe-queen-single, single, queen, or queen-single',
      options: {
        list: [
          { title: 'Deluxe Single', value: 'deluxe-single' },
          { title: 'Deluxe Queen', value: 'deluxe-queen' },
          { title: 'Deluxe Queen + Single', value: 'deluxe-queen-single' },
          { title: 'Single', value: 'single' },
          { title: 'Queen', value: 'queen' },
          { title: 'Queen + Single', value: 'queen-single' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price per night in dollars',
      validation: (Rule: any) => Rule.required().min(0),
    },
  ],
  preview: {
    select: {
      roomId: 'roomId',
      price: 'price',
    },
    prepare(value: Record<string, any>) {
      const roomId = value.roomId || '';
      const price = value.price || 0;
      return {
        title: roomId ? roomId.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) : 'Untitled Room',
        subtitle: `$${price} per night`,
      };
    },
  },
};
