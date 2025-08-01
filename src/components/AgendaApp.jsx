import { useState, useEffect } from 'react';
import FormularioContacto from './FormularioContacto';
import ListaContactos from './ListaContactos';
import BuscadorContactos from './BuscadorContactos';
import { UserPlus } from 'lucide-react';

const AgendaApp = () => {
  const [contactos, setContactos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);

  // Cargar contactos desde localStorage al iniciar
  // Cargar contactos desde localStorage solo si está vacío el estado inicial
  useEffect(() => {
    if (contactos.length === 0) {
      const contactosGuardados = JSON.parse(localStorage.getItem('contactos') || '[]');
      if (contactosGuardados.length > 0) {
        setContactos(contactosGuardados);
      }
    }
    // eslint-disable-next-line
  }, []);

  // Guardar contactos en localStorage cuando cambien (y no está vacío)
  useEffect(() => {
    if (contactos.length > 0) {
      localStorage.setItem('contactos', JSON.stringify(contactos));
    }
  }, [contactos]);

  // Función para agregar contacto
  const agregarContacto = (nuevoContacto) => {
    setContactos(prev => [...prev, nuevoContacto]);
    setModalAbierto(false);
  };

  // Función para eliminar contacto
  const eliminarContacto = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este contacto?')) {
      setContactos(prev => prev.filter(contacto => contacto.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-2 py-4 w-full max-w-md flex flex-col rounded-xl shadow-lg border border-gray-200 bg-white">
        <div className="w-full h-full flex flex-col justify-between">
        <header className="text-center mb-2">
          <h1 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
            Agenda de Contactos
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Gestiona tus contactos de manera fácil y organizada
          </p>
        </header>

        <div className="flex justify-end mb-2">
          <button
            onClick={() => setModalAbierto(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors flex items-center justify-center"
            title="Agregar Contacto"
          >
            <UserPlus className="w-5 h-5" />
          </button>
        </div>

        {modalAbierto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative animate-fade-in">
              <button
                onClick={() => setModalAbierto(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                aria-label="Cerrar"
              >
                ×
              </button>
              <FormularioContacto 
                onAgregarContacto={agregarContacto}
                contactosExistentes={contactos}
              />
            </div>
          </div>
        )}

        <div className="px-2 md:px-4 pb-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm md:text-base font-semibold text-gray-800">
              Mis Contactos ({contactos.length})
            </h2>
          </div>
          <BuscadorContactos 
            busqueda={busqueda}
            onBusquedaChange={setBusqueda}
          />
        </div>
        <div className="px-2 md:px-4 pb-4 max-h-[220px] overflow-y-auto">
          <ListaContactos 
            contactos={contactos}
            onEliminar={eliminarContacto}
            busqueda={busqueda}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaApp;