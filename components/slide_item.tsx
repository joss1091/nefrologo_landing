
export default function SlideItem(props) {
  return (
    <div className="service-item" {...props}>
    <div className="service__icon">
      <i className="icon-head"></i>
      <i className="icon-head"></i>
    </div>
    <div className="service__content">
      <h4 className="service__title">Neurology Clinic</h4>
      <p className="service__desc">Some neurologists receive subspecialty training focusing on a particular area
        of
        the fields, these training programs are called fellowships, and are one to two years.
      </p>
      <ul className="list-items list-items-layout1 list-unstyled">
        <li>Neurocritical Care</li>
        <li>Neuro Oncology</li>
        <li>Geriatric Neurology</li>
      </ul>
      <a href="services-single.html" className="btn btn__secondary btn__outlined btn__rounded">
        <span>Read More</span>
        <i className="icon-arrow-right"></i>
      </a>
    </div>
  </div>
  );
}
