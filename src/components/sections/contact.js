import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import isServer from '@constants/server-helper';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 50px auto 100px;
  text-align: center;

  .get-in-touch {
    margin: 48px 0;
  }

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--accent);
    font-family: var(--font-main);
    font-size: var(--md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.buttonBig};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    isServer.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="subheading overline">А что дальше?</h2>
      <h2 className="title get-in-touch">Связаться со мной!</h2>
      <p>
        Напишите мне, просто чтобы просто познакомиться поближе — или — нанять меня для проекта или <a href="https://frontend-courses.vercel.app/" target="_blank">в качестве наставника</a>.
      </p>
      <a className="email-link" href={`mailto:${email}`}>
        Написать Даше
      </a>
    </StyledContactSection>
  );
};

export default Contact;
