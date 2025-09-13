import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { 
  Page1, Page2, Page3, Page4, Page5,
  Page6, Page7, Page8, Page9, Page10,
  Page11, Page12
} from './pages';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayInterval = useRef(null);
  const audioFiles = [
    '/audios/Love Story.mp3',
    '/audios/M5000008aOkA3v4X0Q.mp3',
    '/audios/SG Wannabe - Wedding.mp3'
  ];
  const [currentTrack, setCurrentTrack] = useState(0);

  const pages = [
    Page1, Page2, Page3, Page4, Page5,
    Page6, Page7, Page8, Page9, Page10,
    Page11, Page12
  ];

  // 初始化背景音乐
  useEffect(() => {
    if (audioFiles.length > 0) {
      const bgAudio = new Audio(audioFiles[currentTrack]);
      bgAudio.loop = false;
      
      // 监听音乐播放完毕事件，自动播放下一首
      bgAudio.addEventListener('ended', () => {
        setCurrentTrack(prev => (prev + 1) % audioFiles.length);
      });
      
      setAudio(bgAudio);
      
      // 尝试自动播放（可能受浏览器限制）
      const tryAutoPlay = () => {
        bgAudio.play()
          .then(() => {
            setIsMusicPlaying(true);
          })
          .catch(e => {
            console.log("自动播放被阻止，需要用户交互:", e);
          });
      };
      
      // 延迟尝试自动播放
      const autoPlayTimer = setTimeout(tryAutoPlay, 1000);
      
      return () => {
        clearTimeout(autoPlayTimer);
        bgAudio.pause();
        bgAudio.removeEventListener('ended', () => {});
      };
    }
  }, [currentTrack]);

  // 自动播放幻灯片
  useEffect(() => {
    if (isAutoPlay && currentSlide < pages.length - 1) {
      autoPlayInterval.current = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }, 5000); // 每5秒自动切换
    } else {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isAutoPlay, currentSlide, pages.length]);

  const toggleMusic = () => {
    if (audio) {
      if (isMusicPlaying) {
        audio.pause();
      } else {
        // 播放当前歌曲
        audio.play()
          .then(() => {
            setIsMusicPlaying(true);
          })
          .catch(e => {
            // 如果当前歌曲播放失败，尝试创建新的Audio对象播放
            const newAudio = new Audio(audioFiles[currentTrack]);
            newAudio.loop = false;
            
            newAudio.addEventListener('ended', () => {
              setCurrentTrack(prev => (prev + 1) % audioFiles.length);
            });
            
            newAudio.play()
              .then(() => {
                setIsMusicPlaying(true);
                setAudio(newAudio);
              })
              .catch(e => {
                console.log("播放失败:", e);
              });
          });
      }
    } else if (audioFiles.length > 0) {
      // 如果audio对象不存在，创建新的
      const newAudio = new Audio(audioFiles[currentTrack]);
      newAudio.loop = false;
      
      newAudio.addEventListener('ended', () => {
        setCurrentTrack(prev => (prev + 1) % audioFiles.length);
      });
      
      newAudio.play()
        .then(() => {
          setIsMusicPlaying(true);
          setAudio(newAudio);
        })
        .catch(e => {
          console.log("播放失败:", e);
        });
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          verticalSwiping: false,
          swipeToSlide: true,
          touchMove: true
        }
      }
    ]
  };

  return (
    <div className="app">
      <div className="music-control" onClick={toggleMusic}>
        {isMusicPlaying ? '🔊' : '🔇'}
      </div>
      <div className="autoplay-control" onClick={toggleAutoPlay}>
        {isAutoPlay ? '⏸️' : '▶️'}
      </div>
      <Slider ref={sliderRef} {...settings} className="slider-container">
        {pages.map((Page, index) => (
          <div key={index} className="page-wrapper">
            <Page />
          </div>
        ))}
      </Slider>
      <div className="page-indicator">
        {currentSlide + 1} / {pages.length}
      </div>
    </div>
  );
}

export default App;