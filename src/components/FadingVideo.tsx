import React, { useEffect, useRef, useState } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55; // seconds

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);

  const fadeTo = (target: number, duration: number) => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    
    const video = videoRef.current;
    if (!video) return;

    const startOpacity = parseFloat(video.style.opacity) || 0;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentOpacity = startOpacity + (target - startOpacity) * progress;
      video.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      } else {
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);
  };

  const handleLoadedData = () => {
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = '0';
    video.play().catch(() => {});
    fadeTo(1, FADE_MS);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || fadingOutRef.current) return;

    const timeLeft = video.duration - video.currentTime;
    if (timeLeft <= FADE_OUT_LEAD && timeLeft > 0) {
      fadingOutRef.current = true;
      fadeTo(0, FADE_MS);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.style.opacity = '0';
    setTimeout(() => {
      video.currentTime = 0;
      video.play().catch(() => {});
      fadingOutRef.current = false;
      fadeTo(1, FADE_MS);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ ...style, opacity: 0 }}
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
}
