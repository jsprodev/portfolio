const directoryLoader = {
  rbpmApp: () => import.meta.glob("/src/assets/images/projects/rbpmApp/*.{webp,avif,jpg,png}", { import: "default" }),
  rbpmWebsite: () =>
    import.meta.glob("/src/assets/images/projects/rbpmWebsite/*.{webp,avif,jpg,png}", {
      import: "default",
    }),
  redTweeta: () =>
    import.meta.glob("/src/assets/images/projects/redTweeta/*.{webp,avif,jpg,png}", {
      import: "default",
    }),
  jlr: () => import.meta.glob("/src/assets/images/projects/jlr/*.{webp,avif,jpg,png}", { import: "default" }),
  analytics: () =>
    import.meta.glob("/src/assets/images/projects/analytics/*.{webp,avif,jpg,png}", { import: "default" }),
  virtelligence: () =>
    import.meta.glob("/src/assets/images/projects/virtelligence/*.{webp,avif,jpg,png}", { import: "default" }),
  mv: () => import.meta.glob("/src/assets/images/projects/mv/*.{webp,avif,jpg,png}", { import: "default" }),
};

export const getImagePaths = (directory) => {
  if (!directoryLoader[directory]) {
    console.error(`Unknown directory: ${directory}`);
    return [];
  }
  const entries = Object.entries(directoryLoader[directory]());
  if (entries.length === 0) {
    console.warn(`No images found for: ${directory}`);
  }

  // return entries.map(([path, loadFn]) => ({
  //   id: path.split("/").pop().split(".")[0],
  //   load: loadFn,
  //   path,
  // }));

  return (
    entries
      .map(([path, loadFn]) => {
        const filename = path.split("/").pop(); // e.g. "10.png"
        const id = filename.split(".")[0]; // "10"
        // Extract numeric portion if available, else fallback 0
        const num = parseInt(id.match(/\d+/)?.[0] ?? 0, 10);
        return {
          id,
          num,
          load: loadFn,
          path,
        };
      })
      // ✅ sort numerically, fallback to string compare if equal
      .sort((a, b) => (a.num !== b.num ? a.num - b.num : a.id.localeCompare(b.id)))
  );
};
