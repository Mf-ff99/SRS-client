import React, { Component } from "react";

const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
  headWord: {},
  setError: () => {},
  setWords: () => {},
  setLanguage: () => {},
  setHeadWord: () => {},
  setResponse: () => {},
  setGuess: () => {},
  guess: '',
  response: {}
});

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: {},
    words: [],
    error: null,
    headWord: {},
    guess: '',
    response: {}
  }

  setLanguage = language => {
    this.setState({ language: language })
  }

  setWords = words => {
    this.setState({ words: words })
  }

  setError = error => {
    console.error(error);
    this.setState({ error: error })
  }

  setHeadWord = headWord => {
    this.setState({ headWord: headWord })
  }

  setResponse = response => {
    this.setState({ response: response })
  }

  setGuess = guess => {
    this.setState({ guess })
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      error: this.state.error,
      setError: this.setError,
      setWords: this.setWords,
      setLanguage: this.setLanguage,
      headWord: this.state.headWord,
      setHeadWord: this.setHeadWord,
      guess: this.state.guess,
      setGuess: this.setGuess,
      response: this.state.response,
      setResponse: this.setResponse
    };
    
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}