import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50 py-20 min-h-[calc(100vh-80px-100px)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600">We'd love to hear from you. Reach out with any questions or inquiries.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Form */}
            <div className="p-8 md:p-12 border-r border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 outline-none"></textarea>
                </div>
                <button type="button" className="w-full bg-[#25D366] text-white font-semibold py-2.5 rounded-md hover:bg-[#20bd5a] transition-colors flex items-center justify-center space-x-2 text-sm">
                  {/* WhatsApp Icon SVG */}
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  <span>Send via WhatsApp</span>
                </button>
                <p className="text-[10px] text-gray-500 text-center mt-2">You will be redirected to WhatsApp to send your message.</p>
              </form>
            </div>

            {/* Contact Details */}
            <div className="p-8 md:p-12 bg-gray-50/50">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Our Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Address</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      JL.GADING KIRANA TIMUR A.11/15, Kel. Kelapa Gading Barat,<br />
                      Kec. Kelapa Gading, Kota Adm. Jakarta Utara, Provinsi DKI<br />
                      Jakarta, 14240
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Phone</h3>
                    <p className="text-xs text-gray-600 mt-1">02145847784</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                    <p className="text-xs text-gray-600 mt-1">info@asia-sqa.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Monday - Friday: 09:00 - 16:30 WIB<br />
                  Saturday - Sunday: Private Session Only (By Request) 10:00 - 15:00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
