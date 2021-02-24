import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const transition = 'ease-out 0.5s';

const Content = styled.div`
  border: 3px solid #fff;
  transition: ${transition};
  max-height: 70px;  

  h6{
    padding: 15px 30px;
    position: relative;
    background: #fff;
    transition: ${transition};
    margin-bottom: 0;
    height: 66px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    i{
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translate(-100%, -50%);
      transition: ${transition};

      .fa-minus{
        opacity: 0;
        color: ##fff;
      }

      .fa-plus{
        opacity: 1;
        color: #000;
      }
    }
  }

  p{
    margin: 0;
    cursor: auto;
    padding: 30px 30px;
    text-align: left;
    white-space: pre-line;
  }
`;

const ToggleContain = styled.div`

  overflow: hidden;
  background: #fff;
  margin-bottom: 25px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px;
  position: relative;

  a{
    color: inherit;
    text-decoration: none;
  }

  ${Content}.open{

    border: 3px solid ${({ theme }) => theme.colors.mufasaOrange};

    max-height: 700px;

    @media(min-width: 992px){
      max-height: 700px;
    }


    h6{
      background: ${({ theme }) => theme.colors.mufasaOrange};
      color: #fff;

      .fa-minus{
        opacity: 1;
        color: #fff;
      }

      .fa-plus{
        opacity: 0;
        color: #000;
      }
    }
  }
`;

const Position = styled.div`
  ${'' /* display: none; */}
  opacity: 0;
  width: 100%;
  height: 1px;
  left: 0;
  position: fixed;
  ${'' /* top: calc(-${({ theme }) => theme.measuresPatterns.header.height.general} - 40px);

  @media(min-width: 1024px){
    top: calc(-${({ theme }) => theme.measuresPatterns.header.height.minWidth1024} - 40px);
  } */}
`;

function ToggleQuestion({
  title, response, queryQuest,
}) {
  const router = useRouter();
  const { pathname, query } = router;
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const [destUrl, setDestUrl] = useState('');
  const ref = useRef();

  useEffect(() => {
    setPosition(ref.current.offsetTop);
  }, []);

  const handleOnClick = () => {
    if (query.pergunta === queryQuest) {
      setOpen(!open);
    }
    if (open === false) {
      router.push(`?pergunta=${queryQuest}#${queryQuest}`);
    } else {
      router.push(`?pergunta#${queryQuest}`);
    }
  };

  useEffect(() => {
    if (!query.pergunta) {
      setOpen(false);
    } else if (query.pergunta === queryQuest) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [query]);

  return (
    <ToggleContain
      ref={ref}
    >
      <Position
        id={queryQuest}
        style={{
          top: `${position - 100}px`,
        }}
      />
      <Content className={open ? 'open' : ''}>
        <Link href={(open === false) ? `?pergunta=${queryQuest}#${queryQuest}` : `?pergunta#${queryQuest}`}>
          <a>
            <h6>
              <span>
                {title}
              </span>
              <i className="fas fa-minus" />
              <i className="fas fa-plus" />
            </h6>
          </a>
        </Link>
        <p>
          {response}
        </p>
      </Content>
    </ToggleContain>
  );
}

export default ToggleQuestion;