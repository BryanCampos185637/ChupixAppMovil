import {useCallback, useEffect, useState} from 'react';
import {Perfil} from '../interfaces/perfil';
import {getUsuarioByIdService} from '../services/account';
import {handlerError} from '../helpers/handlerError';
import {useAppStore} from './useAppStore';
import {Direccion} from '../interfaces/Direccion';
import {getDireccionesByIdUsuarioService} from '../services/direccionServices';

export const usePerfil = (idPerfil: string) => {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [direcciones, setDirecciones] = useState<Direccion[]>([]);
  const {onStartLoading, onEndLoading} = useAppStore();

  useEffect(() => {
    getDataPerfil();
  }, []);

  const getDataPerfil = useCallback(async () => {
    try {
      onStartLoading();
      const perfilService = getUsuarioByIdService(idPerfil);
      const direccionesService = getDireccionesByIdUsuarioService(idPerfil);

      const responses = await Promise.all([perfilService, direccionesService]);

      setPerfil(responses[0]);
      setDirecciones(responses[1]);
    } catch (error) {
      handlerError(error);
    } finally {
      onEndLoading();
    }
  }, [idPerfil]);

  return {
    perfil,
    ...perfil,
    direcciones,
  };
};
