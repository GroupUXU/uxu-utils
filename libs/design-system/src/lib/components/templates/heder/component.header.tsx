import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Grid, Box, Logo, FormSearch, StyleSwitch, Tabs, Link} from './../../../components';
import {useScrollY} from './../../../hooks';
import {HeaderComponent, HeaderBox} from './component.header.style';
import {Props} from './component.header.types'

export const Header: Props = ({tabs, callBack, res, ...args}, props) => {
  const [smallMenu, setSmallMenu] = useState(false);
  const {scrollYDirection, scrollY} = useScrollY({wait: 10});

  useEffect(() => {
    if (!smallMenu && (scrollY > 100) && (scrollYDirection === 'down')) setSmallMenu(true)
    else if (smallMenu && scrollYDirection === 'up') setSmallMenu(false)
  }, [smallMenu, scrollYDirection, scrollY]);

  return (
    <>
      <HeaderComponent smallMenu={smallMenu} {...args} {...props}>
        <Container>
          <Row>
            <Col xs={12} style={{padding: "1.5rem"}}>
              <Grid
                container
                gridGap="1.5rem"
                gridTemplateRows={{x: "1fr 1fr", s: "1fr"}}
                gridTemplateColumns={{
                  x: "1fr 1fr",
                  s: "220px 1fr 1fr",
                }}
              >
                <Link
                  href="/"
                  title="wTrasie"
                  style={{padding: 0, justifyContent: "flex-start"}}
                >
                  <Logo type="wTrasie" height={{x: "2rem", s: "3rem"}} fill="primary.foreground"/>
                </Link>
                <Box display={{x: "flex", s: "none"}} style={{justifyContent: "flex-end", width: "100%"}}>
                  <StyleSwitch/>
                </Box>
                <Grid gridColumn={{x: "3/1", s: "auto"}}>
                  <FormSearch res={res} callBack={callBack}/>
                </Grid>
                <Box display={{x: "none", s: "flex"}} style={{justifyContent: "flex-end"}}>
                  <StyleSwitch/>
                </Box>
              </Grid>
            </Col>
            <Col xs={12}>
              <Tabs
                style={{bottom: "-1px"}}
                tabs={tabs}/>
            </Col>
          </Row>
        </Container>
      </HeaderComponent>
      <HeaderBox/>
    </>
  );
};

