import 'tailwindcss';
import '../styles/navigator.css';

function Navigator() {
  return (
    <div className="navigator">
      <span href="">A bitter nobody</span>
      <div>
        <nav>
          <div>
            <ul className="m-0 p-0 flex-wrap pl-4 w-20">
              <li className="hover:bg-slate-200 m-0 p-0 list-none">
                <a href="" className="p-4">
                  About
                </a>
              </li>
              <li className="hover:bg-slate-200 m-0 p-0 list-none">
                <a href="" className="p-4">
                  Gallery
                </a>
              </li>
              <li className="hover:bg-slate-200 m-0 p-0 list-none">
                <a href="" className="p-4">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
    </div>
  );
}

export default Navigator;
