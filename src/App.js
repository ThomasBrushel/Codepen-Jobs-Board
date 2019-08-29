import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Header from './components/Header';
import AtomHeading from './components/AtomHeading';
import AtomCopy from './components/AtomCopy';
import AtomLink from './components/AtomLink';
import HorizontalLine from './components/HorizontalLine';
import Loader from './components/Loader';

function App() {
  const [data, setData] = useState({jobs: [] });

  const fetchData = async () => {
    const result = await axios (
      'https://cors-anywhere.herokuapp.com/https://codepen.io/jobs.json'
    );
    setData(result.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return(
    <React.Fragment>
      <Header title="Codepen Job Board"/>
      <div className="container">
        <div className="grid">
          {data.jobs.length === 0 &&
            <div className="loading-container">
              <Loader />
            </div>
          }
          {data.jobs.map(item =>(
            <div key={item.hashid}>
              <div className="card">
                <AtomHeading text={item.title}/>
                <AtomCopy text={item.company_name}/>
                <AtomCopy text={`${item.location == null ? "" : `Location:  ${item.location}`}`}/>
                <AtomCopy text={`${item.remote === true ? `Remote Opportunity!` : ""}`} />
                <AtomCopy text={item.featured_text}/>
                <AtomLink href={item.url} text="Apply" target="_blank"/>
              </div>
              <HorizontalLine />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;