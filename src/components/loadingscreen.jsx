import React, { useEffect } from 'react ';
import { useDispatch } from 'react-redux';
import { loadInitialCards } from '../redux/cardsSlice';

const LoadingScreen = ({
  setLoading
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(loadInitialCards());
      setLoading(false);
    }, 5000);

  }, [dispatch, setLoading]);
  return (
    <div className=' = flex justify - center items-center h-screen '>
      <h1 className='text-3xl ' > Loading</h1>

    </div>

  );

};
export default LoadingScreen;