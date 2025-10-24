<h1 align="center">⚡ React Vite — Movie Explorer 🎬</h1>

<table>
  <tr>
    <th>🏷️ Kategori</th>
    <th>📘 Açıklama</th>
  </tr>

  <tr>
    <td><b>🧠 Proje Özeti</b></td>
    <td>
      React 18 + Vite tabanlı film keşif uygulaması.<br/>
      Kullanıcılar API üzerinden film arayabilir, detaylarına bakabilir ve favori listesine ekleyebilir.<br/>
      Projede <code>useState</code>, <code>useEffect</code>, <code>Context API</code>, <code>Routing</code>, <code>Forms</code> ve <code>API Entegrasyonu</code> konuları uygulanmıştır.
    </td>
  </tr>

  <tr>
    <td><b>🚀 Temel Özellikler</b></td>
    <td>
      • Gerçek <b>API key</b> kullanımı (OMDb / TMDB)<br/>
      • <b>State Yönetimi:</b> useState, useEffect, Context API<br/>
      • <b>Routing:</b> react-router-dom ile çoklu sayfa yapısı<br/>
      • <b>Form Yönetimi:</b> Arama formu, kontrollü inputlar<br/>
      • <b>Context API:</b> Global state (favoriler, tema vb.)<br/>
      • <b>Dinamik Sayfalar:</b> /movie/:id yapısı<br/>
      • <b>Responsive Tasarım:</b> Tüm cihazlara uyumlu
    </td>
  </tr>

  <tr>
    <td><b>🏗️ Proje Mimarisi</b></td>
    <td>
      <pre>
src/
 ├── components/ → Reusable bileşenler (Card, Navbar, Button, Input)
 ├── hooks/ → Custom React hook'lar (örnek: useFetch, useTheme)
 ├── layouts/ → Sayfa düzenleri (MainLayout, AuthLayout)
 ├── pages/ → Home, Details, Favorites
 ├── context/ → Context API yapılandırması
 ├── utils/ → Yardımcı fonksiyonlar (helper, formatters, constants)
 ├── assets/ → Görseller & stiller
 ├── App.jsx → Router & layout yönetimi
 └── main.jsx → Giriş noktası
      </pre>
    </td>
  </tr>

  <tr>
    <td><b>🧭 Routing Akışı</b></td>
    <td>
      <code>/</code> → Ana sayfa<br/>
      <code>/movie/:id</code> → Film detay sayfası<br/>
      <code>/favorites</code> → Favoriler listesi<br/>
    </td>
  </tr>

  <tr>
    <td><b>📡 API Kullanımı</b></td>
    <td>
      OMDb veya TMDB API üzerinden veri çekilir.<br/>
      <pre>
const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${searchTerm}`;

useEffect(() => {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => setMovies(data.Search || []));
}, [searchTerm]);
      </pre>
      <b>.env Dosyası:</b><br/>
      <pre>
VITE_API_KEY=senin_api_keyin
      </pre>
    </td>
  </tr>

  <tr>
    <td><b>🧠 Context Örneği</b></td>
    <td>
      <pre>
export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    if (!favorites.some(f => f.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    &lt;MovieContext.Provider value={{ favorites, addFavorite }}&gt;
      {children}
    &lt;/MovieContext.Provider&gt;
  );
};
      </pre>
    </td>
  </tr>

  <tr>
    <td><b>🧩 Kullanılan Teknolojiler</b></td>
    <td>
      <table>
        <tr><th>Teknoloji</th><th>Amaç</th><th>Versiyon</th></tr>
        <tr><td>React</td><td>UI geliştirme</td><td>18.x</td></tr>
        <tr><td>Vite</td><td>Derleyici & dev server</td><td>5.x</td></tr>
        <tr><td>React Router DOM</td><td>Sayfa yönlendirme</td><td>7.x</td></tr>
        <tr><td>Axios / Fetch API</td><td>API istekleri</td><td>-</td></tr>
        <tr><td>Context API</td><td>Global state yönetimi</td><td>-</td></tr>
        <tr><td>useState / useEffect</td><td>React hook’ları</td><td>-</td></tr>
        <tr><td>Custom Hooks</td><td>Reusable mantıklar (örnek: useFetch)</td><td>-</td></tr>
        <tr><td>Layouts</td><td>Sayfa düzen bileşenleri</td><td>-</td></tr>
        <tr><td>Utils</td><td>Yardımcı fonksiyonlar</td><td>-</td></tr>
      </table>
    </td>
  </tr>

  <tr>
    <td><b>🔒 Güvenlik Notları</b></td>
    <td>
      • API key <code>.env</code> dosyasında saklanır.<br/>
      • <code>.env</code> dosyası <code>.gitignore</code> içinde yer alır.<br/>
      • Key hiçbir zaman repo içinde paylaşılmaz.
    </td>
  </tr>

  <tr>
    <td><b>💡 Öğrenme Konuları</b></td>
    <td>
      ✅ Component yapısı<br/>
      ✅ State & props<br/>
      ✅ useEffect ile side effect<br/>
      ✅ Routing & dinamik parametreler<br/>
      ✅ Form yönetimi<br/>
      ✅ Context API kullanımı<br/>
      ✅ API entegrasyonu<br/>
      ✅ Custom Hooks ve Layout mimarisi
    </td>
  </tr>

  <tr>
    <td><b>📸 Ekran Görüntüleri</b></td>
    <td>
      <p>Projenin genel görünümüne dair bazı ekran görüntüleri:</p>
      <img src="https://github.com/berkiskitoglu/react-movie-app/blob/main/image/HomePage.png" alt="Home Page" width="600"/><br/>
      <img src="https://github.com/berkiskitoglu/react-movie-app/blob/main/image/filmdetail.png" alt="Movie Details" width="600"/><br/>
      <img src="https://github.com/berkiskitoglu/react-movie-app/blob/main/image/watchlist.png" alt="Favorites Page" width="600"/><br/>
      <img src="https://github.com/berkiskitoglu/react-movie-app/blob/main/image/login.png" alt="Login Page" width="600"/><br/>
      <img src="https://github.com/berkiskitoglu/react-movie-app/blob/main/image/register.png" alt="Register Page" width="600"/><br/>
    </td>
  </tr>

  <tr>
    <td><b>🧪 Kurulum Adımları</b></td>
    <td>
      <pre>
npm install
npm run dev
      </pre>
      Tarayıcıda aç: <a href="http://localhost:5173">http://localhost:5173</a>
    </td>
  </tr>

  <tr>
    <td><b>👨‍💻 Geliştirici Bilgileri</b></td>
    <td>
      👤 <b>Halit Berk İskitoğlu</b><br/>
      📧 halitberkiskitoglu@gmail.com<br/>
         <a href="https://github.com/berkiskitoglu" target="_blank">🐙 GitHub</a> |
        <a href="https://www.linkedin.com/in/halitberkiskitoglu/" target="_blank">💼 LinkedIn</a><br/>
      🧱 Proje Türü: Frontend — React Vite SPA
    </td>
  </tr>
</table>
