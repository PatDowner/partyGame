import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import NamePlayers from '../../components/NamePlayers'
import Question from '../../components/Question'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

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

let height = (window.innerHeight - 225) / 6

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  container: {
    marginTop: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    margin: theme.spacing(0.5),
    backgroundColor: '#4f5b62',
    boxShadow: theme.shadows[6],
    width: '16%',
    height: height,
    borderRadius: 5,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  number: {
    color: '#ffffff',
    fontSize: '30px',
  },
}))

const Home = () => {
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

  // show only players who we have values for
  let players = []

  if (playerState.ariel !== '') {
    players.push({
      img: ariel,
      name: playerState.ariel
    })
  }

  if (playerState.belle !== '') {
    players.push({
      img: belle,
      name: playerState.belle
    })
  }

  if (playerState.carpet !== '') {
    players.push({
      img: carpet,
      name: playerState.carpet
    })
  }

  if (playerState.cinderella !== '') {
    players.push({
      img: cinderella,
      name: playerState.cinderella
    })
  }

  if (playerState.elsa !== '') {
    players.push({
      img: elsa,
      name: playerState.elsa
    })
  }

  if (playerState.figaro !== '') {
    players.push({
      img: figaro,
      name: playerState.figaro
    })
  }

  if (playerState.marian !== '') {
    players.push({
      img: marian,
      name: playerState.marian
    })
  }

  if (playerState.mickey !== '') {
    players.push({
      img: mickey,
      name: playerState.mickey
    })
  }

  if (playerState.poppins !== '') {
    players.push({
      img: poppins,
      name: playerState.poppins
    })
  }

  if (playerState.snow !== '') {
    players.push(
      {
        img: snow,
        name: playerState.snow
      })
  }

  if (playerState.tiana !== '') {
    players.push({
      img: tiana,
      name: playerState.tiana
    })
  }

  if (playerState.yoda !== '') {
    players.push({
      img: yoda,
      name: playerState.yoda
    })
  }

  // for grid
  let nums = [
    {
      question: 1,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 2,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 3,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 4,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 5,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 6,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 7,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 8,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 9,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 10,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 11,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 12,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 13,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 14,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 15,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 16,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 17,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 18,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 19,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 20,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 21,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 22,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 23,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 24,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 25,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 26,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 27,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 28,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 29,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 30,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 31,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 32,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 33,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 34,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 35,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    },
    {
      question: 36,
      person1: 'ariel',
      person1img: ariel,
      person2: 'elsa',
      person2img: elsa,
      person3: 'tiana',
      person3img: tiana,
    }]

  console.log(players)

  // drag & drop functionality

  let isDragging = false;
  
  let number = 1

  // when you click the item
  document.addEventListener('mousedown', function (event) {

    let dragElement = event.target.closest('.draggable').cloneNode(true)

    dragElement.id = "newId"+number
    number++
    
    if (!dragElement) return;

    event.preventDefault();

    dragElement.ondragstart = function () {
      return false;
    };

    let coords, shiftX, shiftY;

    startDrag(dragElement, event.clientX, event.clientY);

    function onMouseUp(event) {
      finishDrag();
    };

    function onMouseMove(event) {
      moveAt(event.clientX, event.clientY);
    }

    // on drag start:
    //   remember the initial shift
    //   move the element position:fixed and a direct child of body
    function startDrag(element, clientX, clientY) {
      if (isDragging) {
        return;
      }

      isDragging = true;

      document.addEventListener('mousemove', onMouseMove);
      element.addEventListener('mouseup', onMouseUp);

      shiftX = clientX - element.getBoundingClientRect().left;
      shiftY = clientY - element.getBoundingClientRect().top;

      element.style.position = 'fixed';

      moveAt(clientX, clientY);
    };

    // switch to absolute coordinates at the end, to fix the element in the document
    function finishDrag() {
      if (!isDragging) {
        return;
      }

      isDragging = false;

      dragElement.style.top = parseInt(dragElement.style.top) + window.pageYOffset + 'px';
      dragElement.style.position = 'absolute';

      document.removeEventListener('mousemove', onMouseMove);
      dragElement.removeEventListener('mouseup', onMouseUp);
    }

    function moveAt(clientX, clientY) {
      // new window-relative coordinates
      let newX = clientX - shiftX;
      let newY = clientY - shiftY;

      // check if the new coordinates are below the bottom window edge
      let newBottom = newY + dragElement.offsetHeight; // new bottom

      // below the window? let's scroll the page
      if (newBottom > document.documentElement.clientHeight) {
        // window-relative coordinate of document end
        let docBottom = document.documentElement.getBoundingClientRect().bottom;

        // scroll the document down by 10px has a problem
        // it can scroll beyond the end of the document
        // Math.min(how much left to the end, 10)
        let scrollY = Math.min(docBottom - newBottom, 10);

        // calculations are imprecise, there may be rounding errors that lead to scrolling up
        // that should be impossible, fix that here
        if (scrollY < 0) scrollY = 0;

        window.scrollBy(0, scrollY);

        // a swift mouse move make put the cursor beyond the document end
        // if that happens -
        // limit the new Y by the maximally possible (right at the bottom of the document)
        newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
      }

      // check if the new coordinates are above the top window edge (similar logic)
      if (newY < 0) {
        // scroll up
        let scrollY = Math.min(-newY, 10);
        if (scrollY < 0) scrollY = 0; // check precision errors

        window.scrollBy(0, -scrollY);
        // a swift mouse move can put the cursor beyond the document start
        newY = Math.max(newY, 0); // newY may not be below 0
      }


      // limit the new X within the window boundaries
      // there's no scroll here so it's simple
      if (newX < 0) newX = 0;
      if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
        newX = document.documentElement.clientWidth - dragElement.offsetWidth;
      }

      dragElement.style.left = newX + 'px';
      dragElement.style.top = newY + 'px';
    }

  });

  return (
    <div className={classes.root}>
      {
        localStorage.getItem('user') ? (
          playerState.playerExists ?
            (
              <>
                {players.map(player => (
                  <>
                    <img src={player.img} width="40px" float="left" cursor="pointer" className="draggable" />
                    {player.name}
                  </>
                ))}

                <Grid container spacing={2} className={classes.container}>
                  {nums.map(num => (
                    <Grid item className={classes.grid}>
                      <Question question={num} />
                    </Grid>
                  ))}
                </Grid>
              </>
            ) :
            <NamePlayers />
        ) : window.location = '/'
      }
    </div>
  )
}

export default Home
