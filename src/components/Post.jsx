import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/lfnd0.png" />

          <div className={styles.authorInfo}>
            <strong>Luiz Fernando</strong>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        <time
          title='12 de fevereiro de 2024 às 21:19h'
          dateTime='2022-02-12 21:19:32'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera!</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NWL Return, evento da Rocketseat. O nome do projeto é DoctorCare.</p>
        <p><a href="">lfnd0/doctorcare</a></p>
        <p>
          <a href="">#nlw</a>{' '}
          <a href="">#novoprojeto</a>{' '}
          <a href="">#rockeseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
