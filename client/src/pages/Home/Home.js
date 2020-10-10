import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NamePlayers from '../../components/NamePlayers'

const Home = () => {

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

  return (
    <>
      {
        localStorage.getItem('user') ? (
          playerState.playerExists ?
            (
              <>
                Placeholder
              </>
            ) :
            <NamePlayers />
        ) : window.location = '/'
      }
    </>
  )
}

export default Home
