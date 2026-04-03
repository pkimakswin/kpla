import Image from 'next/image';

export default function Gallery() {
  const items = [
    { title: "Award Ceremony 2023", img: "https://img.freepik.com/free-photo/flat-lay-office-desk-assortment-with-empty-screen-tablet_23-2148707960.jpg" },
    { title: "Quality Management Workshop", img: "https://img.freepik.com/free-photo/unrecognizable-woman-working-laptop-office-man-standing-watching-pointing_1098-17721.jpg" },
    { title: "ISO 9001 Lead Auditor Training", img: "https://img.freepik.com/free-photo/people-working-while-respecting-social-distancing-restriction_23-2148961749.jpg?ga=GA1.1.1230049114.1750570389&semt=ais_hybrid&w=740" },
    { title: "Successful Client Partnership", img: "https://img.freepik.com/free-photo/young-man-woman-working-laptop-open-space-co-working-office-room_285396-1676.jpg?ga=GA1.1.1230049114.1750570389&semt=ais_hybrid&w=740" },
  ];

  return (
    <div className="bg-gray-50 py-20 min-h-[calc(100vh-80px-100px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-gray-600">A Glimpse into ASQA Certification Events and Milestones.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="relative h-48 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-gray-800">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
