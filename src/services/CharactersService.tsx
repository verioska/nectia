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


export const deleteCharactersService = async (id: any): Promise<any> => {
  try {
    const res = axiosInstance.delete(`characters/${id}`)
    return res|| null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const createCharactersService = async (character: any): Promise<any> => {
  try {
    const res = axiosInstance.post(`characters`,character)
    return res|| null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const editCharactersService = async (character: any, id: string): Promise<any> => {
  try {
    const res = axiosInstance.put(`characters/${id}`,character)
    return res|| null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

