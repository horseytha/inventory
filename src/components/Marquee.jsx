const Marquee = () => {

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5o9CDCbPBfnh5Zez7xLTTlTTRhRTRyAPtoA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1P0Od0adtr-khNjbuwoD2QHk1LuXDu4I8g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_OjdWuOCb6CMbots4e8LkHme68LOyVLl5Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTg3xhfioar3vGS1aoi7q2RkmTa9xi4ZEvg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEjLtLzJ6tDjFAt1Q5YlB0usLNSKT9oxSsg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar2MmUk6dPfwO73DqKrPulDr9QFBMvzydzg&s",
    "https://furnitureoutletstores.co.uk/wp-content/uploads/2024/06/oak-dining-table-set-with-blue-chairs-furniture-outlet-uk-blog-1-scaled.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34MCAuIsCce-L2NC4s7wO86azEX9uoMT1-w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25FGGu-qyyLmzd7rbsmDSvUmtvbDO9y7vQA&s"
  ];

  const dimensions = [
    { width: 180, height: 140 },
    { width: 150, height: 200 },
    { width: 180, height: 160 },
    { width: 170, height: 170 },
    { width: 200, height: 180 },
    { width: 160, height: 200 },
    { width: 260, height: 150 },
    { width: 140, height: 200 },
    { width: 210, height: 160 },
  ];

  return (
    <div className="overflow-hidden w-full py-12 bg-white">
      <div className="flex animate-marquee gap-6 items-end">
        {images.concat(images).map((src, i) => {
          const dim = dimensions[i % dimensions.length];
          return (
            <div key={i} className="flex-shrink-0 group">
              <img
                src={src}
                className="rounded-2xl object-cover shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                style={{ width: `${dim.width}px`, height: `${dim.height}px` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
