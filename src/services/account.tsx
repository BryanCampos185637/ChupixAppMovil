import ChupixApi from '../api/ChupixApi';
import {Perfil} from '../interfaces/perfil';

export const getUsuarioByIdService = async (id: string) => {
  const result = await ChupixApi.get<Perfil>(`Account/MyProfile/${id}`);
  return result.data;
};
