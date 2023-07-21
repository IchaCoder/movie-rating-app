import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="flex justify-center gap-12 mb-2">
        <div>Get the Trailers app</div>
        <div>Help</div>
        <div>Site</div>
        <div>Index</div>
        <div>TheTrailersPro</div>
        <div>Box Office Mojo Developer</div>
      </div>
      <div className="flex justify-center gap-12">
        TV Room C Privacy Your Ads Privacy Choices
        <div>Advertising</div>
        <div>Jobs</div>
        <div>Conditions of Use</div>
        <div>Privacy</div>
        <div>Policy</div>
        <div>Your Ads Choices</div>
      </div>
      <div className="flex justify-center gap-8 mt-10">
        <AiOutlineTwitter className="text-4xl" />
        <AiFillLinkedin className="text-4xl" />
        <AiFillInstagram className="text-4xl" />
        <AiFillFacebook className="text-4xl" />
      </div>
      <p className="p-8 text-center">&copy; 2023, The Trailers</p>
    </footer>
  );
}
