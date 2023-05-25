import Navigation from './Navigation'
import NavigationModal from './NavigationModal'

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-8">
      <div className="flex">
        <a href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <img
                src="/images/logo.svg"
                alt="Page logo"
                width={54}
                height={44}
              />
            </div>
          </div>
        </a>
      </div>
      <div className="flex items-center text-base leading-5">
        <Navigation />
        <NavigationModal />
      </div>
    </header>
  )
}

export default Header
