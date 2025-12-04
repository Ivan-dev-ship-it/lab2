export default function Footer() {
    return (
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container d-flex justify-content-between flex-wrap">
          <div>
            <h5>Контакты</h5>
            <ul className="list-unstyled">
              <li>Email: <a className="text-white" href="#">info@example.com</a></li>
              <li>Телефон: <a className="text-white" href="#">+1 (234) 567-890</a></li>
              <li>Адрес: <a className="text-white" href="#">ул. Примерная, 123, Город</a></li>
            </ul>
          </div>
          <div>
            <h5>Социальные сети</h5>
            <div className="d-flex gap-3">
              <a className="text-white fs-4" href="#"><i className="bi bi-vk"></i></a>
              <a className="text-white fs-4" href="#"><i className="bi bi-telegram"></i></a>
              <a className="text-white fs-4" href="#"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  