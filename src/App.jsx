import { Header } from "./components/Header";
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar";

import './global.css';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post
            auth="Gunner"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nesciunt. Consequatur nostrum ad quod error odio quia, quibusdam voluptatem blanditiis nihil deleniti sapiente soluta enim vitae. Dolor quisquam ipsam optio."
          />

          <Post
            auth="Logan"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eius tempora possimus non quaerat provident sunt. Voluptatum cumque reiciendis molestias unde ipsum! Eum repellat eaque dolor labore odio ullam nisi."
          />
        </main>
      </div>

    </div>
  )
}
