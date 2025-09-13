import BookDetails from "./BookDetails";

function App() {
  return (
    <div className="appContainer">
      <header className="heading">Book Catalog</header>
      <main className="section">
        <div className="newContainer">
          <h3>+ Add Book</h3>
        </div>
        <BookDetails isbn="9781484292464" />
        <BookDetails isbn="9781484289822" />
      </main>
      <footer className="footer">
        <p>Zinna Kim A01370901 © COMP3170 2025</p>
      </footer>
    </div>
  );
}

export default App;
