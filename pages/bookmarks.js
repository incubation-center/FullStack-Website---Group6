import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BookmarksCard from '../components/bookmarks-card';

function Bookmarks ()
{
  let result = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ];
  return (
    <div>
      <Navbar />

      <div className="flex flex-row m-5">
        <svg className="bi bi-journal-bookmark-fill color: rgb(255, 210, 51); h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z" fill="#ffd233"></path>
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" fill="#ffd233"></path>
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" fill="#ffd233"></path>
        </svg>
        <h1 className="text-3xl font-bold m-1">Total:</h1>
        <h2 className="text-2xl font-bold m-2">26 bookmarked</h2>
      </div>

      <div className="flex flex-wrap justify-around my-5">
        { result.map( ( recipe, index ) =>
        {
          return (
            <div key={ index } className="flex justify-center">
              <BookmarksCard />
            </div>
          );
        } ) }
      </div>

      <Footer />
    </div>
  )
}

export default Bookmarks;
