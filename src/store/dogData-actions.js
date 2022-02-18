import { uiActions } from './ui-slice';
import { dogDataActions } from './dogData-slice';

export const getDogData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/image/random/9');
      if (!res.ok) {
        throw new Error('Failed to fetch dog images');
      }
      const data = await res.json();
      return data;
    };
    try {
      const fetchedData = await fetchData();
      const transformedData = fetchedData.message.map((image, index) => {
        return { key: index, path: image };
      });
      dispatch(dogDataActions.updateDogData({ data: transformedData }));
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success:',
          message: 'Data retrieved successfully from the server.',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error:',
          message: 'Error fetching data - please try again later.',
        })
      );
    }
  };
};
