import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="text-xs text-center p-6 primary-text">
      <div>Built with ❤️ by Youngje</div>
      <div>Designed by{' '}
              <a
                  href="https://github.com/spencerwooo/spencerwoo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Spencer Woo
              </a>
          </div>
      <div>
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY-NC-SA 4.0
        </a>{' '}
        ©️ 2018 - {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
