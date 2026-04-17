import Image from "next/image";
import { AppLink } from "@/components/UI/Button/Button";
import heroBg from "@/public/images/hero-bg.webp";
import css from "./page.module.css";

const HomePage = () => {
  return (
    <section className={css.hero}>
      <Image
        src={heroBg}
        alt="Maverick camper on a sunset backdrop"
        placeholder="blur"
        quality={100}
        fill
        priority
        sizes="100vw"
        className={css.imageBg}
      />

      <div className={css.overlay} />

      <div className={`container ${css.heroContainer}`}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.subtitle}>
          You can find everything you want in our catalog
        </p>
        <AppLink href="/catalog" className={css.heroBtn}>
          View Now
        </AppLink>
      </div>
    </section>
  );
};

export default HomePage;
