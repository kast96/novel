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

  const play = (targetIndex) => {
    stop();
    const newPlayers = [...players]
    newPlayers[targetIndex].playing = true
    setPlayers(newPlayers)
  }

  const stop = () => {
    const newPlayers = [...players]
    const currentIndex = players.findIndex(p => p.playing === true)
    if (currentIndex !== -1) {
      newPlayers[currentIndex].playing = false
    }
    setPlayers(newPlayers)
  }

  useEffect(() => {
    sources.forEach((source, i) => {
      if (players[i].playing) {
        source.audio.play()
      } else {
        source.audio.pause()
        source.audio.currentTime = 0;
      }
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

  return [play, stop]
}

const MultiSoundPlayer = React.memo(({urls, soundIndex}) => {
  let [sound, setSound] = useState(-1);
  
  const [play, stop] = useMultiAudio(urls);

  useEffect(() => {
    if (sound !== soundIndex) {
      setSound(soundIndex);
      if (soundIndex === -1) {
        stop();
      } else {
        play(soundIndex);
      }
    }
  }, [sound, soundIndex, setSound, play, stop])

  return (
    <div>
      
    </div>
  )
});

export default MultiSoundPlayer