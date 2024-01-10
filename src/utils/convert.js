export const convertBlogData = (blogs, idx) => {
  const blogProperty = idx ? blogs[idx].properties : blogs.properties;
  return convertBlogProperties(blogProperty);
};

export const convertBlogProperties = (blog) => {
  const title = blog.title.title[0].plain_text;
  const badges = blog.tag.multi_select; //배열
  const desc = blog.desc.rich_text[0].plain_text;
  const date = blog.date.date.start;
  const url = blog.slug.rich_text[0].plain_text;

  const blogDataObj = {
    title,
    badges,
    desc,
    date,
    url,
  };

  return blogDataObj;
};
