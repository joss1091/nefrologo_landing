const Company = {
    name: "Nefrologo Dr Molina logo",
    url: "https://www.nefrologojosuemolina.com.mx",
    email: "nefrologocancun@gmail.com",
    logos: {
      light: "/images/logo/logo-dr-molina.png",
      dark: "/images/logo/logo-dr-molina.png",
    },
    mission:
      "Nuestro objetivo es brindar calidad de atención de manera cortés, respetuosa y manera compasiva. Esperamos que nos permita cuidar de usted y esforzarnos por ser la primera y mejor opción para la atención médica de su familia.",
    location: {
      address:
        "Hospital Quirúrgica del Sur, Av. López Portillo Supermanzana 59, 77515 Cancún, Q.R.",
      short_address: "Hospital Quirúrgica del Sur, SM 59",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8445772326236!2d-86.85997742481992!3d21.158582680523498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2be27e514413%3A0x40b5978cff17a55f!2sNefr%C3%B3logo%20Dr.%20Josu%C3%A9%20Molina%20Ruiz!5e0!3m2!1sen!2smx!4v1703704654610!5m2!1sen!2smx",
    },

    short_schedule: [
      {
        text: "Lunes - Viernes",
        details: { from: "08:00 am", to: "08:00 pm" },
      },
      { text: "Sabado", details: { from: "09:00 am", to: "14:00 pm" } },
      { text: "Domingo", details: { closed: true } },
    ],
    appointment: {
      phone: "9981930670",
      url: "https://www.doctoralia.com.mx/josue-molina-ruiz/nefrologo-medico-general/cancun",
    },
  }
  export default Company;