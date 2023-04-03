import * as React from 'react';
import './competence.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { AiFillHtml5 } from 'react-icons/ai';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { DiReact } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { TbBrandBootstrap } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { CgTrello } from 'react-icons/cg';
import { MdOutlineManageHistory } from 'react-icons/md';
import { BsDiagram3 } from 'react-icons/bs';
import { SiMicrosoftoffice } from 'react-icons/si';
import { SiPowerbi } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import { TbSeo } from 'react-icons/tb';
import { SiAdobeillustrator } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobexd } from 'react-icons/si';
import { SiSony } from 'react-icons/si';
import { DiGoogleAnalytics } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiGoogleads } from 'react-icons/si';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFillClipboardDataFill } from 'react-icons/bs';
import { GiRelationshipBounds } from 'react-icons/gi';
import dev from '../../assets/dev.png'
import proj from '../../assets/proj.jpg'
import uiux from '../../assets/uiux.jpg'
import mark from '../../assets/mark.png'




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3 }}>
                    <div className='box-skills-content'>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container-competence' id='competence'>
            <div className='title-container'>
                <h2>
                    <span>03.</span>
                    Compétences
                </h2>
            </div>
            <Box className="box-skills" sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'var(--secondary)' }}>
                    <Tabs variant="scrollable"
                        scrollButtons="auto" value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Développement web" {...a11yProps(0)} />
                        <Tab label="Gestion de projet" {...a11yProps(1)} />
                        <Tab label="UI/UX Design" {...a11yProps(2)} />
                        <Tab label="Marketing & Communication" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className='dev-box'>

                        {/* Left col */}

                        <div>

                            <div className="skill-box">
                                <span className="title">HTML <AiFillHtml5 /></span>
                                <div className="skill-bar">
                                    <span className="skill-per html">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">JS<SiJavascript /></span>
                                <div className="skill-bar">
                                    <span className="skill-per js">
                                        <span className="tooltip">70%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Bootstrap<TbBrandBootstrap /></span>
                                <div className="skill-bar">
                                    <span className="skill-per bootstrap">
                                        <span className="tooltip">100%</span>
                                    </span>
                                </div>
                            </div>

                        </div>
                        {/* Right col */}
                        <div>

                            <div className="skill-box">
                                <span className="title">CSS <DiCss3 /></span>
                                <div className="skill-bar">
                                    <span className="skill-per css">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">REACT JS <DiReact /></span>
                                <div className="skill-bar">
                                    <span className="skill-per reactjs">
                                        <span className="tooltip">60%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Tailwind<SiTailwindcss /></span>
                                <div className="skill-bar">
                                    <span className="skill-per tailwind">
                                        <span className="tooltip">100%</span>
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className='skill-img'>
                                <img src={dev} alt="" />
                            </div>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel value={value} index={1}>

                    <div className='dev-box'>

                        {/* Left col */}

                        <div>

                            <div className="skill-box">
                                <span className="title">Xmind <AiOutlineFundProjectionScreen /></span>
                                <div className="skill-bar">
                                    <span className="skill-per xmind">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">ProjectLibre<BsDiagram3 /></span>
                                <div className="skill-bar">
                                    <span className="skill-per projectlibre">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Pack Office<SiMicrosoftoffice /></span>
                                <div className="skill-bar">
                                    <span className="skill-per packoffice">
                                        <span className="tooltip">80%</span>
                                    </span>
                                </div>
                            </div>

                        </div>
                        {/* Right col */}
                        <div>

                            <div className="skill-box">
                                <span className="title">Wrike <MdOutlineManageHistory /></span>
                                <div className="skill-bar">
                                    <span className="skill-per wrike">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Trello <CgTrello /></span>
                                <div className="skill-bar">
                                    <span className="skill-per trello">
                                        <span className="tooltip">100%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Power BI<SiPowerbi /></span>
                                <div className="skill-bar">
                                    <span className="skill-per powerbi">
                                        <span className="tooltip">70%</span>
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className='skill-img'>
                                <img src={proj} alt="" />
                            </div>
                        </div>
                    </div>







                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className='dev-box'>

                        {/* Left col */}

                        <div>

                            <div className="skill-box">
                                <span className="title">Figma <FiFigma /></span>
                                <div className="skill-bar">
                                    <span className="skill-per figma">
                                        <span className="tooltip">100%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Illustrator<SiAdobeillustrator /></span>
                                <div className="skill-bar">
                                    <span className="skill-per illustrator">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Photoshop<SiAdobephotoshop /></span>
                                <div className="skill-bar">
                                    <span className="skill-per photoshop">
                                        <span className="tooltip">70%</span>
                                    </span>
                                </div>
                            </div>

                        </div>
                        {/* Right col */}
                        <div>

                            <div className="skill-box">
                                <span className="title">SEO <TbSeo /></span>
                                <div className="skill-bar">
                                    <span className="skill-per seo">
                                        <span className="tooltip">70%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Adobe XD <SiAdobexd /></span>
                                <div className="skill-bar">
                                    <span className="skill-per adobexd">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">SonyVegasPro<SiSony/></span>
                                <div className="skill-bar">
                                    <span className="skill-per sonyvegas">
                                        <span className="tooltip">90%</span>
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className='skill-img'>
                                <img src={uiux} alt="" />
                            </div>
                        </div>
                    </div>
                </TabPanel>


                <TabPanel value={value} index={3}>

                    <div className='dev-box'>

                        {/* Left col */}

                        <div>
                            <div className="skill-box">
                                <span className="title">Google Analytic <DiGoogleAnalytics /></span>
                                <div className="skill-bar">
                                    <span className="skill-per data">
                                        
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Google Adword<SiGoogleads /></span>
                                <div className="skill-bar">
                                    <span className="skill-per data">
                                        
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Data Driven Marketing<BsFillClipboardDataFill /></span>
                                <div className="skill-bar">
                                    <span className="skill-per data1">
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Customer Relationship<GiRelationshipBounds/></span>
                                <div className="skill-bar">
                                    <span className="skill-per data1">
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Right col */}

                        <div>
                            <div className="skill-box">
                                <span className="title">LinkedIn <AiFillLinkedin/></span>
                                <div className="skill-bar">
                                    <span className="skill-per data">
                                        
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Facebook <AiFillFacebook /></span>
                                <div className="skill-bar">
                                    <span className="skill-per data">
                                        
                                    </span>
                                </div>
                            </div>

                            <div className="skill-box">
                                <span className="title">Instagram<AiFillInstagram /></span>
                                <div className="skill-bar">
                                    <span className="skill-per data">
                                        
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className='skill-img'>
                                <img src={mark} alt="" />
                            </div>
                        </div>
                    </div>

                </TabPanel>
            </Box>
        </div>

    );
}