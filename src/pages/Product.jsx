import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About Traveler</h2>
          <p>
            Traveler allows you to easily save memorable notes (memos) at your
            current location. Simply touch the map to create a log of your
            adventures, thoughts, or discoveries — right where you are. Whether
            you are exploring new cities, hiking mountains, or just marking
            special moments, Traveler helps you capture and relive your
            experiences, one touch at a time.
          </p>
        </div>
      </section>
    </main>
  );
}
