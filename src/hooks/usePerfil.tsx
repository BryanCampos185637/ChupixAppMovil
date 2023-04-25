import {useCallback, useEffect, useState} from 'react';
import {Perfil} from '../interfaces/perfil';
import {getUsuarioById} from '../services/account';
import {handlerError} from '../helpers/handlerError';

export const usePerfil = (idPerfil: string) => {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPerfil();
  }, []);

  const getPerfil = useCallback(async () => {
    try {
      const result = await getUsuarioById(idPerfil);
      setPerfil(result);
      setIsLoading(false);
    } catch (error) {
      handlerError(error);
    }
  }, [idPerfil]);

  return {
    perfil,
    isLoading,
    ...perfil,
  };
};
