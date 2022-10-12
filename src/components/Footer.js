import { BoxFooter, Desarrollador, TextFooter } from "./FooterComponents";

const Footer = () => {
  return (
    <BoxFooter>
      <TextFooter>
        2021 Revolution Sport | Desarrollado por
        <Desarrollador href="https://my-portafolio-pi.vercel.app/">
          {" "}
          Aparicio Meza
        </Desarrollador>
      </TextFooter>
    </BoxFooter>
  );
};

export default Footer;
