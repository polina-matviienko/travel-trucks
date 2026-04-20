import Image from "next/image";
import { AppLink } from "@/components/UI/Button/Button";
import heroBg from "@/public/images/hero-bg.webp";
import css from "./page.module.css";

const HomePage = () => {
  return (
    <main>
      <section className={`container ${css.hero}`}>
        <Image
          src={heroBg}
          alt="Maverick camper on a sunset backdrop"
          fill
          priority
          sizes="100vw"
          className={css.imageBg}
        />
        <div className={css.overlay} />

        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.subtitle}>
            You can find everything you want in our catalog
          </p>
          <AppLink href="/catalog" className={css.heroBtn}>
            View Now
          </AppLink>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
