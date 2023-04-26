import ChupixApi from '../api/ChupixApi';
import {Direccion} from '../interfaces/Direccion';

export const getDireccionesByIdUsuario = async (idPerfil: string) => {
  console.log('Se ejecuto el servicio getDireccionesByIdUsuario');
  const {data} = await ChupixApi.get<Direccion[]>(`DireccionUsuario/${idPerfil}`);
  return data;
};
