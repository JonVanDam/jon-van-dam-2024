export const slugify = (string: string) => {
  return string.replace(/\s+/g, '-').toLowerCase();
};

export const deslugify = (slug: string) => {
  const words = slug.split('-');
  const capitalize = words.map((w) =>
    w.length > 3 ? w[0].toUpperCase() + w.slice(1) : w,
  );
  return capitalize.join(' ');
};
