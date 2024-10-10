import './App.css'
import { createContext, useState, useEffect, useRef, useContext } from 'react'
import { MainSection } from './components/mainsection/mainsection'
import { Section1 } from './components/section1'
import { AboutPage } from './components/aboutpage/aboutpage';
import { MenuBtn } from './components/mainsection/subcomponents/menu/menubtn';
import { CompanyLogo } from './components/mainsection/subcomponents/companylogo/companylogo';
import { ActionBtnGrp } from './components/mainsection/subcomponents/actionbuttongroup/actionbuttongroup';

const context = createContext();
export const AppContext = () => {
  return useContext(context);
};

function App() {
  const sections = ['section-1','section-2','section-3','section-4','about-1','about-2'];
  const [visibleSection, setVisibleSection] = useState('section-1');
  const [redirect, setRedirect] = useState(false);
  const lastScrollView = useRef('section-1');
  const timeoutId = useRef();
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const list = entry.target.classList;
          setVisibleSection(prev => {
            const elExists = sections.find(section => list.contains(section));
            return elExists || prev;
          })
        }
      });
  }, options);

  useEffect(() => {
    if(!timeoutId.current){
      timeoutId.current = setTimeout(() => {
        const elements = document.querySelectorAll('.observe');
        elements.forEach(element => observer.observe(element)); 
      }, 100);
    }

      if(redirect){
        setTimeout(() => {    
          const elements = document.querySelectorAll('.reobserve');
          elements.forEach(element => observer.observe(element)); 
        }, 100);
      }else{
        const elements = document.querySelectorAll('.observe');
        elements.forEach(element => observer.observe(element));
        document.querySelector(`.${lastScrollView.current}`).scrollIntoView();
      }

      return () => {
          clearTimeout(timeoutId);
      }
  }, [redirect])

  const contextValues = {
    visibleSection,
    redirect,
    setRedirect,
    lastScrollView
  }

  return (
    <context.Provider value={ contextValues }>
      <div className='relative w-full h-full text-white overflow-hidden'>
        <MenuBtn/>
        <CompanyLogo/>
        <ActionBtnGrp/>
        <MainSection/>
        {
          !redirect
            ? (
              <div className='scroll-area absolute top-0 left-0 w-full h-full snap-y snap-mandatory overflow-y-scroll z-10'>
                <Section1/>
                <section className="section-2 observe w-full h-full snap-end snap-always"></section>
                <section className="section-3 observe w-full h-full snap-end snap-always"></section>
                <section className="section-4 observe w-full h-full snap-end snap-always"></section>
              </div>
            )
            : <AboutPage/>
        }
      </div>
    </context.Provider>
  )
}

export default App
