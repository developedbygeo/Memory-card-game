import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useInitial = (fnToDispatch) => {
  const [showIntro, setShowIntro] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const preExistingTheme = JSON.parse(localStorage.getItem('memoryCardGameDevelopedbygeo')) || false;
  const [isDarkTheme, setIsDarkTheme] = useState(preExistingTheme);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  const shouldNotificationRender = notification && showNotification;

  useEffect(() => {
    setShowIntro(true);
  }, []);

  // localStorage updating on theme change
  useEffect(() => {
    localStorage.setItem('memoryCardGameDevelopedbygeo', isDarkTheme);
  }, [isDarkTheme]);

  useEffect(() => {
    dispatch(fnToDispatch());
  }, [fnToDispatch, dispatch]);

  // timed intro modal and cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  //theme update
  const themeChangeHandler = useCallback(() => setIsDarkTheme((prevState) => !prevState), []);

  //modal disable
  const disableModalHandler = useCallback(() => setShowIntro((prevState) => !prevState), []);

  return {
    theme: {
      status: isDarkTheme,
      handler: themeChangeHandler,
    },
    intro: {
      status: showIntro,
      handler: setShowIntro,
    },
    disableModalHandler,
    shouldNotificationRender,
    notificationData: notification,
  };
};

export default useInitial;
