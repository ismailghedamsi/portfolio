import { motion } from 'framer-motion';
import myImage from '../assets/futuristicdeveloper.webp';
import {styled, css} from 'styled-components';
import { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const gradientAnimation = css`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  -webkit-background-clip: text;
  color: transparent;
`;


const AnimatedTitle = styled.h1`
  ${gradientAnimation}
  font-size: 2em;
`;

const AnimatedSpan = styled.span`
  ${gradientAnimation}
`;

const AboutMe = () => {

  const { t } = useTranslation();
  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
      }}
      id="aboutMe"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={myImage}
        alt={t('aboutMe.alt')} // translation key for alt text
        style={{ width: '200px', borderRadius: '50%' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <AnimatedTitle>{t("aboutMe.title")}</AnimatedTitle>
      <p style={{ color: '#666', fontSize: '1.2em', textAlign: 'justify', maxWidth: '800px' }}>
      {t('aboutMe.intro')} <AnimatedSpan>{t('aboutMe.enthusiasticProgrammer')}</AnimatedSpan>{t('aboutMe.introCont')} <AnimatedSpan>{t('aboutMe.cuttingEdgeTechnologies')}</AnimatedSpan>{t('aboutMe.introEnd')} <AnimatedSpan>{t('aboutMe.passion')}</AnimatedSpan>{t('aboutMe.introConclusion')}
      </p>
      <p style={{ color: '#666', fontSize: '1.2em', textAlign: 'justify', maxWidth: '800px' }}>
      {t('aboutMe.journeyIntro')} <AnimatedSpan>{t('aboutMe.realWorldProblems')}</AnimatedSpan>{t('aboutMe.journeyCont')} <AnimatedSpan>{t('aboutMe.empowerEnhance')}</AnimatedSpan>{t('aboutMe.journeyConclusion')}
      </p>
      <p style={{ color: '#666', fontSize: '1.2em', textAlign: 'justify', maxWidth: '800px' }}>
      {t('aboutMe.missionIntro')} <AnimatedSpan>{t('aboutMe.impactRealWorld')}</AnimatedSpan>{t('aboutMe.missionConclusion')}
      </p>
    </motion.div>
  );
};

export default AboutMe;