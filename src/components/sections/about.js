import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import isServer from '@constants/server-helper';
import { usePrefersReducedMotion } from '@hooks';

const StyledLangSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  grid-gap: 64px;

  @media (max-width: 420px) {
    grid-gap: 12px;
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    @media (max-width: 420px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-main);
      font-size: var(--xs);

      &:before {
        content: '֯֯✦';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-size: var(--sm);
        line-height: 12px;
      }
    }
  }

  ul.languages-list {
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    .flag-icon {
      width: 14px;
      height: 14px;
      border-radius: 24px;
      border: 0.5px solid grey;
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-main);
      font-size: var(--xs);

      &:before {
        content: '֯֯✦';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-size: var(--sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledAboutSection = styled.section`
  max-width: 900px;
  .subheading {
    width: 100%;
    margin: 10px 0 40px;
  }
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  margin-top: -48px;
  @media (max-width: 768px) {
    margin: 12px auto;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    &:hover,
    &:focus {
      outline: 0;
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) drop-shadow(8px 8px 12px var(--accent-dark));
      transition: var(--transition);
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    isServer.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  const skills = ['JavaScript (ES6+)', 'CSS (CSS5, SCSS)', 'React', 'Vue', 'TypeScript', 'Node.js'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="subheading">Обо мне</h2>
      <div className="inner">
        <div>
          <p>Привет! Меня зовут Даша.</p>
          <p>
            Я специализируюсь на
            <b>
              <span className="accent"> UX и инклюзивности</span>
            </b>{' '}
            веб-приложений и сайтов. Старший фронтенд разработчик и руководитель небольшой фронтенд
            команды (менее 6 человек) с более чем 5-летним опытом работы в{' '}
            <b>React, Node.js и TypeScript.</b>
          </p>
          <p>
            Мои коммуникативные навыки позволяют мне эффективно работать с командами разработчиков и
            дизайнеров, а также брать на себя обязанности наставничества.
          </p>
          <p>
            Я из тех, кто учится всю жизнь. Люблю узнавать новое и осваивать навыки. В свободное
            время я охотно читаю, пишу романы, вяжу и рисую. Обожаю своего огромного{' '}
            <span style="text-decoration:line-through;">лося</span> пса – Гектора 🐶
          </p>
          <br />
        </div>
        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../assets/images/daria.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Даша Дьячкова, старший фронтенд разработчик"
            />
          </div>
        </StyledPic>
      </div>
      <StyledLangSection>
        <ul className="skills-list">
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
        <ul className="languages-list">
          <li>
            <b>Родные</b>:{' '}
            <StaticImage
              className="img flag-icon"
              src="../../assets/icons/gb.svg"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="English flag"
            />{' '}
            /{' '}
            <StaticImage
              className="img flag-icon"
              src="../../assets/icons/de.svg"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="German flag"
            />{' '}
            /{' '}
            <StaticImage
              className="img flag-icon"
              src="../../assets/icons/ru.svg"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Russian flag"
            />
          </li>
          <li>
            <b>Бегло разговариваю на</b>:{' '}
            <StaticImage
              className="img flag-icon"
              src="../../assets/icons/rs.svg"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Serbian flag"
            />{' '}
            /{' '}
            <StaticImage
              className="img flag-icon"
              src="../../assets/icons/hr.svg"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Croatian flag"
            />
          </li>
          <li>
            <b>Сейчас я учу</b>:{' '}
            <StaticImage
              className="img flag-icon"
              src="../../assets/icons/fr.svg"
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="French flag"
            />
          </li>
        </ul>
      </StyledLangSection>
    </StyledAboutSection>
  );
};

export default About;
