import axiosInstance from '../axiosInstance/AxiosInstance'


export const getCharactersService = async (): Promise<any> => {
  try {
    const res = axiosInstance.get('characters')
    return res|| null;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export const deleteCharactersService = async (id: string): Promise<any> => {
  try {
    const res = axiosInstance.delete(`characters/${id}`)
    return res|| null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

