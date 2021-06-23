function Footer(){
    return (
        <footer className = "page  light-blue darken-3">
            <div className = "container">
                {new Date().getFullYear()} Copyright Text
                <a className = "grey-text text-lighten-4 right" href="#!">Repo</a>
            </div>
        </footer>
    )
}
export {Footer}