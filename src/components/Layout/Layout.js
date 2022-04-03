const layout = (props) => {
    return (
        <>
            <header>
                <nav>navigation</nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                footer
            </footer>
        </>
    )
}

export default layout;