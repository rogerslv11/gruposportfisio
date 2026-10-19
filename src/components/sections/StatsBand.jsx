import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'
import Container from '../ui/Container'

// Linha editorial de números — hairlines em vez de card flutuante.
const stats = [
  { count: true, value: '20', suffix: '+', label: 'Profissionais qualificados' },
  { count: true, value: '2012', label: 'Fundação do grupo' },
  { count: true, value: '7', label: 'Áreas de atuação' },
  { display: '1:1', label: 'Atendimento individualizado' },
]

export default function StatsBand() {
  return (
    <section className="border-b border-ink-900/10 bg-paper">
      <Container>
        <Reveal
          stagger
          className="grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4 md:py-16"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-rv
              className={`px-4 text-center md:px-8 ${
                i % 2 === 1 ? 'border-l border-ink-900/10' : ''
              } ${i > 1 ? 'md:border-l md:border-ink-900/10 max-md:border-t max-md:border-ink-900/10 max-md:pt-8' : ''}`}
            >
              <p className="display text-5xl text-ink-950 md:text-6xl">
                {s.display ??
                  (s.count ? (
                    <Counter value={s.value} />
                  ) : (
                    s.value
                  ))}
                {s.suffix}
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
