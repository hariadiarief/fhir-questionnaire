import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container flex flex-col items-center'>
      <h2 className='mb-3 mt-32 text-center text-2xl font-semibold'>
        Next.js WPA Starter Kit
      </h2>

      <div>
        <Image
          width={300}
          height={300}
          src={'/images/Jumping.svg'}
          alt='home'
        />
      </div>

      <div className='mb-32 flex justify-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'>
        <Link href='/lforms'>
          <h2 className='mb-3 text-2xl font-semibold'>
            LForms
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm text-black opacity-50'>
            A widget for rendering feature-rich forms defined in JSON definition
            files
          </p>
        </Link>
      </div>
    </div>
  )
}
