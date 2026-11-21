import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}, ${personalInfo.title}`,
  openGraph: {
    title: 'Contacto - Portafolio',
    description: `Ponte en contacto con ${personalInfo.name}`,
    url: `${personalInfo.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-8">
          ¿Tienes un proyecto en mente o quieres saludar? Escríbeme y te
          responderé lo antes posible.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
          >
            <p className="font-semibold text-gray-800">Email</p>
            <p className="text-sm text-gray-600 break-all">{personalInfo.email}</p>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
          >
            <p className="font-semibold text-gray-800">GitHub</p>
            <p className="text-sm text-gray-600">Ver perfil</p>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
          >
            <p className="font-semibold text-gray-800">LinkedIn</p>
            <p className="text-sm text-gray-600">Ver perfil</p>
          </a>
        </div>

        <form
          action={`mailto:${personalInfo.email}`}
          method="post"
          encType="text/plain"
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-800 mb-1">
              Nombre
            </label>
            <input
              id="name"
              name="nombre"
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold text-gray-800 mb-1">
              Correo electrónico
            </label>
            <input
              id="email"
              name="correo"
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold text-gray-800 mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              name="mensaje"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}