import { Header } from "./components/Header";
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lfnd0.png',
      name: 'Luiz Fernando',
      role: 'Full-Stack Developer',
    },
    contents: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NWL Return, evento da Rocketseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content: 'lfnd0/doctorcare' },
    ],
    publishedAt: new Date('2024-02-13 20:11:34'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/luancgs.png',
      name: 'Luan Carlos',
      role: 'Back-End Developer',
    },
    contents: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NWL Return, evento da Rocketseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content: 'luancgs/doctorcare' },
    ],
    publishedAt: new Date('2024-01-17 13:22:42'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.contents}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
