import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/lfnd0.png" />

          <div className={styles.authorInfo}>
            <strong>Luiz Fernando</strong>
            <span>Full-stack developer</span>
          </div>

          <time title='24 de outubro de 2022' dateTime='2022-10-24'>Publicado há 1h</time>
        </div>

        <div className={styles.content}>
          <p>Fala galera!</p>

          <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NWL Return, evento da Rocketseat. O nome do projeto é DoctorCare.</p>

          <p><a href="">lfnd0/doctorcare</a></p>

          <p><a href="">#nlw #novoprojeto #rockeseat</a></p>
        </div>
      </header>
    </article>
  )
}
