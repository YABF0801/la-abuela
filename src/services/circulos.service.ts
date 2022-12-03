import { ICirculos } from '@/pages/dashboard/Circulos/interface';
import { instance } from './base';
const endpoint = 'circulos';

export const circulosService = {
  getAll: ({ page = 1 }: { page?: number }) => {
    return instance.get(endpoint, {
      params: {
        page,
      },
    });
  },
  getOne: ({ id }: { id: number }) => {
    return instance.get(`${endpoint}/${id}`);
  },

  save: (circulos: { circulos: ICirculos }) => {
    return instance.post(`${endpoint}`, {
      ...circulos,
    });
  },
};
