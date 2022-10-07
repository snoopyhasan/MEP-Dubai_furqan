import { Container } from "theme-ui";
import SectionHeader from "components/section-header";
import Plumber from "assets/plumber.png";
import { FiArrowRight } from 'react-icons/fi'

export default function WhatWeDo() {
  return (
    <section style={styles.coreFeature}>
        <SectionHeader title="What We Do?" />

        <div class="container">
          <div style={styles.anotherContainer}>
            <ul class="cards" style={styles.cards}>
              <li class="card" style={styles.card}>
                <div style={styles.cardContent}>
                  <div >
                    <div style={styles.imageBG}>
                      <img src={Plumber} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
                    </div>
                  </div>
                  <div>
                    <h3 style={styles.cardHeading}>Facility management</h3>
                  </div>
                  <div style={{width:'60%',textAlign:'center'}}>
                    <p style={styles.cardPara}>We are 24/7 available for you and your property. Our main aim is to make your environment a better place sustainably and cost-effectively. Having an in-house team for every facility management and MEP work stands us out from others in this unreliable market and no doubt makes us your dream facility management company in Dubai.</p>
                  </div>
                    <h2><FiArrowRight /></h2>
                </div>
              </li>
              <li class="card" style={styles.card}>
              <div style={styles.cardContent}>
                  <div >
                    <div style={styles.imageBG}>
                      <img src={Plumber} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
                    </div>
                  </div>
                  <div>
                    <h3 style={styles.cardHeading}>MEP Works</h3>
                  </div>
                  <div style={{width:'60%',textAlign:'center'}}>
                    <p style={styles.cardPara}>All over Dubai, the Urban Science team has led its impression. Whether it's a residential project, commercial, or xxxxxx, we have seen those projects in their worst and closed them with a strict deadline. In regards to experience, handing over on deadline, and correcting the blunders created by others we are the leading MEP company in Dubai. Your true partner for MEP companies in Dubai.</p>
                  </div>
                    <h2><FiArrowRight /></h2>
                </div>
              </li>
              <li class="card" style={styles.card}>
              <div style={styles.cardContent}>
                  <div >
                    <div style={styles.imageBG}>
                      <img src={Plumber} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
                    </div>
                  </div>
                  <div>
                    <h3 style={styles.cardHeading}>Air conditioning services (HVAC)</h3>
                  </div>
                  <div style={{width:'60%',textAlign:'center'}}>
                    <p style={styles.cardPara}>We are here to save you from sleepless nights. After 3-4 months of installation, if your Air-conditioner starts making noises or dripping water. You have gotten yourself into serious trouble. But do not worry, best MEP company in Dubai is here to help you. Just give us a call, we will be there to make your life easier and more comfortable.</p>
                  </div>
                    <h2><FiArrowRight /></h2>
                </div>
              </li>
              <li class="card" style={styles.card}>
              <div style={styles.cardContent}>
                  <div >
                    <div style={styles.imageBG}>
                      <img src={Plumber} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
                    </div>
                  </div>
                  <div>
                    <h3 style={styles.cardHeading}>Chilled water system</h3>
                  </div>
                  <div style={{width:'60%',textAlign:'center'}}>
                    <p style={styles.cardPara}>Do you need a chilled water storage system to be installed in your industry? Urban Science is here for you. Our chiller maintenance programs are site-specific, reducing the possibility of costly breakdowns in the cooling systems of our clients. We have an in-house MEP team for both rooftop systems and those that are installed behind the building’s wall. So keep calm and contact us for all your facility management and MEP works.</p>
                  </div>
                    <h2><FiArrowRight /></h2>
                </div>
              </li>
              <li class="card" style={styles.card}>
                <div style={styles.cardContent}>
                  <div >
                    <div style={styles.imageBG}>
                      <img src={Plumber} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
                    </div>
                  </div>
                  <div>
                    <h3 style={styles.cardHeading}>Electrical works</h3>
                  </div>
                  <div style={{width:'60%',textAlign:'center'}}>
                    <p style={styles.cardPara}>The reason why we are counted as one of the best facility management companies in Dubai is that we are a one-door solution for every MEP and facility management work. From your LV network to ELV services we have covered it all. We do not stop here, from your access control, CCTV, and security we have experts in every department. You are one call away from the best MEP company in Dubai..</p>
                  </div>
                    <h2><FiArrowRight /></h2>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative",
    backgroundColor: "#E9EFFF",
    padding: "60px 0",
    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],
      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "60%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
    },
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
  cards: {
    display: "grid",
    margin: "10px",
    gridAutoColumns: ["100%", "50%"],
    gridColumnGap: "20px",
    gridAutoFlow: "column",
    padding: "25px 10px",
    listStyle: "none",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
  },
  anotherContainer: {
    maxWidth: "1400px",
    padding: "0 15px",
    margin: "0 auto",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
  },
  imageBG:{
    backgroundColor: "#EBEDFF",
    borderRadius: "50%",
    height:"100px" ,
    width:"100px",

  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ["100%", 450, 550, 350, 500, 570],
    pr: [0, null, "auto", null, null, 80],
    pl: "auto",
    flexShrink: 0,
  },
  button: {
    backgroundColor: "#93C1F9",
    width: "100%",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headingTop: {
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  image: {
    borderRadius: "16px 16px 0 0",
  },
  cardText: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#596AFF",
    width: "100%",
    textAlign: "center",
    borderRadius: "0 0px 4px 4px",
    fontSize: "18px",
    color: "white",
    fontWeight: "bold",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    minWidth: "400px",
    minHeight:"430px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: " 0 5px 15px rgba(0, 0, 0, 15%)",
    scrollSnapAlign: "start",
    transition: "all 0.2s",
    
  },
  cardHeading:{
    fontSize: "24px",
    fontWeight: "600",
    color: "#272D4E",
    textAlign: "center",
    letterSpacing: "0.5px",
  },
  cardPara:{
    fontSize: "16px",
    fontWeight: "400",
    color: "#7D7987",
    margin: "0",
  },
  img: {
    width: ["50px", null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
