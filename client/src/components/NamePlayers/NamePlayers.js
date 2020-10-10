import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

// icons
import ariel from '../../assets/players/ariel.png'
import belle from '../../assets/players/belle.png'
import carpet from '../../assets/players/carpet.png'
import cinderella from '../../assets/players/cinderella.png'
import elsa from '../../assets/players/elsa.png'
import figaro from '../../assets/players/figaro.png'
import marian from '../../assets/players/mairan.png'
import mickey from '../../assets/players/mickey.png'
import poppins from '../../assets/players/poppins.png'
import snow from '../../assets/players/snow.png'
import tiana from '../../assets/players/tiana.png'
import yoda from '../../assets/players/yoda.png'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  instructions: {
    color: '#ffffff'
  },
  input: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: 5,
    backgroundColor: '#161d22',
    display: 'inline',
  },
  head: {
    letterSpacing: 2,
    fontSize: '30px',
    textTransform: 'capitalize',
    display: 'block',
  },
}))

const NamePlayers = () => {

  const classes = useStyles()

  const [playerState, setPlayerState] = useState({
    ariel: '',
    yoda: '',
    tiana: '',
    belle: '',
    mickey: '',
    snow: '',
    cinderella: '',
    marian: '',
    figaro: '',
    carpet: '',
    poppins: '',
    elsa: '',
    user: '',
  })

  playerState.handleInputChange = (event) => {
    setPlayerState({ ...playerState, [event.target.name]: event.target.value })
    // console.log(playerState)
  }

  playerState.handleSave = event => {
    event.preventDefault()
    axios.get('/api/users/myself', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data }) => {
        let player = {
          ariel: playerState.ariel,
          yoda: playerState.yoda,
          tiana: playerState.tiana,
          belle: playerState.belle,
          mickey: playerState.mickey,
          snow: playerState.snow,
          cinderella: playerState.cinderella,
          marian: playerState.marian,
          figaro: playerState.figaro,
          carpet: playerState.carpet,
          poppins: playerState.poppins,
          elsa: playerState.elsa,
          user: data._id
        }
        console.log(player)
        axios.post('/api/players', player)
          .then(() => {
            window.location = '/home'
          })
          .catch(err => console.log(err))

      })
      .catch(err => console.log(err))

  }

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={event => event.preventDefault()}
    >
      <Typography
        variant="overline"
        className={classes.head}
      >
        Player Names
        </Typography>

      <Grid container spacing={2} alignItems="center">

        {/* Ariel */}
        <Grid item xs="50px">
          <div>
            <img src={ariel} alt="ariel" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Ariel"
            placeholder="player name"
            variant="outlined"
            name="ariel"
            value={playerState.ariel}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>

        {/* Belle */}
        <Grid item xs="50px">
          <div>
            <img src={belle} alt="belle" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Belle"
            placeholder="player name"
            variant="outlined"
            name="belle"
            value={playerState.belle}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>

        {/* carpet */}
        <Grid item xs="50px">
          <div>
            <img src={carpet} alt="carpet" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Carpet"
            placeholder="player name"
            variant="outlined"
            name="carpet"
            value={playerState.carpet}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        {/* cinderella */}
        <Grid item xs="50px">
          <div>
            <img src={cinderella} alt="cinderella" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Cinderella"
            placeholder="player name"
            variant="outlined"
            name="cinderella"
            value={playerState.cinderella}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>

        {/* elsa */}
        <Grid item xs="50px">
          <div>
            <img src={elsa} alt="elsa" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Elsa"
            placeholder="player name"
            variant="outlined"
            name="elsa"
            value={playerState.elsa}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>

        {/* figaro */}
        <Grid item xs="50px">
          <div>
            <img src={figaro} alt="figaro" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Figaro"
            placeholder="player name"
            variant="outlined"
            name="figaro"
            value={playerState.figaro}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        {/* marian */}
        <Grid item xs="50px">
          <div>
            <img src={marian} alt="marian" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Maid Marian"
            placeholder="player name"
            variant="outlined"
            name="marian"
            value={playerState.marian}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>

        {/* mickey */}
        <Grid item xs="50px">
          <div>
            <img src={mickey} alt="mickey" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Mickey"
            placeholder="player name"
            variant="outlined"
            name="mickey"
            value={playerState.mickey}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>

        {/* poppins */}
        <Grid item xs="50px">
          <div>
            <img src={poppins} alt="poppins" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Mary Poppins"
            placeholder="player name"
            variant="outlined"
            name="poppins"
            value={playerState.poppins}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        {/* snow */}
        <Grid item xs="50px">
          <div>
            <img src={snow} alt="snow" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Snow White"
            placeholder="player name"
            variant="outlined"
            name="snow"
            value={playerState.snow}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>

        {/* tiana */}
        <Grid item xs="50px">
          <div>
            <img src={tiana} alt="tiana" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Tiana"
            placeholder="player name"
            variant="outlined"
            name="tiana"
            value={playerState.tiana}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>

        {/* yoda */}
        <Grid item xs="50px">
          <div>
            <img src={yoda} alt="yoda" width="50px" />
          </div>
        </Grid>
        <Grid item xs={10} md={3} container alignItems="center">
          <TextField
            id="outlined-multiline-static"
            label="Baby Yoda"
            placeholder="player name"
            variant="outlined"
            name="yoda"
            value={playerState.yoda}
            className={classes.input}
            onChange={playerState.handleInputChange}
          />
        </Grid>
      </Grid>

      <p>
        <Button variant="contained" color="primary" onClick={playerState.handleSave}>Save</Button>
      </p>
    </form >
  )
}

export default NamePlayers
