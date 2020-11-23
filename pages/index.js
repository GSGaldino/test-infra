import HubspotForm from 'react-hubspot-form';
import Head from 'next/head';


export default function Home({data}) {
  const renderGTMSnippet = () => (
    <script 
      dangerouslySetInnerHTML={{
        __html:`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MRL9KJ7')
        `
      }}
    />
  )
  return (
    <>
      <Head>
        {renderGTMSnippet()}
        <title>Teste infra</title>
      </Head>
      <h1>Home</h1>
      <HubspotForm
        portalId='6331207'
        formId='2f9f2a9b-067e-405d-ad73-fd776451179e'
        onSubmit={() => console.log('Submit!')}
        onReady={(form) => console.log('Form ready!')}
        loading={<div>Loading...</div>}
      />

      <p>{data.bio}</p>
      <img src={data.avatar_url} />
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/GSGaldino')
  const data = await response.json();
  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
