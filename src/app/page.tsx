export default function Home() {
  return (
   <>
   <header>
    <h1>Header H1</h1>
  </header>
  <main>
    <br />
    <article>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</h2>
      <br />
      <nav aria-labelledby="tocheader">
        <h3 id="tocheader">Table of Contents</h3>
      </nav>

      <nav aria-label="Main">
        Test aria-label
      </nav>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
      </ul>
      <br />
      <h3>Cotton Fur</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <br />
      <aside aria-labelledby="relatedheader">
        <h3 id="relatedheader">Related Articles</h3>
        <ul>
          <li><a href="#">Related Article Title 1</a></li>
          <li><a href="#">Related Article Title 2</a></li>
          <li><a href="#">Related Article Title 3</a></li>
        </ul>
      </aside>
    </article>
    <br />
    <aside aria-labelledby="latestheader">
      <h3 id="latestheader">Latest Articles</h3>
      <ul>
        <li><a href="#">Latest Article Title 1</a></li>
        <li><a href="#">Latest Article Title 2</a></li>
        <li><a href="#">Latest Article Title 3</a></li>
      </ul>
    </aside>
  </main>
   </>
  )
}
