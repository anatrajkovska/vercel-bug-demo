import Image from 'next/image'

export default function Post() {
  return (
    <>
      <Image
        alt="Example image"
        src="https://i.ytimg.com/vi/PKffm2uI4dk/maxresdefault.jpg"
        width={400}
        height={100}
      />
    </>
  )
}
