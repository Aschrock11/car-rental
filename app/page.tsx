import styles from './page.module.css';
import LandingPage from './components/LandingPage/LandingPage';
import Reserve from './components/Reserve/Reserve';
import RentalSteps from './components/RentalSteps/RentalSteps';
import Fleet from './components/Fleet/Fleet';
import Banner from './components/Banner/Banner';
import WhyUs from './components/WhyUs/WhyUs';
import Testimonials from './components/Testimonials/Testimonials';
import Faq from './components/Faq/Faq';
import DownloadApp from './components/DownloadApp/DownloadApp';
import '../app/page.scss';
export default function Home() {
  return (
    <main className={styles.main}>
      <div className='max-width-container'>
        <LandingPage />
        <Reserve />
        <RentalSteps />
        <Fleet />
        <Banner />
        <WhyUs />
        <Testimonials />
        <Faq />
        <DownloadApp />
      </div>
    </main>
  );
}
