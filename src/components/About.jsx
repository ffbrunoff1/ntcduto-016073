import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, CheckCircle, Globe, Wrench, Star } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '1000+', label: 'Projetos Concluídos' },
    { number: '100%', label: 'Satisfação do Cliente' },
    { number: '24/7', label: 'Suporte Técnico' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Precisão',
      description: 'Cada projeto é executado com máxima precisão e atenção aos detalhes técnicos.'
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Construímos relacionamentos duradouros baseados na confiança mútua.'
    },
    {
      icon: CheckCircle,
      title: 'Qualidade',
      description: 'Nossos produtos atendem aos mais rigorosos padrões de qualidade do mercado.'
    },
    {
      icon: Globe,
      title: 'Sustentabilidade',
      description: 'Comprometidos com soluções ambientalmente responsáveis e sustentáveis.'
    },
    {
      icon: Wrench,
      title: 'Inovação',
      description: 'Sempre buscando as melhores tecnologias para entregar soluções superiores.'
    },
    {
      icon: Star,
      title: 'Excelência',
      description: 'Buscamos a excelência em cada etapa do processo, do projeto à entrega.'
    }
  ]

  const benefits = [
    'Materiais de primeira linha certificados',
    'Instalação rápida e econômica', 
    'Resistência superior a intempéries',
    'Flexibilidade para terrenos variados',
    'Baixa manutenção ao longo da vida útil',
    'Conformidade com normas técnicas'
  ]

  return (
    <section id="about" className="section-padding bg-white">
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
            <span className="text-gray-900">Sobre a </span>
            <span className="gradient-text">NTCDuto</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Especialistas em dutos elétricos PEAD corrugados para construção civil pesada, 
            oferecendo soluções robustas que garantem segurança, durabilidade e eficiência 
            em seus projetos de infraestrutura elétrica.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754406450546_8gmn1cnc7sm_dutos-eletricos-1.jpg"
              alt="Dutos Elétricos em Instalação"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Liderança em Soluções de Infraestrutura Elétrica
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              A NTCDuto é reconhecida como referência no fornecimento de dutos elétricos 
              PEAD corrugados para projetos de construção civil pesada. Nossa experiência 
              e conhecimento técnico garantem que cada projeto receba a solução mais 
              adequada e eficiente.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossos dutos fabricados em polietileno de alta densidade oferecem proteção 
              superior para cabos elétricos, resistindo a impactos, abrasão e variações 
              climáticas extremas, o que os torna ideais para aplicações em ambientes 
              desafiadores da construção civil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-3xl lg:text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Valores</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <value.icon className="text-primary-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}