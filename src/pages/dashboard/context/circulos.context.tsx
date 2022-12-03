import { circulosService } from '@/services';
import { AxiosResponse } from 'axios';
import { createContext, FC, useState, useContext } from 'react';
import { ICirculos } from '@/pages/dashboard/Circulos/interface';

type CirculosContextType = {
  circulos: ICirculos[];
  createCirculos: (circulos: { circulos: ICirculos }) => void;
};

const CirculosContext = createContext<CirculosContextType | null>(null);

/* type CirculosContextType = {
  circulos: JSX.Element | JSX.Element[];
};  */

const CirculosContextProvider: FC<CirculosContextType> = ({ circulos }) => {
  const [circulo, setCirculos] = useState<ICirculos[]>([]);

  const createCirculos = async (circulos: { circulos: ICirculos }) => {
    const circulosResp: AxiosResponse<ICirculos> = await circulosService.save(circulos);
    console.log(circulosResp);
    setCirculos((state) => [...state, circulosResp.data]);
  };

  return <CirculosContext.Provider value={{ circulos, createCirculos }}>

  </CirculosContext.Provider>;
};

export default CirculosContextProvider;


export const useCirculos = () => {
  const context = useContext(CirculosContext);
  if (context === undefined) throw new Error('context no funciona');
  return context;
};
