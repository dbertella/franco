import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'

const AppHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Bar = styled.div`
  display: flex;
  align-items: center;
  margin: 50px auto;
  height: 30px;
  width: ${props => props.width}px;
  background: #777;
`

const Section = styled.div`
  width: ${props => props.width}px;
  height: 30px;
  background: #333;
`

const Disc = styled.div`
  height: 45px;
  width: ${props => props.width}px;
  background: #777;
`

const DEFAULT_WIDTH = 1200
const DEFAULT_NUMBER = 8
const DEFAULT_DISK = 5

const fillWithEqualSpace = (barWidth, sectionsNumber) => {
  const sectionWidth = barWidth / sectionsNumber
  return [
    ...Array(sectionsNumber).fill({
      width: sectionWidth,
    }),
  ]
}

class App extends Component {
  state = {
    barWidth: DEFAULT_WIDTH,
    sectionsNumber: DEFAULT_NUMBER,
    diskWidth: DEFAULT_DISK,
    sections: fillWithEqualSpace(DEFAULT_WIDTH, DEFAULT_NUMBER),
  }

  componentDidMount() {
    // Qui ci scrivi il tuo codice
    var a = 'Franco inizia a sviluppare'
    var b = 2 + 3
    console.log(a, b)
  }

  handleChange = e => {
    const { value, name } = e.target
    const number = parseInt(value, 10)
    this.setState(
      {
        [name]: number,
      },
      () => {
        const { barWidth, sectionsNumber } = this.state
        this.setState({
          sections: fillWithEqualSpace(barWidth, sectionsNumber),
        })
      }
    )
  }

  render() {
    const { barWidth, sectionsNumber, diskWidth, sections } = this.state

    return (
      <div className="App">
        <AppHeader>
          <div>
            <label>Lunghezza barra: </label>
            <input
              type="number"
              name="barWidth"
              value={barWidth}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Numero di segmenti: </label>
            <input
              type="number"
              name="sectionsNumber"
              value={sectionsNumber}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Larghezza disco: </label>
            <input
              type="number"
              name="diskWidth"
              value={diskWidth}
              onChange={this.handleChange}
            />
          </div>
        </AppHeader>
        <Bar width={barWidth}>
          {sections.map((section, i) => (
            <React.Fragment key={i}>
              <Section width={section.width} />
              {i < sectionsNumber - 1 && <Disc width={diskWidth} />}
            </React.Fragment>
          ))}
        </Bar>

        <p>Lunghezza barra: {barWidth}</p>
        <p>Numero sezioni: {sectionsNumber}</p>
        <p>Lunghezza sezioni: {((barWidth - ((sectionsNumber - 1) * diskWidth)) / sectionsNumber).toFixed(4)}</p>
        <p>Lunghezza base disco: {diskWidth}</p>
      </div>
    )
  }
}

export default App
