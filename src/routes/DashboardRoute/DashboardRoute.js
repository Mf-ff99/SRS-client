import React, { Component, useContext } from 'react'
import config from '../../config'
// import UserContext from '../../contexts/UserContext'
import TokenService from '../../services/token-service'
import Button from '../../components/Button/Button'
import './dashboard-route.css'
import { Link } from 'react-router-dom'

class DashboardRoute extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      language: "",
      words: [],
      totalScore: 0,
    }
  }

  // static context = React.useContext(UserContext)

  setLangValues = (langVals) => {
    // this.context.setLang(langVals => language: langVals.words)
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ language: data.language.name })
        this.setState({ words: data.words })
        this.setState({ totalScore: data.language.total_score })
        console.log(this.state.words)
      })
  }

  countTotalCorrectAnswers = (words) => {
    words.map(w => console.log(w.correct_count))
  }

  render() {
    let i = 0
    this.countTotalCorrectAnswers(this.state.words)
    return (
      <section className='dashboard'>
        <div className='current-language'>
          <h2>
          Welcome to your {this.state.language} SRS dashboard!
          </h2>
        </div>
        <div className="srs-score">
          
          <br />
          Total correct answers: {this.state.totalScore}
          <br />
          {/* Your total correct answers: {this.state.words} */}
          <span className='card-header'><h3>Words to practice</h3></span>
          <ul>
            {this.state.words.map(w => <li key={i++}><h4>{w.original}</h4>  : {w.translation} <br /> correct answer count: {w.correct_count} <br /> incorrect answer count: {w.incorrect_count}</li>)}
          </ul>
        </div>
        <Link to='/learn'>

        <Button type='button'>
          Start practicing
        </Button>
        </Link>
      </section>
    ) 
  }
}

export default DashboardRoute
