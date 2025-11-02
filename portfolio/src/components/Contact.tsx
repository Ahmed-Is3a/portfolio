import Footer from './footer';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-600 mb-4">Want to work together or say hi? Send a message.</p>
        <form className="grid gap-3">
          <input className="border px-3 py-2 rounded" placeholder="Your name" />
          <input className="border px-3 py-2 rounded" placeholder="Your email" />
          <textarea className="border px-3 py-2 rounded" rows={5} placeholder="Message" />
          <button className="w-max px-5 py-2 bg-sky-600 text-white rounded">Send message</button>
        </form>
      </div>
      <Footer />
    </section>
  )
}
