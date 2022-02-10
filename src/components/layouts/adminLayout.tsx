import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Navbar } from '../navbars/navbar'
import Sidebar from '../sidebars/sidebar'

interface AdminLayoutProps {
  title: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = (props) => {
  return (
    <div>
      <Head>
        <title>BCS</title>
        <meta name="description" content="Generated" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Sidebar />
        <div className="relative md:ml-64 md:px-10 bg-gray ">
          <Navbar title={props.title} />
          <div className="px-4 py-20 md:px-10 mx-auto w-full min-h-screen ">
            {props.children}
          </div>
        </div>
      </>
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Realizado por Equipo Innovacion Digital
        </a>
      </footer>
    </div>
  )
}
