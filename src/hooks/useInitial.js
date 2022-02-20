import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IntroDialogue } from '../components/shared/UI/Modal/Dialogues';
import Modal from '../components/shared/UI/Modal/Modal';

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

  const introModal = (
    <Modal onDisable={disableModalHandler} purpose="intro">
      <IntroDialogue onDisable={disableModalHandler} />
    </Modal>
  );

  return {
    theme: {
      status: isDarkTheme,
      handler: themeChangeHandler,
    },
    intro: {
      status: showIntro,
      handler: setShowIntro,
    },
    shouldNotificationRender,
    notificationData: notification,
    introModal,
  };
};

export default useInitial;
