"use client"
import React, { Fragment, useState } from 'react'
import { Container, Grid, Paper, List, ListItem, Typography, TextField, } from '@mui/material'
import userClient from '../public/images/clientImg/userClient.png'
import Image from 'next/image'
import { Computer, Email, Facebook, LinkedIn, LocalPhone, LocationOn, Twitter } from '@mui/icons-material'
import dev1 from '../public/images/work/dev1.png'
import dev2 from '../public/images/work/dev2.png'
import dev3 from '../public/images/work/dev3.png'
import dev4 from '../public/images/work/dev4.png'
import footer_logo from '../public/images/footer/footer_logo.png'
import sliderImg from '../public/images/clientImg/sliderImg.jpg'
import stack1 from '../public/images/portfolio/stack1.png'
import stack2 from '../public/images/portfolio/stack2.png'
import stack3 from '../public/images/portfolio/stack3.png'
import stack4 from '../public/images/portfolio/stack4.png'
import CarouselSlider from '@/components/CarouselSlider'
import AllTechnology from '@/components/AllTechnology'
import Mobiletech from '@/components/Mobiletech'
import Webtech from '@/components/Webtech'
import Databasetech from '@/components/Databasetech'
import Othertech from '@/components/Othertech'
import web from '../public/images/serviceImg/web.png'
import commerce from '../public/images/serviceImg/commerce.png'
import server from '../public/images/serviceImg/server.png'
import webD from '../public/images/serviceImg/webD.png'
import content from '../public/images/serviceImg/content.png'
import mobile from '../public/images/serviceImg/mobile.png'
import product from '../public/images/serviceImg/product.png'
import ongoing from '../public/images/serviceImg/ongoing.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../public/images/header/logo.png'
import logo1 from '../public/images/header/logo1.png'
import email from '../public/images/header/email.png'
import phone from '../public/images/header/phone.png'
import CounterNumber from '@/components/Counter'
import { makeStyles } from '@mui/styles';




