import React, { useState, useEffect } from 'react'

const useMultiAudio = urls => {
  const [sources] = useState(
    urls.map(url => {
      return {
        url,
        audio: new Audio(url),
      }
    }),
  )

  const [players, setPlayers] = useState(
    urls.map(url => {
      return {
        url,
        playing: false,
      }
    }),
  )

  const toggle = (targetIndex) => {
    const newPlayers = [...players]
    const currentIndex = players.findIndex(p => p.playing === true)
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false
      newPlayers[targetIndex].playing = true
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false
    } else {
      newPlayers[targetIndex].playing = true
    }
    setPlayers(newPlayers)
  }

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause()
    })
  }, [sources, players])

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener('ended', () => {
        const newPlayers = [...players]
        newPlayers[i].playing = false
        setPlayers(newPlayers)
      })
    })
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener('ended', () => {
          const newPlayers = [...players]
          newPlayers[i].playing = false
          setPlayers(newPlayers)
        })
      })
    }
  }, [sources, players])

  return [players, toggle]
}

const MultiSoundPlayer = React.memo(({urls, soundIndex}) => {
  let [sound, setSound] = useState(-1);
  
  const [players, toggle] = useMultiAudio(urls);

  useEffect(() => {
    if (sound !== soundIndex) {
      setSound(soundIndex);
      toggle(soundIndex);
    }
  }, [sound, soundIndex, setSound, toggle])

  return (
    <div style={{position: 'absolute', zIndex: 1000, top: "200px"}}>
      {players.map((player, i) => (
        <Player key={i} player={player} toggle={toggle.bind(this, i)} />
      ))}
    </div>
  )
});

const Player = ({ player, toggle }) => (
  <div>
    <p>Stream URL: {player.url}</p>
    <button onClick={toggle}>{player.playing ? 'Pause' : 'Play'}</button>
  </div>
)


export default MultiSoundPlayer