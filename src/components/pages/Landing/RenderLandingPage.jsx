import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      {/*
       1. This Section in particular is odd, they don't, and aren't expected to, behave like links.
       2. They almost ring like they are features? Which, technically, they are, but the images asso-
       ciating with them are misleading, aside from the line graph.
       3. The finished product doesn't have this feature, so I'll omit it for now. A quick check shows
       that there are reachable destinations for all of these, so I might implement them. TBD
      */}
      <div className="graphs-section">
        <div className="grant-rate-office">
          <img className="graph-img" src={GrantRatesByOfficeImg} alt="graphs" />
          <strong className="graph-text">Search Grant Rates By Office</strong>
        </div>
        <div className="grant-rate-nationality">
          <img
            className="graph-img"
            src={GrantRatesByNationalityImg}
            alt="pie chart"
          />
          <strong className="graph-text">
            Search Grant Rates By Nationality
          </strong>
        </div>
        <div className="grant-rate-time">
          <img
            className="graph-img"
            src={GrantRatesOverTimeImg}
            alt="line graph"
          />
          <strong className="graph-text">Search Grant Rates Over Time</strong>
        </div>
      </div>
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        {/* not great, just don't want to mess with the css TOO much */}
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => console.log('time to download!')}
        >
          Download the Data
        </Button>{' '}
        {/* invokes a download? */}
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div className="bottom-container">
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        <div className="bottom-section">
          <strong className="bottom-strong">Systemic Disparity Insights</strong>
          <div className="bottom-explanation">
            <div className="bottom-section">
              <h2 className="bottom-percent">36%</h2>
              <h3 className="bottom-text">
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020.
              </h3>
            </div>
            <div className="bottom-section">
              <h2 className="bottom-percent">5%</h2>
              <h3 className="bottom-text">
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </h3>
            </div>
            <div className="bottom-section">
              <h2 className="bottom-percent">6x Lower</h2>
              <h3 className="bottom-text">
                Between fiscal year 2017 and 2020, the New York asylum office's
                average grant rate was six times lower than the San Francisco
                asylum office.
              </h3>
            </div>
          </div>
        </div>
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
