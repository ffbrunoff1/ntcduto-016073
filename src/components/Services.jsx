import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Award, Wrench, CheckCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  const mainProduct = {
    title: 'Dutos Elétricos PEAD Corrugados',
    description: 'Os dutos elétricos PEAD corrugados são ideais para proteger e conduzir cabos elétricos com segurança e eficiência. Fabricados em polietileno de alta densidade, esses dutos garantem durabilidade e resistência a impacto, abrasão e variações climáticas.',
    images: [
      'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754406449746_bca4fbvbm2k_dutos-eletricos-2.jpg',
      'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754406450546_8gmn1cnc7sm_dutos-eletricos-1.jpg',
      'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754406451469_uk33w1lk7g9_dutos-eletricos-506x372.jpg'
    ],
    features: [
      {
        icon: Shield,
        title: 'Alta Resistência',
        description: 'Resistência superior a impactos, abrasão e variações climáticas extremas.'
      },
      {
        icon: Zap,
        title: 'Instalação Eficiente',
        description: 'Leves e flexíveis, facilitam a instalação em diversos terrenos e condições.'
      },
      {
        icon: Award,
        title: 'Material Premium',
        description: 'Fabricados em polietileno de alta densidade (PEAD) certificado.'
      },
      {
        icon: Wrench,
        title: 'Sustentabilidade',
        description: 'Solução sustentável que contribui para a proteção do meio ambiente.'
      }
    ],
    benefits: [
      'Durabilidade excepcional em condições adversas',
      'Economia de tempo e recursos na instalação',
      'Flexibilidade para adaptação a diferentes terrenos',
      'Baixo custo de manutenção ao longo da vida útil',
      'Conformidade com normas técnicas brasileiras',
      'Material 100% reciclável e sustentável',
      'Resistência a produtos químicos e corrosão',
      'Proteção eficaz contra roedores e insetos'
    ],
    applications: [
      'Construção civil pesada e infraestrutura',
      'Redes de distribuição elétrica subterrânea',
      'Instalações industriais e comerciais',
      'Projetos residenciais de grande porte',
      'Obras de saneamento e drenagem',
      'Instalações em áreas rurais e urbanas'
    ]
  }

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mainProduct.images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-900">Nossos </span>
            <span className="gradient-text">Produtos</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Soluções especializadas em dutos elétricos para construção civil pesada, 
            garantindo máxima eficiência e durabilidade em seus projetos.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img
                key={currentImageIndex}
                src={mainProduct.images[currentImageIndex]}
                alt={mainProduct.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex space-x-2">
                  {mainProduct.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-primary-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {mainProduct.title}
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {mainProduct.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {mainProduct.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <feature.icon className="text-primary-500 mb-3" size={24} />
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://wa.me/5519983610058"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Benefícios dos Nossos Dutos</h4>
            <div className="space-y-4">
              {mainProduct.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="text-primary-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Aplicações</h4>
            <div className="space-y-4">
              {mainProduct.applications.map((application, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg border border-primary-200 hover:border-primary-300 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -5 }}
                >
                  <ArrowRight className="text-primary-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700 font-medium">{application}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-primary-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h5 className="text-lg font-semibold text-gray-900 mb-3">Preços Sob Consulta</h5>
              <p className="text-gray-600 mb-4">
                Oferecemos orçamentos personalizados baseados nas especificações 
                do seu projeto e quantidades necessárias.
              </p>
              <motion.a
                href="https://wa.me/5519983610058"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}