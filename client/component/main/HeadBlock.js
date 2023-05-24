import Head from "next/head"

export default function HeadBlock({ title = 'Nikways' }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Nikways" />
    </Head>
  )
}