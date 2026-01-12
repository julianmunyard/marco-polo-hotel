export default function ContactPage() {
  return (
    <div className="bg-section" style={{ paddingTop: '200px', paddingBottom: '64px' }}>
      <div className="container max-w-2xl">
        <h1 className="text-lg md:text-xl font-bold mb-6 text-center text-gray-900">Contact Us</h1>
        <div className="card">
          <h2 className="text-base font-bold mb-4 text-gray-900">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2 text-gray-900">Address</h3>
              <p className="text-gray-700">
                42 Parramatta Road, Summer Hill<br />
                Sydney, NSW 2130 Australia
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-gray-900">Phone</h3>
              <p className="text-gray-700">
                Tel.: <a href="tel:+61288808320" className="text-gray-900 hover:underline">+61 2 8880 8320</a><br />
                / <a href="tel:+61290379888" className="text-gray-900 hover:underline">+61 2 9037 9888</a><br />
                Office Mobile No.: <a href="tel:+61410113288" className="text-gray-900 hover:underline">+61 410 113 288</a>
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-gray-900">Email</h3>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2.5 bg-white border-2 border-black text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <p className="text-gray-700 mt-2">
                Or contact us at: <a href="mailto:bookings@marcopolosydney.com.au" className="text-gray-900 hover:underline break-words">
                  bookings@marcopolosydney.com.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
