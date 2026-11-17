'use client';
import {useEffect} from 'react';
/** Enhance visible content without hiding it when scripts or animations are unavailable. */
export default function ScrollReveal(){
 useEffect(()=>{
  const media=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(media.matches||!('IntersectionObserver' in window)||!Element.prototype.animate)return;
  const animations=new Set<Animation>();
  const observer=new IntersectionObserver(entries=>{
   for(const entry of entries){
    if(!entry.isIntersecting)continue;
    observer.unobserve(entry.target);
    if(media.matches)continue;
    const el=entry.target as HTMLElement;
    const index=el.classList.contains('match')?Array.from(el.parentElement?.children||[]).indexOf(el):0;
    const animation=el.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,delay:Math.min(index*90,180),easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'});
    animations.add(animation);animation.finished.then(()=>animations.delete(animation)).catch(()=>animations.delete(animation));
   }
  },{threshold:.08,rootMargin:'0px 0px -25px 0px'});
  document.querySelectorAll('.matches .section-head,.matches .filters,.match,.history-heading,.history-player,.squad-heading,.squad-arena,.enrollment .formbox,.footer-main').forEach(el=>observer.observe(el));
  const stop=()=>{if(media.matches){observer.disconnect();animations.forEach(a=>a.cancel());animations.clear();}};
  media.addEventListener('change',stop);
  return()=>{observer.disconnect();media.removeEventListener('change',stop);animations.forEach(a=>a.cancel());};
 },[]);
 return null;
}
