import Layout from '@/layout/Layout'
import '../styles/style.sass'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
