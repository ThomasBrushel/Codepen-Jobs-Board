import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Header from './components/Header';
import AtomHeading from './components/AtomHeading';
import AtomCopy from './components/AtomCopy';
import AtomLink from './components/AtomLink';

function App() {
  const [data, setData] = useState({jobs: [] });

  const fetchData = async () => {
    const result = await axios(
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
          {data.jobs.map(item =>(
          <div className="card">
            <div key={item.hashid}>
              <AtomHeading text={item.company_name}/>
              <AtomCopy text={item.title}/>
              <AtomCopy text={item.featured_text}/>
              <AtomLink href={item.url} text="View Job" target="_blank"/>
            </div>
          </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;