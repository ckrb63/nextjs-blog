import Image from "next/image";

const PostCard = (props: { post: Post }) => {
  const { title, description, image } = props.post;
  return <div className="postcard">
    <Image src={image} alt={title} className="postcard-image" />
    <h1 className="postcard-title">{title}</h1>
    <p className="postcard-description">{description}</p>
  </div>
};
export default PostCard;
export interface Post {
  title: string,
  id: string,
  description: string,
  image: string
};