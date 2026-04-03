import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ASQA Certification</h1>
          <p className="text-gray-600">Learn more about our journey, mission, vision, and the values that drive us.</p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            ASQA Certification was founded with the vision of becoming a beacon of trust and quality in the certification industry. Our journey began with a small team of passionate experts dedicated to promoting excellence and best practices across various sectors. Over the years, we have grown into a reputable organization, serving clients across the continent and helping them achieve international recognition for their standards and capabilities.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide credible, impartial, and efficient certification services that enhance the competitiveness and sustainability of organizations and professionals.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted and sought-after certification body in Asia, recognized for our commitment to integrity, excellence, and customer satisfaction.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Integrity",
                desc: "We uphold the highest ethical standards in all our operations and interactions."
              },
              {
                title: "Excellence",
                desc: "We are committed to delivering services of the highest quality and promoting continuous improvement."
              },
              {
                title: "Impartiality",
                desc: "We ensure fairness and objectivity in all our assessment and certification processes."
              },
              {
                title: "Customer Focus",
                desc: "We strive to understand and meet the needs of our clients, providing value and fostering long-term partnerships."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="text-blue-500 mt-1 flex-shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
