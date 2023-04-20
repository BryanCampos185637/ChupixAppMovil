import {useEffect, useState} from 'react';
import {Perfil} from '../interfaces/perfil';
import {getUsuarioById} from '../services/account';

export const usePerfil = () => {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPerfil();
  }, []);

  const getPerfil = async () => {
    try {
      const result = await getUsuarioById(
        '74289cb6-510b-40b7-963f-dc94f7d901ab',
      );
      setPerfil(result);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    perfil,
    isLoading,
    ...perfil,
  };
};
