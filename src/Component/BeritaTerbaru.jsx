import React from "react";

const BeritaTerbaru = () => {
  const beritaList = [
    {
      id: 1,
      title: "Diskominfo Selenggarakan Training Geographic Information System",
      date: "Rabu",
      image: "/path/to/image.png"
    },
    {
      id: 2,
      title: "Diskominfo Selenggarakan Training Geographic Information System",
      date: "",
      image: "/path/to/image.png"
    },
    {
      id: 3,
      title: "Diskominfo Selenggarakan Training Geographic Information System",
      date: "",
      image: "/path/to/image.png"
    },
    {
      id: 4,
      title: "Diskominfo Selenggarakan Training Geographic Information System",
      date: "",
      image: "/path/to/image.png"
    }
  ];

  return (
    <div className="w-1/2 space-y-4">
      {beritaList.map((berita) => (
        <div key={berita.id} className="bg-white rounded-2xl shadow-md flex items-center space-x-4 p-4">
          <img
            src={berita.image}
            alt="Berita"
            className="w-24 h-24 object-cover rounded-l-2xl"
          />
          <div className="flex-1">
            <p className="text-lg">{berita.title}</p>
            {berita.date && <p className="text-sm text-slate-400">{berita.date}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeritaTerbaru;
