import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Facebook, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Produtos', href: '#services' },
      { name: 'Contato', href: '#contact' }
    ],
    services: [
      { name: 'Dutos PEAD Corrugados', href: '#services' },
      { name: 'Orçamento', href: '#contact' },
      { name: 'Suporte Técnico', href: 'https://wa.me/5519983610058' }
    ]
  }

  const contactInfo = [
    {
      icon: Phone,
      text: '(11) 5242-4280',
      href: 'tel:1152424280'
    },
    {
      icon: MessageCircle,
      text: '(19) 98361-0058',
      href: 'https://wa.me/5519983610058'
    },
    {
      icon: Mail,
      text: 'contato@ntcbrasil.com.br',
      href: 'mailto:contato@ntcbrasil.com.br'
    },
    {
      icon: MapPin,
      text: 'Todo Brasil',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/ntcbrasil',
      name: 'Facebook'
    }
  ]

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1))
      if (element) {
        const headerHeight = 80
        const offsetTop = element.offsetTop - headerHeight
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    } else {
      window.open(sectionId, '_blank')
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754406457885_0.png" 
                alt="NTCDuto" 
                className="h-12 w-auto filter invert"
              />
            </motion.div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em dutos elétricos PEAD corrugados para construção civil pesada. 
              Soluções robustas com qualidade e durabilidade garantidas.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-500 p-3 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start gap-3 text-gray-300 ${
                    contact.href ? 'hover:text-primary-400 cursor-pointer' : ''
                  } transition-colors duration-200`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={contact.href ? { x: 5 } : {}}
                  onClick={() => contact.href && window.open(contact.href, contact.href.includes('mailto') || contact.href.includes('tel') ? '_self' : '_blank')}
                >
                  <contact.icon size={18} className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{contact.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-6 bg-gray-800 rounded-lg p-4 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-2">Horário de Atendimento</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Segunda a Sexta: 08:00 - 18:00</div>
                <div>Sábado: 08:00 - 12:00</div>
                <div>Domingo: Fechado</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              className="text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2023 NTCDuto. Todos os direitos reservados.
            </motion.div>
            
            <motion.div
              className="text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Criado com {' '}
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Papum
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}