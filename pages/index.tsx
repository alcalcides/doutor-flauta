import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PracticalExercise from '../components/PracticalExercise/index'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doutor Flauta</title>
        <meta name="description" content="Plano de estudos para flauta doce." />
      </Head>
      <main>
        <h1>Doutor Flauta</h1>

        <section>

          <h2>Roteiro de estudos para flauta doce</h2>

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
        </section>

        <section>
          <h2>Exercícios práticos</h2>
          
          <p>A prática leva à perfeição. Para fazer música, é necessário tentar várias vezes, ainda mais quando se está aprendendo uma nova técnica. Até os mais experientes treinam, então como podem os aprendizes supor que não precisam treinar?</p>
          
          <p>Todos os exercícios práticos devem ser enviados pelo grupo do WhatsApp. Utilize seu instrumento ou pratique o solfejo ou ainda os dois.</p>
          
          <p>Sempre, realmente sempre, utilize o metrônomo. Comece com uma velocidade baixa o suficiente para que possa executar tudo com perfeição e, na medida com que for percebendo que ficou fácil, vá aumentando a velocidade.</p>
          
          <p>Um bom metrônomo online e gratuito é o <Link href="https://www.musicca.com/pt/metronomo" target="_blank">musicca.com</Link></p>

          <ol>
            <PracticalExercise 
              title='Semicolcheias, compasso binário, escala de dó'
              imageSource='/images/Exercicio1.webp'
            />
          </ol>
        </section>

      </main>

      <footer>
        <p>@alcalcides</p>
        <p>&copy; Todos os direitos reservados</p>
      </footer>

    </div>
  )
}

