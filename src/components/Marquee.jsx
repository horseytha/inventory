const Marquee = () => {

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtOSRrdG-Ct3jWsm--eZYJkD4sCe8PZZQ7w&s",
    "https://media.istockphoto.com/id/520536109/photo/contemporary-elegant-luxury-living-room.jpg?s=612x612&w=0&k=20&c=B2qVuu2PPjkw_CebnOicutAJdSa9K_z5IB4TnZWOTY4=",
    "https://thetimberguy.com/cdn/shop/products/Buy-Compact-Wooden-Dining-table-with-1-Bench-3-chairs-furniture-set-for-modern-Home_1200x.jpg?v=1637950097",
    "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/c153799b-2716-4a2d-86a6-e8e4c2efc027/whatsapp-image-2023-02-19-at-11-46-23-pm.jpeg",
    "https://sonaarts.in/wp-content/uploads/2025/01/Modern-Minimalist-Wooden-Study-Desk-with-Scandinavian-Inspired-Storage-Shelves-8-800x800.webp",
    "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/WCODWSBC/WSTCAMUSWM/WSTCAMUSWM_LS_1.jpg?tr=w-3840",
    "https://thetimberguy.com/cdn/shop/products/Buy-Wooden-Study-table-Writing-table-Desk-for-Modern-Home_1200x.jpg?v=1739470075",
    "https://furnitureoutletstores.co.uk/wp-content/uploads/2024/06/oak-dining-table-set-with-blue-chairs-furniture-outlet-uk-blog-1-scaled.jpg",
    "https://daromas.in/cdn/shop/files/UTJpGjw5lCWpT6hZIML9SXRb1ALMXTRFAX5mXnC5_f572e932-81b5-4aa7-b867-275a8d3ce451.webp?v=1720599696",
  ];

  return (
    <div className="overflow-hidden w-full py-8">
      <div className="flex animate-marquee gap-10">
        {images.concat(images).map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-[200px] h-[200px] rounded-xl object-cover border-6 border-rose-900"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
