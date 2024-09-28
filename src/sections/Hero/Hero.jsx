import styles from './HeroStyle.module.css';
import heroImg from '../../assets/Mitchel rev.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV_Janssen.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
   const {theme, toggleTheme} = useTheme();

   const themeIcon = theme === 'light' ? sun : moon;
   const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
   const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;
   const githubIcon = theme == 'light' ? githubLight : githubDark;

   return <section id='hero' className={styles.container}>
      <div className={styles.colorModelContainer}>
         <img 
            className={styles.hero} 
            src={heroImg} 
            alt="profile picture of Janssen Mitchellano" 
         />
         <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt="color mode icon"
            onClick={toggleTheme}
         />
      </div>
      <div className={styles.info}>
         <h1>
            Janssen 
            <br /> 
            Mitchellano
         </h1>
         <h2>
            Computer Science
         </h2>
         <span>
            <a href="https://instagram.com" target="_blank">
               <img src={twitterIcon} alt="twitter icon" />
            </a>
            <a href="https://www.linkedin.com/in/janssen-mitchellano-hamaziah-79642b254/" target="_blank">
               <img src={linkedInIcon} alt="linkedIn icon" />
            </a>
            <a href="https://github.com/JanssenMitch" target="_blank">
               <img src={githubIcon} alt="github icon" />
            </a>
         </span>
         <p className={styles.description}>
            With a passion in applying AI technologies to create innovative solutions that have a positive impact, 
            ranging from health to economy. 
         </p>
         <a href={CV} download>
            <button className='hover'>
               My CV
            </button>
         </a>
      </div>
   </section>
}

export default Hero
