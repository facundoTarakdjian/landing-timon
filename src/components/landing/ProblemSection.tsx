import {
  HelpCircle,
  Eye,
  TrendingUp,
  DollarSign,
  Compass,
  AlertTriangle,
  Briefcase,
  Building,
} from 'lucide-react'

type Props = { audience: 'estudiante' | 'padre' }

const CONTENT = {
  estudiante: {
    titulo: 'Sabés que tenés que elegir. Pero no sabés qué.',
    subtitulo: 'Y todos te preguntan como si ya deberías saberlo.',
    bg: 'bg-[#0d0d14]',
    dark: true,
    cards: [
      {
        icon: HelpCircle,
        color: 'text-violet-400',
        titulo: 'Demasiadas opciones',
        texto: '847 carreras. Decenas de universidades. Y ninguna te parece claramente tuya.',
      },
      {
        icon: Eye,
        color: 'text-violet-400',
        titulo: 'No sabés qué te gusta de verdad',
        texto: 'Creés que te gusta algo, pero no sabés si lo elegiste o te lo dijeron.',
      },
      {
        icon: TrendingUp,
        color: 'text-violet-400',
        titulo: '¿Tiene futuro lo que me gusta?',
        texto: 'Nadie te da información real sobre salidas laborales. Todo es opinión.',
      },
      {
        icon: DollarSign,
        color: 'text-violet-400',
        titulo: 'No sabés cuánto cuesta ni dónde',
        texto: 'Las universidades no son transparentes. No sabés qué podés pagar.',
      },
    ],
  },
  padre: {
    titulo: 'Querés que decida bien. Pero no podés decidir por él.',
    subtitulo: 'Y los recursos que existen no te dan la claridad que necesitás.',
    bg: 'bg-emerald-50/40',
    dark: false,
    cards: [
      {
        icon: Compass,
        color: 'text-emerald-600',
        titulo: 'La nebulosa que no se disipa',
        texto: 'Tu hijo dice "no sé" y el tiempo pasa. Cada año sin dirección pesa más.',
      },
      {
        icon: AlertTriangle,
        color: 'text-emerald-600',
        titulo: 'Miedo a la decisión equivocada',
        texto: 'Que elija por moda, por los amigos, o que en dos años abandone.',
      },
      {
        icon: Briefcase,
        color: 'text-emerald-600',
        titulo: '¿Tendrá trabajo con eso?',
        texto: 'Querés que elija algo que le guste pero también que tenga futuro real.',
      },
      {
        icon: Building,
        color: 'text-emerald-600',
        titulo: 'Los orientadores cuestan una fortuna',
        texto: 'Un proceso privado cuesta entre $500.000 y $800.000. No es para todos.',
      },
    ],
  },
}

export function ProblemSection({ audience }: Props) {
  const c = CONTENT[audience]
  const isDark = c.dark
  return (
    <section className={`py-24 ${c.bg} transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto px-6">
        {isDark && (
          <div className="h-px bg-white/10 mb-16" />
        )}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {c.titulo}
          </h2>
          <p className={`text-lg ${isDark ? 'text-white/50' : 'text-gray-400'}`}>{c.subtitulo}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {c.cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.titulo}
                className={`rounded-2xl p-6 transition-shadow duration-200 ${
                  isDark
                    ? 'bg-white/5 border border-white/10 hover:bg-white/8'
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                <Icon size={28} className={`${card.color} mb-4`} />
                <h3 className={`font-semibold mb-2 text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {card.titulo}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                  {card.texto}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
