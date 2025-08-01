import { Search } from 'lucide-react';

const BuscadorContactos = ({ busqueda, onBusquedaChange }) => {
  return (
    <div className="relative mb-0">
      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
      <input
        type="text"
        placeholder="Buscar por nombre o correo..."
        value={busqueda}
        onChange={(e) => onBusquedaChange(e.target.value)}
        className="w-full pl-8 pr-2 py-1.5 md:pl-10 md:pr-4 md:py-2 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default BuscadorContactos;