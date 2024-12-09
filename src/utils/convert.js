export const convertBlogData = (blogs, idx) => {
  const blogProperty = idx
    ? { id: blogs[idx]?.id, ...blogs[idx]?.properties }
    : { id: blogs?.id, ...blogs?.properties };
  return convertBlogProperties(blogProperty);
};

export const convertBlogProperties = (blog) => {
  const title = blog.title.title[0].plain_text;
  const badges = blog.tag.multi_select || []; //배열
  const desc = blog.desc.rich_text[0]?.plain_text || "";
  const date = blog.date.date.start;
  const url = blog.id;

  const blogDataObj = {
    title,
    badges,
    desc,
    date,
    url,
  };

  return blogDataObj;
};
