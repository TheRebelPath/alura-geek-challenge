import headerimage from "../assets/headerimage.png";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-primary-purple w-full h-40 bottom-0 left-0">
      <div className="leading-6">
        <img src={headerimage} alt="footer-image" />
        <p className="text-center text-white">
          DESARROLADO POR RODRIGO YANEZ FLORES{" "}
        </p>
        <p className="text-center text-gray-300">ALURA LATAM- 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
