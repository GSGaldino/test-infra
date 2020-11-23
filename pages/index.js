import HubspotForm from 'react-hubspot-form';
import TagManager from 'react-gtm-module';


export default function Home() {
  const tagManagerArgs = {
    gtmId: 'GTM-000000'
  }

  TagManager.initialize(tagManagerArgs);
  return (
    <>
      <h1>Home</h1>
      <HubspotForm
        portalId='6331207'
        formId='2f9f2a9b-067e-405d-ad73-fd776451179e'
        onSubmit={() => console.log('Submit!')}
        onReady={(form) => console.log('Form ready!')}
        loading={<div>Loading...</div>}
      />
    </>
  )
}
