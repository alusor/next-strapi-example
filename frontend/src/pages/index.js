import Image from 'next/image'

function HomePage ({ data }) {
  return (
    <section>
      {
        data?.map((locale) => (
          <div key={locale._id}>
            <h2>{locale.name}</h2>
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${locale.image.url}`}
            />
          </div>
        ))
      }
    </section>
  )
}

export async function getServerSideProps () {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/businesses`)
  const data = await response.json()
  return { props: {
    data
  } }
}

export default HomePage
