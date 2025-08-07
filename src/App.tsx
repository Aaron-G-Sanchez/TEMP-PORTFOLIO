import './App.scss'

export const App = () => {
  const handleClick = () => {
    window.location.href = 'mailto:contact@aarongsanchez.me'
  }

  return (
    <>
      <main className="content-container">
        <div className="'subheading">
          <h2 className="name">Aaron G Sanchez</h2>
          <p className="job-title">
            Software Engineer | Audio Engineer | Burrito Enthusiast
          </p>
        </div>

        <div className="heading">
          <h1 className="title">Hi, I'm Aaron.</h1>
          <p className="description">
            This page is currently under construction.
          </p>
        </div>
        <div className="btn-container">
          <button onClick={handleClick} className="btn">
            Contact Me
          </button>
        </div>
      </main>
    </>
  )
}
