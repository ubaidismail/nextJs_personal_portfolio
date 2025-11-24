const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://big-rainbow-536d989c9a.strapiapp.com';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

export async function fetchAPI(path, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    //   ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
    },
  };

  const response = await fetch(`${STRAPI_URL}${path}`, {
    ...defaultOptions,
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export async function getBlogs() {
  const data = await fetchAPI('/api/blogs?populate=Blog_image');
  return data.data;
}

export async function getBlogBySlug(slug) {
  const data = await fetchAPI(`/api/blogs/${slug}`);
  return data.data;
}