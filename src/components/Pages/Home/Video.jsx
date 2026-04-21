import React, { useRef, useState } from "react";
import video from "/public/video/media-clicking.mp4";
import { GoMute, GoUnmute } from "react-icons/go";

const Video = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const vid = videoRef.current;
    vid.muted = !vid.muted;
    setMuted(vid.muted);
  };
  return (
    <div>
      <section className="relative">
        <video
          src={video}
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full max-h-screen object-cover"
        ></video>
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 text-xl hover:text-2xl border-2 border-white text-white bg-black/70 hover:bg-[#800080]/90 transition-all duration-400 ease-in-out rounded-full p-3 shadow-md"
        >
          {muted ? <GoUnmute /> : <GoMute />}
        </button>
      </section>
    </div>
  );
};

export default Video;
