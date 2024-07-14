import VideoCard from "./VideoCard";

const imgSrc = "https://img.youtube.com/vi/BL3XKpf2REo/maxresdefault.jpg";
const channelImg =
  "https://yt3.googleusercontent.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s160-c-k-c0x00ffffff-no-rj";

const VIDEOS = [
  {
    title: "Delhi Meetup Cohort 3.0",
    author: "Krish Patel",
    views: "1.2M Views",
    date: "2 Days ago",
    image: imgSrc,
    thumbImage: channelImg,
  },
  {
    title: "Delhi Meetup Cohort 3.0",
    author: "Krish Patel",
    views: "1.2M Views",
    date: "2 Days ago",
    image: imgSrc,
    thumbImage: channelImg,
  },
  {
    title: "Delhi Meetup Cohort 3.0",
    author: "Krish Patel",
    views: "1.2M Views",
    date: "2 Days ago",
    image: imgSrc,
    thumbImage: channelImg,
  },
  {
    title: "Delhi Meetup Cohort 3.0",
    author: "Krish Patel",
    views: "1.2M Views",
    date: "2 Days ago",
    image: imgSrc,
    thumbImage: channelImg,
  },
];

export const VideoGrid = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            author={video.author}
            views={video.views}
            date={video.date}
            image={video.image}
            thumbImage={video.thumbImage}
          />
        ))}
      </div>
    );
  }