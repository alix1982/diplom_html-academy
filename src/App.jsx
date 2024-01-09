import { useState, useEffect } from 'react';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

export const App = () => {

  // изменения размера экрана
  const [isSizeWindow, setIsSizeWindow] = useState('desctop');
  const setSize = () => {
      window.innerWidth <= 600 && setIsSizeWindow('mobile');
      (window.innerWidth > 600 && window.innerWidth < 1400) && setIsSizeWindow('tablet');
      window.innerWidth >= 1400 && setIsSizeWindow('desctop');
  }
  useEffect(()=>{
      setSize();
  },[]);
  useEffect(()=>{
      const onSizeWindow = () => { 
          setSize();
      };
      window.onresize = onSizeWindow;
  })

  // открытие закрытие меню
  const [isMenu, setIsMenu] = useState(false);
  useEffect(()=>{
      setIsMenu(false)
  },[isSizeWindow])
  const handleMenu = () => {
      setIsMenu(!isMenu);
  }
  const onCloseOverlay = (evt) => {
    (evt.target === evt.currentTarget) && setIsMenu(false)
  }

  return (
    <>
      <Header
        isSizeWindow={isSizeWindow}
        onCloseOverlay={onCloseOverlay}
        handleMenu={handleMenu}
        isMenu={isMenu}
        setIsMenu={setIsMenu}
      />
      <Main isSizeWindow={isSizeWindow}/>
      <Footer isSizeWindow={isSizeWindow} />
    </>
   
  );
}

export default App;
