import {RegisterAccount} from '../interfaces/LoginResponse';

export const transformResgisterAccountToFormData = (model: RegisterAccount) => {
  const form = new FormData();
  form.append('nombre', model.nombre);
  form.append('apellidos', model.apellidos);
  form.append('numeroTelefono', model.numeroTelefono);
  form.append('email', model.email);
  form.append('password', model.password);
  if (model.fotoPerfil) form.append('fotoPerfil', model.fotoPerfil);
  return form;
};
