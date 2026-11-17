'use client';
import {useEffect,useRef,useState} from 'react';
import {Volume2,VolumeX} from 'lucide-react';
export default function HistoryVideo(){
 const ref=useRef<HTMLVideoElement>(null);
 const [muted,setMuted]=useState(true);
 async function toggleSound(){const video=ref.current;if(!video)return;const next=!video.muted;video.muted=next;setMuted(next);if(!next){video.currentTime=0;try{await video.play();}catch{}}}
 useEffect(()=>{
  const video=ref.current;if(!video)return;
  let visible=false;
  const sync=()=>{if(visible&&!document.hidden){video.play().catch(()=>{/* Playback may be limited by browser power-saving settings. */});}else{video.pause();}};
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting&&entry.intersectionRatio>=.25;sync();},{threshold:.25});
  observer.observe(video);document.addEventListener('visibilitychange',sync);
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',sync);video.pause();};
 },[]);
 return <div className="history-player"><video ref={ref} muted={muted} loop playsInline preload="metadata" poster="/images/historia-hb-poster.jpg" aria-label="A história do Centro Esportivo HB, vídeo com opção de ativar áudio" width="1280" height="640"><source src="/videos/historia-hb.mp4" type="video/mp4"/>Seu navegador não suporta vídeo. <a href="/videos/historia-hb.mp4">Assista ao vídeo da história da HB.</a></video><button type="button" className="history-audio" onClick={toggleSound} aria-label={muted?'Ativar áudio e assistir à história desde o início':'Silenciar vídeo'}>{muted?<VolumeX size={18}/>:<Volume2 size={18}/>}<span>{muted?'Ativar áudio':'Som ativado'}</span></button></div>;
}
