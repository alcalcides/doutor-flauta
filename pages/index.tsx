import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doutor Flauta</title>
        <meta name="description" content="Plano de estudos para flauta doce." />
      </Head>
      <main>
        <h1>
          Doutor Flauta
        </h1>

        <p>
          Roteiro de estudos para flauta doce
        </p>

        <p>Assista aos vídeos diariamente acessando a <a href='https://www.youtube.com/playlist?list=PLuB5Wt4fvjZn-_O4jCS1H27_63NAMTYeZ'>playlist de videoaulas</a> e depois faça os exercícios a seguir.</p>

        <ol>
          <li><a href='https://forms.gle/APwSmAJ3LrCKrnog9'> Exercício de Videoaulas de Música 01 Figuras de Notas</a></li>
          <li><a href='https://forms.gle/KdKRgRNq57KXmfL6A'> Exercício de Videoaulas de Música 02 As Notas no Pentagrama</a></li>
          <li><a href='https://forms.gle/595a46NThGVhUwZMA'> Exercício de Videoaula de Música 03 Durações das Figuras de Notas</a></li>
          <li><a href='https://forms.gle/dR24BRqLqSMn4deY8'> Exercício de Videoaula de Música 03 parte 2 Durações das Figuras de Notas</a></li>
          <li className={styles.inactive}>Exercício de Videoaula de música 04 Entendendo a Partitura</li>
          <li className={styles.inactive}>Exercício de Teoria Musical Aula 01 - Método prático, rápido e fácil.</li>
          <li className={styles.inactive}>Exercício de Aula de música Teoria Musical Aula 02 Figuras de Sons Colcheias e Semicolcheias</li>
          <li className={styles.inactive}>Exercício de Aula de música Teoria Musical Aula 03 Figuras de Pausas</li>
          <li className={styles.inactive}>Exercício de Pausa da Semicolcheia Teoria Musical Método Prático AULA 05</li>
          <li className={styles.inactive}>Exercício de Ponto de Aumento Teoria Musical Aula 06</li>
          <li className={styles.inactive}>Exercício de Ligadura Teoria Musical AULA 07</li>
          <li className={styles.inactive}>Exercício de Tipos de Compasso Teoria Musical</li>
          <li className={styles.inactive}>Exercício de TEORIA MUSICAL Aula 10 Sustenidos e Bemois</li>
          <li className={styles.inactive}>Exercício de Pozzoli Rítmico - 1ª Série - 2/4</li>
          <li className={styles.inactive}>Exercício de Pozzoli Rítmico - 1ª Série - 3/4</li>
          <li className={styles.inactive}>Exercício de Pozzoli Rítmico - 1ª Série - 4/4</li>
          <li className={styles.inactive}>Exercício de Pozzoli Rítmico - 2ª Série - 2/4</li>
          <li className={styles.inactive}>Exercício de Pozzoli Rítmico - 2ª Série - 3/4</li>
          <li className={styles.inactive}>Exercício de Pozzoli Rítmico - 2ª Série - 4/4</li>
        </ol>

      </main>

      <footer>
        <p>@alcalcides</p>
      </footer>

    </div>
  )
}
