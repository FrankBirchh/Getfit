import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-5">
      <div className="mx-auto w-full px-6 md:w-5/6 md:flex md:justify-between md:gap-16">
        <div className="md:flex-1 mt-0 md:mt-0">
          <img className="w-28 h-auto md:w-32" alt="logo" src={Logo} />
          <p className="my-5">
          We firmly believe in the value of personal growth and independence in one's fitness journey. Personal trainers, in our perspective, are seasonal guides. Our success is measured not by prolonged reliance, but by fostering self-sufficiency in our clients within three months. We see ourselves as catalysts in your fitness journey, igniting the spark of health-conscious transformation that permeates all aspects of life.
          </p>
          <p>© Getfit All Rights Reserved.</p>
        </div>
        <div className="md:flex-1 mt-16 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Blog</p>
          <p className="my-5">Instagram</p>
          <p>Tiktok</p>
        </div>
        <div className="md:flex-1 mt-16 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">frankbirchh@gmail.com</p>
          <p>(+65) 8752 0335</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
