import { useState, type FormEvent } from 'react'
import { Phone, Clock, Shield, Heart, Users, MapPin, CheckCircle, Star, ChevronDown, ChevronUp, Stethoscope, Syringe, Thermometer, Bandage, Droplet, Activity } from 'lucide-react'

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  })

  const services = [
    { id: 'service-1', icon: <Syringe className="w-8 h-8" />, title: "Injections & Perfusions", desc: "Injections intramusculaires, intraveineuses et pose de perfusion" },
    { id: 'service-2', icon: <Bandage className="w-8 h-8" />, title: "Soins de plaies", desc: "Pansements, soins post-opératoires et cicatrisation" },
    { id: 'service-3', icon: <Thermometer className="w-8 h-8" />, title: "Suivi médical", desc: "Prise de constantes, surveillance de la tension et glycémie" },
    { id: 'service-4', icon: <Droplet className="w-8 h-8" />, title: "Prises de sang", desc: "Prélèvements sanguins pour analyses médicales" },
    { id: 'service-5', icon: <Activity className="w-8 h-8" />, title: "Soins chroniques", desc: "Prise en charge du diabète, hypertension et maladies chroniques" },
    { id: 'service-6', icon: <Stethoscope className="w-8 h-8" />, title: "Soins palliatifs", desc: "Accompagnement et soins de fin de vie à domicile" },
  ]

  const advantages = [
    { id: 'advantage-1', icon: <Heart className="w-10 h-10" />, title: "Confort à domicile", desc: "Restez dans votre environnement familial pour une récupération optimale" },
    { id: 'advantage-2', icon: <Shield className="w-10 h-10" />, title: "Soins sécurisés", desc: "Continuité des soins après une hospitalisation avec un accompagnement professionnel" },
    { id: 'advantage-3', icon: <Users className="w-10 h-10" />, title: "Plan personnalisé", desc: "Chaque patient bénéficie d'un programme de soins adapté à ses besoins" },
    { id: 'advantage-4', icon: <Clock className="w-10 h-10" />, title: "Disponibilité 24h/24", desc: "Nos infirmiers sont disponibles jour et nuit, 7j/7" },
    { id: 'advantage-5', icon: <CheckCircle className="w-10 h-10" />, title: "Équipe qualifiée", desc: "Tous nos infirmiers sont diplômés d'État avec une solide expérience" },
    { id: 'advantage-6', icon: <MapPin className="w-10 h-10" />, title: "Couverture locale", desc: "Intervention dans tous les quartiers d'Al Hoceima et ses environs" },
  ]

  const steps = [
    { id: 'step-1', num: "1", title: "Contactez-nous", desc: "Appelez-nous ou remplissez notre formulaire en ligne pour nous faire part de vos besoins en soins infirmiers." },
    { id: 'step-2', num: "2", title: "Décrivez votre situation", desc: "Expliquez votre situation médicale ou fournissez votre ordonnance pour que nous puissions évaluer vos besoins." },
    { id: 'step-3', num: "3", title: "Planification", desc: "Nous vous proposons un devis transparent et vous aidons à planifier votre rendez-vous avec un infirmier." },
    { id: 'step-4', num: "4", title: "Intervention à domicile", desc: "Un infirmier qualifié se rend à votre domicile à l'heure convenue pour prodiguer les soins nécessaires." },
  ]

  const testimonials = [
    { id: 'testimonial-1', name: "Fatima Z.", location: "Al Hoceima", rating: 5, text: "Service excellent ! L'infirmier est arrivé rapidement et les soins étaient très professionnels. Je recommande vivement." },
    { id: 'testimonial-2', name: "Mohamed A.", location: "Al Hoceima", rating: 5, text: "Très satisfait des soins prodigués à ma mère. L'équipe est compétente et très attentionnée. Merci beaucoup !" },
    { id: 'testimonial-3', name: "Khadija B.", location: "Al Hoceima", rating: 5, text: "Après mon opération, j'avais besoin de soins réguliers. Grâce à eux, j'ai pu récupérer confortablement chez moi." },
  ]

  const faqs = [
    { id: 'faq-1', q: "Quels types de soins proposez-vous à domicile ?", r: "Nous proposons une large gamme de soins infirmiers : injections, perfusions, pansements, soins post-opératoires, prises de sang, suivi des constantes vitales, soins chroniques (diabète, hypertension), et soins palliatifs." },
    { id: 'faq-2', q: "Quel est le délai d'intervention à Al Hoceima ?", r: "Notre équipe intervient généralement dans les 30 à 60 minutes suivant votre appel, selon votre localisation à Al Hoceima et nos disponibilités." },
    { id: 'faq-3', q: "Les soins sont-ils remboursés par l'assurance maladie ?", r: "Nous fournissons des factures et des rapports de soins que vous pouvez soumettre à votre assurance maladie ou mutuelle pour remboursement selon vos conditions contractuelles." },
    { id: 'faq-4', q: "Comment puis-je payer les soins ?", r: "Nous acceptons les paiements en espèces, par virement bancaire et par carte bancaire. Le paiement se fait après chaque intervention ou selon un accord préalable." },
    { id: 'faq-5', q: "Vos infirmiers sont-ils certifiés ?", r: "Oui, tous nos infirmiers sont diplômés d'État, inscrits à l'Ordre des Infirmiers et disposent d'une solide expérience dans les soins à domicile." },
    { id: 'faq-6', q: "Êtes-vous disponibles les week-ends et jours fériés ?", r: "Oui, notre service est disponible 24h/24 et 7j/7, y compris les week-ends et jours fériés, pour répondre à vos besoins urgents." },
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Merci ${formData.name} ! Nous vous contacterons au ${formData.phone} très prochainement.`)
    setFormData({ name: '', phone: '', address: '', service: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-800">SoinDomicile<span className="text-teal-600">AH</span></span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-gray-600 hover:text-teal-600 transition">Services</a>
            <a href="#avantages" className="text-gray-600 hover:text-teal-600 transition">Avantages</a>
            <a href="#comment-ca-marche" className="text-gray-600 hover:text-teal-600 transition">Comment ça marche</a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600 transition">Contact</a>
          </nav>
          <a href="tel:+212600000000" className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Appeler</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border-4 border-white rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span>Al Hoceima & Région</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Soins Infirmiers à Domicile à Al Hoceima
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-teal-100">
              Infirmier(e) Disponible 24h/24, 7j/7
            </p>
            <p className="text-lg text-teal-200 mb-8">
              Nos infirmiers diplômés interviennent à votre domicile pour vous assurer des soins médicaux de qualité, en toute sécurité et avec une prise en charge humaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition text-center">
                Demander un soin
              </a>
              <a href="tel:+212600000000" className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                <Phone className="w-5 h-5" />
                +212 6XX XXX XXX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Services de Soins</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de soins infirmiers prodigués à votre domicile par des professionnels qualifiés.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section id="avantages" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pourquoi Choisir Nos Services ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les soins à domicile permettent de rester dans un environnement familier, favorisant la récupération et diminuant le stress.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div key={adv.id} className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{adv.title}</h3>
                  <p className="text-gray-600 text-sm">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" className="py-20 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comment Ça Marche ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un processus simple et rapide pour recevoir vos soins à domicile.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md text-center h-full">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-teal-600">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ce Que Disent Nos Patients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de personnes ayant bénéficié de nos services à Al Hoceima.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Formulaire */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Demandez Votre Soin à Domicile</h2>
              <p className="text-gray-400 mb-8">
                Remplissez le formulaire ci-dessous ou appelez-nous directement. Notre équipe vous contactera dans les plus brefs délais pour planifier votre intervention.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Appelez-nous</p>
                    <p className="text-lg font-semibold">+212 6XX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Disponibilité</p>
                    <p className="text-lg font-semibold">24h/24 - 7j/7</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Zone d'intervention</p>
                    <p className="text-lg font-semibold">Al Hoceima & Région</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-800"
                    placeholder="Votre nom et prénom"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-800"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Adresse à Al Hoceima *</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-800"
                    placeholder="Votre adresse complète"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Type de soin *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-800"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message / Détails</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-800"
                    placeholder="Décrivez votre besoin ou votre situation médicale..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                  Demander un soin maintenant
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Questions Fréquentes</h2>
            <p className="text-gray-600">
              Trouvez rapidement des réponses à vos questions les plus courantes.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600">{faq.r}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un soin infirmier à domicile ?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Nos infirmiers qualifiés sont disponibles 24h/24 pour répondre à vos besoins en soins médicaux à Al Hoceima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition">
              Remplir le formulaire
            </a>
            <a href="tel:+212600000000" className="flex items-center justify-center gap-2 border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-8 h-8 text-teal-500" />
                <span className="text-xl font-bold text-white">SoinDomicile<span className="text-teal-500">AH</span></span>
              </div>
              <p className="text-sm">
                Service de soins infirmiers à domicile à Al Hoceima, disponible 24h/24 et 7j/7.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Injections & Perfusions</li>
                <li>Soins de plaies</li>
                <li>Prises de sang</li>
                <li>Suivi médical</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Zone</h4>
              <ul className="space-y-2 text-sm">
                <li>Al Hoceima</li>
                <li>Imzouren</li>
                <li>Bni Bouayach</li>
                <li>Ajdir</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>+212 6XX XXX XXX</li>
                <li>contact@soindomicile-ah.ma</li>
                <li>Al Hoceima, Maroc</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 SoinDomicile Al Hoceima. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
