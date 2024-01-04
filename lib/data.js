import Company from "./data/company"
import About from "./data/about"
import Doctor from "./data/doctor"
import Services from "./data/services"
import Faqs from "./data/faqs"
import Sliders from "./data/sliders"
import WorkProgress from "./data/work_progress"

var Data = {
  company: Company,
  about: About,
  hospitals: [
    {
      name: "Quirurgica del sur",
      url: "https://www.quirurgicadelsur.com",
      logo: "/images/logo/quirurgica-del-sur.png",
    },
    {
      name: "Galenia",
      url: "https://hospitalgalenia.com",
      logo: "/images/logo/Hospital-Galenia-logo-2.svg",
    },
    {
      name: "Amerimed",
      url: "https://amerimedcancun.com",
      logo: "/images/logo/amaerimed-hospitals.png",
    },
  ],
  doctor: Doctor,
  services: Services,
  faqs: Faqs,
  sliders: Sliders,
  workProgress: WorkProgress
};

export default Data;
