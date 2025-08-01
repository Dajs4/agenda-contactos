import { User } from 'lucide-react';
import Contacto from './Contacto';

const ListaContactos = ({ contactos, onEliminar, busqueda }) => {
  const contactosFiltrados = contactos.filter(contacto =>
    contacto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    contacto.correo.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (contactosFiltrados.length === 0) {
    return (
      <div className="text-center py-8">
        <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">
          {busqueda ? 'No se encontraron contactos' : 'No hay contactos agregados'}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {contactosFiltrados.map(contacto => (
        <Contacto
          key={contacto.id}
          contacto={contacto}
          onEliminar={onEliminar}
        />
      ))}
    </div>
  );
};

export default ListaContactos;