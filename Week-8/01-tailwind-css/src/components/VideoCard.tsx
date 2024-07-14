const imgSrc = "https://img.youtube.com/vi/BL3XKpf2REo/maxresdefault.jpg";

export default function VideoCard(props: any) {
  return ( 
    <div>
      <img src={imgSrc} className="rounded-xl" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 pl-5">
          <img className="rounded-full w-24 h-24" src={imgSrc} alt="Video" />
        </div>
        <div className="col-span-11 p-5">
          <div>{props.videoTitle}</div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11  text-gray-400 text-base">
            {props.views} | {props.date}
          </div>
        </div>
      </div>
    </div>
  );
}
