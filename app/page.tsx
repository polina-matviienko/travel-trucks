import { AppLink } from "@/components/UI/Button/Button";
import css from "./page.module.css";

const HomePage = () => {
  return (
    <section className={css.hero}>
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
