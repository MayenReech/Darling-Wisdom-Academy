import { useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'

interface YouTubePlayer {
  destroy: () => void
  getPlayerState: () => number
  mute: () => void
  pauseVideo: () => void
  playVideo: () => void
  unMute: () => void
}

interface YouTubeApi {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string
      playerVars: Record<string, string | number>
      events: {
        onReady: (event: { target: YouTubePlayer }) => void
        onStateChange: (event: { data: number; target: YouTubePlayer }) => void
        onError: (event: { data: number }) => void
        onAutoplayBlocked: () => void
      }
    },
  ) => YouTubePlayer
  PlayerState: {
    PLAYING: number
    PAUSED: number
    ENDED: number
  }
}

declare global {
  interface Window {
    YT?: YouTubeApi
    onYouTubeIframeAPIReady?: () => void
  }
}

const videoId = 'iIVRdDBCVMc'
let youtubeApiPromise: Promise<YouTubeApi> | undefined

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (youtubeApiPromise) return youtubeApiPromise

  youtubeApiPromise = new Promise<YouTubeApi>((resolve, reject) => {
    const previousCallback = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.()
      if (window.YT?.Player) resolve(window.YT)
      else reject(new Error('The YouTube player API did not initialize.'))
    }

    const script = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.youtube.com/iframe_api"]',
    )
    if (script) {
      script.addEventListener('error', () => reject(new Error('The YouTube player API failed to load.')), {
        once: true,
      })
      return
    }

    const newScript = document.createElement('script')
    newScript.src = 'https://www.youtube.com/iframe_api'
    newScript.async = true
    newScript.onerror = () => reject(new Error('The YouTube player API failed to load.'))
    document.head.append(newScript)
  })

  return youtubeApiPromise
}

export function SchoolVideo({ headingId }: { headingId: string }) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const playerHostRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<YouTubePlayer | null>(null)
  const inViewRef = useRef(false)
  const reducedMotionRef = useRef(false)
  const manualPauseRef = useRef(false)
  const automaticPauseRef = useRef(false)
  const manualStartRef = useRef(false)
  const playTimeoutRef = useRef<number | undefined>(undefined)
  const prefersReducedMotion = Boolean(useReducedMotion())
  const [isInView, setIsInView] = useState(false)
  const [playerReady, setPlayerReady] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [playbackBlocked, setPlaybackBlocked] = useState(false)

  reducedMotionRef.current = prefersReducedMotion

  const clearPlayTimeout = useCallback(() => {
    if (playTimeoutRef.current !== undefined) {
      window.clearTimeout(playTimeoutRef.current)
      playTimeoutRef.current = undefined
    }
  }, [])

  const startPlayback = useCallback(
    (manual = false) => {
      const player = playerRef.current
      if (!player) {
        manualStartRef.current = manual
        return
      }

      if (manual) {
        manualPauseRef.current = false
        manualStartRef.current = true
      }

      player.mute()
      setIsMuted(true)
      setPlaybackBlocked(false)
      clearPlayTimeout()
      player.playVideo()
      playTimeoutRef.current = window.setTimeout(() => {
        if (player.getPlayerState() !== window.YT?.PlayerState.PLAYING) {
          setPlaybackBlocked(true)
        }
      }, 2500)
    },
    [clearPlayTimeout],
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.35 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let cancelled = false

    loadYouTubeApi()
      .then((youtube) => {
        if (cancelled || !playerHostRef.current) return

        const player = new youtube.Player(playerHostRef.current, {
          videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            enablejsapi: 1,
            playsinline: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => {
              if (cancelled) {
                event.target.destroy()
                return
              }
              playerRef.current = event.target
              event.target.mute()
              setPlayerReady(true)
              if (manualStartRef.current) startPlayback(true)
            },
            onStateChange: (event) => {
              if (event.data === youtube.PlayerState.PLAYING) {
                clearPlayTimeout()
                manualPauseRef.current = false
                automaticPauseRef.current = false
                manualStartRef.current = false
                setHasStarted(true)
                setPlaybackBlocked(false)
              } else if (event.data === youtube.PlayerState.PAUSED) {
                clearPlayTimeout()
                if (automaticPauseRef.current) automaticPauseRef.current = false
                else if (inViewRef.current) manualPauseRef.current = true
              } else if (event.data === youtube.PlayerState.ENDED) {
                clearPlayTimeout()
                manualPauseRef.current = true
              }
            },
            onError: () => {
              clearPlayTimeout()
              setPlaybackBlocked(true)
            },
            onAutoplayBlocked: () => {
              clearPlayTimeout()
              setPlaybackBlocked(true)
            },
          },
        })

        playerRef.current = player
      })
      .catch((error: unknown) => {
        console.error('Unable to load the Darling Wisdom Academy YouTube video.', error)
        if (!cancelled) setPlaybackBlocked(true)
      })

    return () => {
      cancelled = true
      clearPlayTimeout()
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [clearPlayTimeout, startPlayback])

  useEffect(() => {
    if (!playerReady) return

    const player = playerRef.current
    if (!player) return

    if (isInView && !prefersReducedMotion && !manualPauseRef.current) {
      startPlayback()
    } else if (!isInView) {
      clearPlayTimeout()
      const playerState = player.getPlayerState()
      if (playerState !== window.YT?.PlayerState.PAUSED && playerState !== window.YT?.PlayerState.ENDED) {
        automaticPauseRef.current = true
        player.pauseVideo()
      }
    }
  }, [clearPlayTimeout, isInView, playerReady, prefersReducedMotion, startPlayback])

  const toggleSound = () => {
    const player = playerRef.current
    if (!player) return
    if (isMuted) {
      player.unMute()
      setIsMuted(false)
    } else {
      player.mute()
      setIsMuted(true)
    }
  }

  return (
    <section ref={sectionRef} className="home-film-section" aria-labelledby={headingId}>
      <div className="home-film-player" aria-label="Darling Wisdom Academy school video">
        <div ref={playerHostRef} className="home-film-player-host" />
        {!hasStarted || playbackBlocked ? (
          <div className="home-film-poster">
            <img src="/images/school-hero.jpg" alt="" loading="lazy" />
            <div className="home-film-poster-shade" />
            <div className="home-film-poster-content">
              <p className="eyebrow">A glimpse of school life</p>
              <h3 id="home-film-heading">See Darling Wisdom in action</h3>
              <button
                type="button"
                className="home-film-play"
                onClick={() => startPlayback(true)}
                disabled={!playerReady}
              >
                {playerReady ? 'Play school video' : 'Loading video…'}
              </button>
              {playbackBlocked ? (
                <a
                  className="home-film-youtube-link"
                  href={`https://youtu.be/${videoId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
        {hasStarted && !playbackBlocked ? (
          <button
            type="button"
            className="home-film-sound"
            onClick={toggleSound}
            aria-label={isMuted ? 'Turn video sound on' : 'Mute video'}
          >
            {isMuted ? 'Sound off' : 'Sound on'}
          </button>
        ) : null}
      </div>
    </section>
  )
}
