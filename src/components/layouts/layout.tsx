import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>BCS</title>
        <meta name="description" content="Generated" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <main className="sm:p-8 md:p-16 flex-col justify-center align-middle min-h-screen bg-slate-100">{children}</main>
        </div>
      </div>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Realizado por Equipo Innovación Digital
        </a>
      </footer>
    </div>
  )
}
