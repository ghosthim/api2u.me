import Image from 'next/image'
import { Mail } from 'react-feather'

const Main = () => {
  return (
    <main className="container flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
      <div className="mb-2">
        <Image
          className="rounded-full transition-all duration-100 filter grayscale hover:grayscale-0"
          src="/images/avatar.jpg"
          alt="avatar"
          width={120}
          height={120}
          priority
        />
      </div>
      <h1 className="font-bold mb-8 text-2xl text-light-900">Youngje Lee</h1>

      <p className="mb-8 text-gray-400">
              Gemologist💎 / Gamer / Geek
      </p>

      <p className="text-gray-400">
       Hi there! I'm Youngje Lee, also known as api2u in Internet. Studying at the{' '}
        <a
          href="https://www.qlu.edu.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:border-b-gray-700 hover:border-b-gray-500"
        >
          Qilu University Of Technology (Shandong Academy Of Science)
        </a>{' '}
        in Gemology and Material Technique.{' '}
      </p>

      <p className="mt-8 text-gray-400">
        Most of my work can be found on{' '}
        <a
          href="https://github.com/ghosthim"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:border-b-gray-700 hover:border-b-gray-500"
        >
          GitHub
        </a>
        .
      </p>
      <p className="flex space-x-2 items-center text-gray-400">
        <Mail size={15} />
        <a href="mailto:i@api2u.me" className="dark:border-b-gray-700 hover:border-b-gray-500">
          i#api2u.me
        </a>
      </p>
    </main>
  )
}

export default Main
