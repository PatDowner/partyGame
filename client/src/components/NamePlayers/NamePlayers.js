import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '75%',
    },
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

const BuildProfile = () => {

  const classes = useStyles()

  const [playerState, setPlayerState] = useState({
    playerExists: false,
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

  useEffect(() => {

    // get player corresponding to user if any, if not, build profile
    axios.get('/api/users/players', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data }) => {

        setPlayerState({
          ...playerState,
          playerExists: true,
          ariel: data.ariel,
          yoda: data.yoda,
          tiana: data.tiana,
          belle: data.belle,
          mickey: data.mickey,
          snow: data.snow,
          cinderella: data.cinderella,
          marian: data.marian,
          figaro: data.figaro,
          carpet: data.carpet,
          poppins: data.poppins,
          elsa: data.elsa,
          username: data.user.username
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
          username: playerState.user.username,
          user: data._id
        }
        console.log(player)
        axios.post('/api/players', player)
          .then(() => {
            window.location = '/matches'
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

      <Grid key="Username" item xs={12} elevation={5}>
        <Grid item xs="40px">
          <div>
            Ariel
          </div>
        </Grid>
        <Grid item xs={10} sm={6} container alignItems="center">
          {/* Ariel */}
          <TextField
            id="outlined-multiline-static"
            label="Ariel"
            placeholder="player name"
            multiline
            rows={4}
            variant="outlined"
            name="ariel"
            value={playerState.ariel}
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

export default BuildProfile
