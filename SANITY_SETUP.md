# Sanity CMS Setup Instructions

## Initial Setup

1. **Create a Sanity account and project**
   - Go to https://sanity.io/manage
   - Create a new account or sign in
   - Create a new project (name it "Marco Polo Motor Inn" or similar)

2. **Get your project credentials**
   - In your Sanity project dashboard, go to Settings > API
   - Copy your Project ID
   - Note your Dataset name (usually "production")

3. **Set up environment variables**
   - Create a `.env.local` file in the root directory
   - Add the following:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
     NEXT_PUBLIC_SANITY_DATASET=production
     ```

4. **Access Sanity Studio**
   - Start your dev server: `npm run dev`
   - Navigate to http://localhost:3000/studio
   - You'll be prompted to authenticate with Sanity

## Adding Content

Once logged into Sanity Studio at `/studio`, you can edit:

1. **Gallery Images** - Add/remove/reorder gallery photos
2. **Hero Section** - Edit background image and text
3. **Room Prices** - Update prices for each room type

## Content Types

### Gallery Image
- Upload image
- Add alt text for accessibility
- Set order number (lower numbers appear first)

### Hero Section
- Upload background image
- Edit subtitle: "Roadside comfort, minutes from Sydney CBD."
- Edit supporting text: "Comfortable rooms, easy parking, honest prices."

### Room Price
- Select room ID from dropdown (must match existing room IDs)
- Enter price per night

## Room IDs Reference

When adding room prices, use these exact IDs:
- `deluxe-single`
- `deluxe-queen`
- `deluxe-queen-single`
- `single`
- `queen`
- `queen-single`

## Notes

- Changes will appear immediately in development
- For production, you may need to rebuild the site
- If Sanity is unavailable, the site will fall back to hardcoded values
- Gallery images can be reordered by changing the "order" field