const pages = ['Home', 'About', 'Services', 'Portfolio', 'Career', 'Events', 'Blog', 'Contact', 'Reviews'];
const useStyles = makeStyles(theme => ({
  active: {
    background: '#F4D12D',
    borderRadius: 5,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [activeItem, setActiveItem] = useState(0);
  const [activeTab, setActiveTab] = useState();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleTabClick = (page) => {
    setActiveTab(page);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleItemClick = index => {
    setActiveItem(index);
  };

  const filterContent = [
    <div key="allContent" > <AllTechnology /> </div>,
    <div key="mobileContent"><Mobiletech /> </div>,
    <div key="webContent"><Webtech /></div>,
    <div key="databaseContent"> <Databasetech /> </div>,
    <div key="othersContent"> <Othertech /> </div>,
  ];


  return (
    <Fragment>

      {/* header Section */}
      <Container>
        <Grid container className='header-bar' spacing={2} my={1} >
          <Grid item xs={12} sm="auto">
            <Image className='logo' src={logo} width={320} height={80} objectFit='cover' />
          </Grid>
          <Grid item xs={12} sm="auto" display={'flex'} gap={2}>
            <Grid display={'flex'} alignItems={'center'} gap={2}>
              <Image src={email} width={35} height={35} />
              <a href='mailto:info@mangocoders.com' className='hover'>info@mangocoders.com</a>
            </Grid>
            <Grid display={'flex'} alignItems={'center'} gap={2} >
              <Image src={phone} width={30} height={30} />
              <a href='mailto:info@mangocoders.com' className='hover'>+92-306-4500050</a>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Navbar Section */}
      <Grid>
        <AppBar position="static" className='header'>
          <Container maxWidth="xl" >
            <Container>
              <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Typography
                  noWrap
                  href="#app-bar-with-responsive-menu"
                  sx={{

                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                  }}
                >
                  <Image src={logo1} className="header-logo" />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      className='tabButton'
                      key={page}
                      onClick={() => handleTabClick(page)}
                      sx={{ my: 2, color: page === activeTab ? 'white' : 'inherit', background: page === activeTab ? '#fff' : 'transparent' }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip >
                    <Box sx={{ x: 10 }} className='social_icon'>
                      <Facebook className='icon' />
                      <Twitter className='icon' />
                      <LinkedIn className='icon' />
                    </Box>
                  </Tooltip>
                </Box>
              </Toolbar>
            </Container>
          </Container>
        </AppBar>
      </Grid>

      {/* Banner Section */}
      <div className='bg-img' >
        <div className='elementor-shap'>
          <Container className="banner-wrapper">
            <Grid container spacing={2} >
              <Grid item xs={12} md={6} >
                <div className="banner-section">
                  <h1 className="header-title">Mangocoders Software & Website Development Company</h1>
                  <p className='banner-description'>We provide enterprise web development services to assist businesses in streamlining workflows, increasing staff productivity, and improving customer experience</p>
                </div>
              </Grid>
              <Grid item xs={12} md={6} className='mb-50'>
                <div className="form-head">
                  <div className="form-content">

                    <form onSubmit={handleSubmit}>
                      <h2 className="form-title">Get In Contact</h2>
                      <TextField
                        size={'medium'}
                        className='text-field'
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                      <TextField
                        size={'medium'}
                        className='text-field'

                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                      <TextField
                        size={'medium'}
                        className='text-field'

                        label="Phone Number"
                        type="tel"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                      <TextField
                        className='text-field'

                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                      <Button variant="contained" type="submit" className="btn-warning">
                        Send
                      </Button>
                    </form>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>

      {/* Service Section */}
      <div className='service-section'>
        <div className='wrapper'>
          <Container >
            <Grid sx={12} md={12}>
              <div className='service-content'>
                <h4 className='service-title'>SERVICES</h4>
                <h3 className='inner-discription'>We Are Increasing Business Success With Technology</h3>
                <div className="line-slider">
                  <div className='heading-line'></div>
                </div>
              </div>
            </Grid>
            <Grid className='hide-content'>
              <Grid container spacing={2} className='elementor-wrappers'>
                <Grid item xs={3}>
                  <div className='elementor-wrapper'>
                    <div className='elementor-widget'>
                      <h2 className='elementor-heading-title'><a href="https://mangocoders.com/services/web-designing/">Web<br />Designing </a></h2>
                    </div>
                    <div className='web-content'>
                      <Image src={web} className='web-img' alt='web-img' />
                    </div>
                    <p className="services-txt">Web designing directs to the design of the website that has to be displayed on the browsers.</p>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className='elementor-wrapper'>
                    <div className='elementor-widget'>
                      <h2 className='elementor-heading-title'><a href="https://mangocoders.com/services/web-designing/">Electronic<br />Commerce</a></h2>
                    </div>
                    <div className='web-content'>
                      <Image src={commerce} className='web-img' alt='commerce-img' />
                    </div>
                    <p className="services-txt">We are thought leaders in creating  through responsive web design and emergin UX technologies.</p>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className='elementor-wrapper'>
                    <div className='elementor-widget'>
                      <h2 className='elementor-heading-title'><a href="https://mangocoders.com/services/web-designing/">Server<br />Management</a></h2>
                    </div>
                    <div className='web-content'>
                      <Image src={server} className='web-img' alt='server-img' />
                    </div>
                    <p className="services-txt">Focus on your business without worrying about server monitoring server support, server hardening.</p>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className='elementor-wrapper'>
                    <div className='elementor-widget'>
                      <h2 className='elementor-heading-title'><a href="https://mangocoders.com/services/web-designing/">Web<br />Development</a></h2>
                    </div>
                    <div className='web-content'>
                      <Image src={webD} className='web-img' alt='web-developing' />
                    </div>
                    <p className="services-txt">Make an online appearance to increase your business with a free maintenance of your presences.</p>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2} className='elementor-wrappers '>
                <Grid item xs={3}>
                  <div className='elementor-wrapper'>
                    <div className='elementor-widget'>
                      <h2 className='elementor-heading-title'><a href="https://mangocoders.com/services/web-designing/">Content<br />Writing </a></h2>
                    </div>
                    <div className='web-content'>
                      <Image src={content} className='web-img' alt='web-img' />
                    </div>
                    <p className="services-txt">Content writing is a complete procedure of organizing, writing and rephrasing a content.</p>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className='elementor-wrapper m-bottom'>
                    <div className='elementor-widget'>
                      <h2 className='elementor-heading-title'><a href="https://mangocoders.com/services/web-designing/">Mobile<br />AppDevelopment</a></h2>
                    </div>
                    <div className='web-content'>
                      <Image src={mobile} className='web-img' alt='commerce-img' />
                    </div>
                    <p className="services-txt">Build Mobile application that improve customer access to your business through the modern technologies.</p>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className='elementor-wrapper'>
                    <div className='elementor-widget'>
                      <h2 className='elementor-heading-title'><a href="https://mangocoders.com/services/web-designing/">Product<br />Consultation</a></h2>
                    </div>
                    <div className='web-content'>
                      <Image src={product} className='web-img' alt='server-img' />
                    </div>
                    <p className="services-txt">Build Mobile application that improve customer access to your business through the modern technologies.</p>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className='elementor-wrapper'>
                    <div className='elementor-widget'>
                      <h2 className='elementor-heading-title'><a href="https://mangocoders.com/services/web-designing/">Ongoing<br />Support</a></h2>
                    </div>
                    <div className='web-content'>
                      <Image src={ongoing} className='web-img' alt='web-developing' />
                    </div>
                    <p className="services-txt">Build Mobile application that improve customer access to your business through the modern technologies..</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>


      {/* Technology section */}
      <div className='technology-section'>
        <div className='wrapper'>
          <Container >
            <Grid sx={12} md={12}>
              <div className='tech-content'>
                <h4 className='service-title'>TECHNOLOGIES</h4>
                <h3 className='inner-discription'>We Are Offering All Kinds of IT Solutions <br/> Services </h3>
                <div className="line-slider">
                  <div className='heading-line'></div>
                </div>
              </div>
            </Grid>
            <Grid>
              <div className='filter-gallery-control'>
                <List className="tab-list" width={300}>
                  {['All', 'mobile', 'web', 'database', 'others'].map((item, index) => (
                    <ListItem

                      key={item}
                      className={index === activeItem ? classes.active : ''}
                      onClick={() => handleItemClick(index)}
                    >
                      {item}
                    </ListItem>
                  ))}
                </List>
                <div className='header-technology-content'>
                  <div className="content-technology">
                    {filterContent[activeItem]}
                  </div>
                </div>
              </div>
            </Grid>
          </Container>
        </div>
      </div>

      {/* Portfolio Section */}
      <div>
        <div className='portfolio-header'>
          <Container className='responsive-contain'>
            <Grid>
              <Grid sx={12} md={12}>
                <div className='portfolio-content'>
                  <h3 className='inner-discription pt-20'>Portfolio</h3>
                  <div className="line-slider">
                    <div className='heading-line'></div>
                  </div>
                </div>
              </Grid>
              <Grid className='main-portfolio-container'>
                <Grid container spacing={2} className='portfolio-container'>
                  <Grid item lg={6} xs={12} md={6} style={{ padding: '0px' }}>
                    <div className='image-wrapper'>
                      <CarouselSlider />
                    </div>
                  </Grid>
                  <Grid item lg={6} xs={12} md={6}>
                    <div className='elementor-portfolio-container'>
                      <div className='elementor-portfolio-wrapper'>
                        <h3 className='portfolio-title'>Aff Webs</h3>
                        <p className='slider-paragraph '>This platform connects sellers and buyers and allows them to sign up as needed. Sellers may personalize their store by selecting their own theme colors, logo, and favicon. They can also upload product details, pictures, and maintain inventory, as well as review monthly sales . They can also post their products on social media platforms through their store. The seller can buy a plan that suits his needs and use the services that are included in the plan.</p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div className='box-bell'>
              <Grid container spacing={2} >
                <Grid item lg={3} md={3} xs={6} sm={6} className='stright-line'>
                  <div className='detail-box '>
                    <h4 className='detail-box-heading'>Plateform </h4>
                    <Computer className='com-icon' />
                  </div>
                </Grid>
                <Grid item lg={3} md={3} xs={6} sm={6}>
                  <div className='detail-box'>
                    <h4 className='detail-box-heading'>Timeline</h4>
                    <h4 className='detail-box-headings'>03</h4>
                    <h4 className='detail-box-headings'>Months</h4>

                  </div>
                </Grid>
                <Grid item lg={3} md={3} xs={6} sm={6}>
                  <div className='detail-box stright-line'>
                    <h4 className='detail-box-heading stright-line'>Teams &nbsp;</h4>
                    <h4 className='detail-box-headings'>03</h4>
                    <h4 className='detail-box-headings'>Members</h4>

                  </div>
                </Grid>
                <Grid item lg={3} md={3} xs={6} sm={6}>
                  <div className='detail-box'>
                    <h4 className='stack-box'>Stack</h4>
                    <Image src={stack1} className='portfolio-stack' />
                    <Image src={stack2} className='portfolio-stack' />
                    <Image src={stack3} className='portfolio-stack' />
                    <Image src={stack4} className='portfolio-stack' />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </div>

      {/* Client Section */}
      <div className='client-section'>
        <div className='client-wrapper'>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} xs={12} sm={12}>
                <div className="clien-img">
                  <Image src={userClient} alt='userClient-img' className="userClient" />
                </div>
              </Grid>
              <Grid item lg={6} md={6} xs={12} sm={12}>
                <Grid className='header-client'>
                  <div className='contact-box'>
                    <div className='address-item'>
                      <div className='address-icon'>
                        <LocalPhone />
                      </div>
                    </div>
                  </div>
                  <div className='rs-heading'>
                    <div className='title-inner'>
                      <h2 className='watermark'><span>CALL US 24/7</span></h2>
                      <h2 className='contact'><span>+92-306-4500050</span></h2>
                      <p className='description'>Have any idea or project for in your mind call us or schedule a appointment. Our representative will reply you shortly.</p>
                    </div>
                  </div>
                </Grid>
                <Grid>
                  <CounterNumber/>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>

      {/* Working Procss Section */}
      <div>
        <div className='working-container'>
          <Container>
            <Grid>
              <Grid sx={12} md={12}>
                <div className='working-content'>
                  <h3 className='inner-discription' style={{ marginTop: '12px' }}> Working Process - How We Work For Our Customers</h3>
                  <div className="line-slider">
                    <div className='heading-line'></div>
                  </div>
                </div>
              </Grid>
              <Grid container spacing={2} className='main-wrap'>
                <Grid item lg={3} xs={12} md={6} sm={12}>
                  <div className='elementor-working-wrap'>
                    <div className='elementor-widget-spacer'>
                      <div className='elementor-widget-editor'>
                        <Image src={dev1} alt='discovery-img' className='discovery-img' />
                        <div className='elementor-description-head'>
                          <p className='elementor'>The process where understanding of the project is developed in between the client and the company.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} xs={12} md={6} sm={12}>
                  <div className='elementor-working-wrap'>
                    <div className='elementor-widget-spacer'>
                      <div className='elementor-widget-editor'>
                        <Image src={dev2} alt='discovery-img' className='discovery-img' />
                        <div className='elementor-description-head'>
                          <p className='elementor'>The phase done by the organization to determine project goals and to plan the project..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} xs={12} md={6} sm={12}>
                  <div className='elementor-working-wrap'>
                    <div className='elementor-widget-spacer'>
                      <div className='elementor-widget-editor'>
                        <Image src={dev3} alt='discovery-img' className='discovery-img' />
                        <div className='elementor-description-head'>
                          <p className='elementor'>Execution is the phase where project is implemented, tested and deployed by team.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} xs={12} md={6}>
                  <div className='elementor-working-wrap'>
                    <div className='elementor-widget-spacer'>
                      <div className='elementor-widget-editor'>
                        <Image src={dev4} alt='discovery-img' className='discovery-img' />
                        <div className='elementor-description-head'>
                          <p className='elementor'>Deliver is that phase where the project is delivered to the client after completion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>

      {/* Footer Section */}
      <div className='footer-section'>
        <div className='footer-wrapper'>
          <div className='footer-container'>
            <Container>
              <Grid container spacing={2} >
                <Grid item lg={3} xs={12} md={4} sm={6}>
                  <div className='elementor-footer main-office-foorter-responsive'>
                    <div className='elementor-wrapper'>
                      <Image src={footer_logo} alt='footer-logo' className='footer-logo' />
                      <div className='elementor-footer-description'>
                        <p className='responsive-description'>We provide a wide range of services to fill the voids in your organization or product. We provide you with an online identity to increase your business.</p>
                      </div>
                      <div className='social-icon-footer'>
                        <Facebook />
                        <Twitter className='footer-icon' />
                        <LinkedIn className='footer-icon' />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} xs={12} md={4} sm={6}>
                  <div>
                    <div className='elementor-service-footer'>
                      <h2 className='heading-title-service'>Services</h2>
                      <ul>
                        <li className='elementor-item'>Web Designing</li>
                        <li className='elementor-item'>Mobile Development</li>
                        <li className='elementor-item'>Server Management</li>
                        <li className='elementor-item'>Web Development</li>
                        <li className='elementor-item'>Content Writing</li>
                        <li className='elementor-item'>Product Consultation</li>
                        <li className='elementor-item'>Ongoing Support</li>
                      </ul>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} xs={12} md={4} sm={6}>
                  <div className='main-office-foorter-responsive'>
                    <div className='elementor-office-footer'>
                      <h2 className='heading-title-service'>Head Office</h2>
                      <div className='elementor-cotainer-office' >
                        <div className='elementor-cotainer-office' >
                          <p className='content-header' style={{ gap: '15px' }}>
                            <LocationOn className='footer-icons' />
                            <span className='description-footer'>5033 Foursprings Ave Mississauga, ON, L5R 0G6</span>
                          </p>
                        </div>
                        <div className='elementor-cotainer-office' >
                          <p className='content-header' style={{ gap: '15px' }}>
                            <LocalPhone className='footer-icons' />
                            <span className='description-footers'>+1 (647) 781-5782</span>
                          </p>
                        </div>
                        <div className='elementor-cotainer-office' >
                          <p className='content-header' style={{ gap: '15px' }}>
                            <Email className='footer-icons' />
                            <span className='description-footers'>info@mangocoders.com</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} xs={12} md={4} sm={6}>
                  <div className='main-office-foorter-responsive'>
                    <div className='elementor-office-footer'>
                      <h2 className='heading-title-service'>Branch Office</h2>
                      <div className='elementor-cotainer-office' >
                        <div className='elementor-cotainer-office' >
                          <p className='content-header' style={{ gap: '15px' }}>
                            <LocationOn className='footer-icons' />
                            <span className='description-footer'>S-3 3rd Floor, Rakshanda Heights Multan Road Lahore</span>
                          </p>
                        </div>
                        <div className='elementor-cotainer-office' >
                          <p className='content-header' style={{ gap: '15px' }}>
                            <LocalPhone className='footer-icons' />
                            <span className='description-footers'>+92-306-4500050</span>
                          </p>
                        </div>
                        <div className='elementor-cotainer-office' >
                          <p className='content-header' style={{ gap: '15px' }}>
                            <Email className='footer-icons' />
                            <span className='description-footers'>info@mangocoders.com</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className='copy-write'>
          <div className='elementor-copy-write'>
            <h2 className='copy-write-txt'>© 2021 All Rights Reserved. Design & Developed By MangoCoders</h2>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HomePage
