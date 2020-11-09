import React, { Component, useContext } from 'react'
import config from '../../config'
import UserContext from '../../contexts/UserContext'
import TokenService from '../../services/token-service'
import Button from '../../components/Button/Button'
import './dashboard-route.css'

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

  render() {
    let i = 0
    return (
      <section className='dashboard'>
        <div className='current-language'>
          Welcome to your {this.state.language} SRS dashboard!
        </div>
        <div className="srs-score">
          
          <br />
          Your total score: {this.state.totalScore}
          <ul>
            {this.state.words.map(w => <li key={i++}>{w.original} : {w.translation} <br /> Correct answers: {w.correct_count} <br /> Incorrect answers {w.incorrect_count}</li>)}
          </ul>
        </div>
        <Button type='button'>
          Start learning!
        </Button>
      </section>
    );
  }
}

export default DashboardRoute
