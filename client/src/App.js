import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import Container from '@material-ui/core/Container'



class DisplayPad extends Component {
  state = {
    val: "",
    res: "",
    error: null
  }


  changeHandler = async(e) => {
   await this.setState({
      val: [...this.state.val, e.target.name]

    }
    )
    if (this.state.res !== "") {
      this.setState({
        res: ""
      })
    }
  }

  fun = () => {
    this.setState({
      val: "",
    })
  }

  onSubmit1 = async (e) => {
    e.preventDefault()
    let val2
    const val1 = this.state.val
    if (val1 !== "")
      val2 = val1.join("")

    else
      val2 = val1

    // console.log(val2)
    await axios.get("http://localhost:7000/superheros/" + val2, {
      'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    }).then((resp) => {
      this.setState({
        res: resp.data

      })
    }, (error) => {
      this.setState({
        res: `Please enter "0 <space> the correct superhero name" for help!!!`
      })
    })
    this.fun()
  }






  render() {

    var post
// console.log(this.state.val)
    post = this.state.res
   

    return (
      <div>
        <Container style={{paddingLeft:"13%"}} >
          <br/>
          <br/>
          <button name="1" onClick={(e) => this.changeHandler(e)} className="button">1 <br /> .@?</button>
          <button name="2" onClick={(e) => this.changeHandler(e)} className="button" value="2">2 <br /> ABC</button>
          <button name="3" onClick={(e) => this.changeHandler(e)} className="button">3 <br /> DEF</button>
          <br />
          <button name="4" onClick={(e) => this.changeHandler(e)} className="button">4 <br /> GHI</button>
          <button name="5" onClick={(e) => this.changeHandler(e)} className="button">5 <br />JKL</button>
          <button name="6" onClick={(e) => this.changeHandler(e)} className="button">6<br />MNO</button>
          <br />
          <button name="7" onClick={(e) => this.changeHandler(e)} className="button">7 <br />PQRS</button>
          <button name="8" onClick={(e) => this.changeHandler(e)} className="button">8<br />TUV</button>
          <button name="9" onClick={(e) => this.changeHandler(e)} className="button">9<br />WXYZ</button>
          <br />
          <button onClick={(e) => { this.onSubmit1(e) }} className="button" style={{border: "1px solid white"}} >* <br/> <span style={{color:"grey"}}>send</span> </button>
          <button name="0" onClick={(e) => this.changeHandler(e)} className="button" >0 <br /> Zero </button>
          <button name=" " onClick={(e) => this.changeHandler(e)} className="button" style={{border: "1px solid white"}}># <br /><span style={{color:"grey",hover:"red"}} className="span"> space </span></button>
        </Container>
        <div className="div">
        <br/>
          {post}

        </div>
      </div>
    )
  }
}

export default DisplayPad;
