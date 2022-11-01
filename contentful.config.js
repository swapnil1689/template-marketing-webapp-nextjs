// eslint-disable-next-line no-nested-ternary
const url = !process.env.CONFIG_CONTENTFUL_META_URL
  ? !process.env.VERCEL_URL
    ? 'http://localhost:3000'
    : `https://${process.env.VERCEL_URL}`
  : process.env.CONFIG_CONTENTFUL_META_URL;

module.exports = {
  contentful: {
    // main_space_id: Contentful Space ID
    main_space_id: process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_ID || '',
    // main_space_token: Contentful Space Delivery API - access token
    main_space_token: process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_TOKEN || '',
    // main_space_preview_token: Contentful Space Preview API - access token
    main_space_preview_token: process.env.NEXT_PUBLIC_CONFIG_CONTENTFUL_MAIN_SPACE_PREVIEW_TOKEN || '',
    // main_space_management_token: Contentful Content Management token
    main_space_management_token: process.env.CONFIG_CONTENTFUL_MAIN_SPACE_MANAGEMENT_TOKEN || '',
  },
  meta: {
    title:
      process.env.CONFIG_CONTENTFUL_META_TITLE ||
      'Digital banking for the new generation | Colorful Coin',
    description:
      process.env.CONFIG_CONTENTFUL_META_DESCRIPTION ||
      `Enjoy premium banking services wherever you go: instant transfers and best exchange rates, exclusive offers and priority customer support. Apply online at ${url
        .replace('https://', '')
        .replace('http://', '')}`,
    url,
    image:
      'https://images.ctfassets.net/w8vf7dk7f259/4bucno7z1xAyVI5MOkU6Pu/ded83d0ec1eb732ae3a81ddab7a18877/fallback-image-03.jpg',
  },
  icon: {
    light:
      process.env.CONFIG_CONTENTFUL_ICON_LIGHT ||
      'https://images.ctfassets.net/w8vf7dk7f259/llZXwDCnl9NqdyuVvjn1n/d20cea90225e7f53dfbf8a18a46e972d/gocoin-icon-light.svg',
    dark:
      process.env.CONFIG_CONTENTFUL_ICON_DARK ||
      'https://images.ctfassets.net/w8vf7dk7f259/i9iu6GU6dFWQJJwJzwxCT/952cc3bab415e28f521c22933072a09c/gocoin-icon.svg',
    width: process.env.CONFIG_CONTENTFUL_ICON_WIDTH
      ? parseInt(process.env.CONFIG_CONTENTFUL_ICON_WIDTH, 10)
      : 66,
    height: process.env.CONFIG_CONTENTFUL_ICON_HEIGHT
      ? parseInt(process.env.CONFIG_CONTENTFUL_ICON_HEIGHT, 10)
      : 64,
  },
};
