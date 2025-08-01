import { User, Mail, Phone, Trash2 } from 'lucide-react';

const Contacto = ({ contacto, onEliminar }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow w-full break-words overflow-hidden">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-blue-600" />
            <h3 className="font-semibold text-gray-800">{contacto.nombre}</h3>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <Mail className="w-4 h-4 text-gray-500" />
            <p className="text-gray-600 text-sm">{contacto.correo}</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <p className="text-gray-600 text-sm">{contacto.telefono}</p>
          </div>
        </div>
        <button
          onClick={() => onEliminar(contacto.id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
          title="Eliminar contacto"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Contacto;