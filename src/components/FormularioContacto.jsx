import { useState } from 'react';
import { UserPlus, Check, X } from 'lucide-react';

const FormularioContacto = ({ onAgregarContacto, contactosExistentes }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: ''
  });
  const [errores, setErrores] = useState({});
  const [mostrarFeedback, setMostrarFeedback] = useState(false);

  // Validar formato de correo
  const validarCorreo = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  };

  // Validar si el correo ya existe
  const correoExiste = (correo) => {
    return contactosExistentes.some(contacto => 
      contacto.correo.toLowerCase() === correo.toLowerCase()
    );
  };

  // Validar formulario
  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es requerido';
    }

    if (!formData.correo.trim()) {
      nuevosErrores.correo = 'El correo es requerido';
    } else if (!validarCorreo(formData.correo)) {
      nuevosErrores.correo = 'El formato del correo no es válido';
    } else if (correoExiste(formData.correo)) {
      nuevosErrores.correo = 'Ya existe un contacto con este correo';
    }

    if (!formData.telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es requerido';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo que se está editando
    if (errores[name]) {
      setErrores(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Manejar envío del formulario
  const handleSubmit = () => {    
    if (validarFormulario()) {
      const nuevoContacto = {
        id: Date.now().toString(),
        ...formData
      };
      
      onAgregarContacto(nuevoContacto);
      setFormData({ nombre: '', correo: '', telefono: '' });
      setErrores({});
      
      // Mostrar feedback de éxito
      setMostrarFeedback(true);
      setTimeout(() => setMostrarFeedback(false), 3000);
    }
  };

  const formularioValido = formData.nombre.trim() && 
                          formData.correo.trim() && 
                          validarCorreo(formData.correo) &&
                          !correoExiste(formData.correo) &&
                          formData.telefono.trim();

  return (
    <div className="max-w-xs w-full mx-auto">
      {mostrarFeedback && (
        <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600" />
          <span className="text-green-700">¡Contacto agregado exitosamente!</span>
        </div>
      )}

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <UserPlus className="w-5 h-5 text-blue-600" />
        Agregar Nuevo Contacto
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errores.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ingresa el nombre completo"
          />
          {errores.nombre && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <X className="w-4 h-4" />
              {errores.nombre}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errores.correo ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="ejemplo@correo.com"
          />
          {errores.correo && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <X className="w-4 h-4" />
              {errores.correo}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errores.telefono ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+57 300 123 4567"
          />
          {errores.telefono && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <X className="w-4 h-4" />
              {errores.telefono}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!formularioValido}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            formularioValido
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Agregar Contacto
        </button>
      </div>
    </div>
  );
};

export default FormularioContacto;