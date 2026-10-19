// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Content was preserved from the original gruposportfisio.com.br website.
// Nothing here is invented: names, CREFITOs, phones, address and copy are real.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Grupo SportFisio',
  short: 'SportFisio',
  tagline: 'Fisioterapia Esportiva em Maringá',
  founded: 2012,
  professionals: '20+',
  phoneDisplay: '(44) 3026-1100',
  phoneHref: 'tel:+554430261100',
  whatsappDisplay: '(44) 99156-7076',
  whatsappNumber: '5544991567076',
  whatsappHref: 'https://wa.me/5544991567076?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Grupo%20SportFisio.',
  address: {
    street: 'Av. Nóbrega, 1084 — Zona 04',
    zip: '87014-180',
    city: 'Maringá — Paraná',
  },
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14643.099649670254!2d-51.9462213!3d-23.4324968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed9053cc9c5c39b9!2sGrupo%20SportFisio!5e0!3m2!1spt-BR!2sbr!4v1594783455894!5m2!1spt-BR!2sbr',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Grupo+SportFisio+Av.+N%C3%B3brega+1084+Maring%C3%A1',
  homeCareInstagram: '@sportfisiohomecare',
}

export const nav = [
  { label: 'Início', to: '/' },
  { label: 'Profissionais', to: '/equipe' },
  { label: 'Áreas que atuamos', to: '/servico' },
  { label: 'Estrutura', to: '/estrutura' },
  { label: 'Cursos', to: '/curso' },
  { label: 'Contato', to: '/contato' },
]

// Order and copy preserved from the original "Áreas que atuamos" listing.
export const services = [
  {
    id: 77,
    slug: 'dry_needling',
    name: 'Dry Needling',
    letter: 'D',
    tagline: 'Direto no ponto da dor',
    summary:
      'Técnica de agulhamento a seco com pouca invasão, aplicada diretamente nos pontos-gatilho para alívio das dores.',
    bullets: [
      'Age diretamente no ponto da dor',
      'Restaura a amplitude do movimento',
      'Alívio de dores na primeira sessão',
    ],
    description:
      'O Dry Needling, também conhecido como agulhamento a seco, é um método com pouca invasão em que são utilizadas agulhas diretamente nos pontos-gatilho para alívio das dores. O agulhamento tem por objetivo aumentar o fluxo sanguíneo da região onde a agulha é inserida, com foco na diminuição das dores locais, amplitude dos movimentos e relaxamento do músculo. A grande vantagem desta técnica é que o alívio das dores pode ser sentido já no primeiro atendimento. Assim como os outros tratamentos usados no Grupo SportFisio, o Dry Needling pode ser incorporado a outras técnicas para melhor resultado. O profissional fará a avaliação visando a melhora integral do paciente.',
    techTitle: 'Direto no ponto da dor',
    techBody: [
      'Uma das vantagens da técnica é que as agulhas agem diretamente no ponto da dor, no caso da tensão muscular ou quando há um déficit de movimento. Os resultados são praticamente instantâneos: logo na primeira sessão é possível perceber o distensionamento do músculo dolorido e, em outros casos, o aumento da amplitude do movimento.',
      'No caso de pacientes com alergia a algum medicamento, o Dry Needling pode ser eficaz, já que a pessoa não fica exposta a nenhuma medicação. Quanto ao procedimento em si, leva poucos minutos e várias partes do corpo podem ser tratadas ao mesmo tempo. A duração do tratamento depende de fatores como a saúde geral do paciente, o nível de dor registrado e o local a receber as agulhas.',
    ],
    image: '/assets/servicos/dry-needling.webp',
  },
  {
    id: 80,
    slug: 'ondas_de_choque',
    name: 'Ondas de Choque',
    letter: 'O',
    tagline: 'Precisão nas lesões crônicas',
    summary:
      'Modalidade de intervenção para pacientes com problemas músculo-esqueléticos, com foco em lesões crônicas.',
    bullets: [
      'Lesões crônicas',
      'Fasciites plantares e tendinopatias',
      'Quebra de fibroses',
      'Epicondilite',
    ],
    description:
      'O tratamento por Ondas de Choque extracorpórea é uma nova modalidade de intervenção para pacientes com problemas músculo-esqueléticos. Auxilia em casos como tendinites que usualmente necessitam de uma longa demanda de tempo e esforço para evoluir com os protocolos habituais, além de outras lesões, principalmente crônicas. O tratamento por ondas de choque não é um tratamento à parte, e sim combinado com outras técnicas para melhores resultados.',
    techTitle: 'Indicação para tratamento com Ondas de Choque',
    techBody: [
      'É indicado para lesões crônicas, fasciites plantares, quebra de fibroses e epicondilite, sempre integrado a um protocolo que combina outras técnicas para potencializar os resultados.',
    ],
    image: '/assets/servicos/ondas-de-choque.webp',
  },
  {
    id: 78,
    slug: 'reabilitacao_do_lca',
    name: 'Reabilitação do LCA',
    letter: 'R',
    tagline: 'Retorno seguro à função',
    summary:
      'Fisioterapia esportiva de referência para lesões do Ligamento Cruzado Anterior e retorno à função.',
    bullets: [
      'Atletas de futebol, handebol, rúgbi e vôlei',
      'Acompanhamento de pós-operatório',
      'Protocolos atualizados constantemente',
    ],
    description:
      'Dentro da fisioterapia esportiva, o tema com maior número de publicações é a lesão do Ligamento Cruzado Anterior. A ruptura do ligamento é a nossa maior incidência de atletas e pacientes — procuram a clínica desde atletas de futebol, handebol, rúgbi e vôlei, entre outras modalidades. Sabemos que a medicina evoluiu muito nos últimos anos no que diz respeito às técnicas cirúrgicas; por isso, nossos profissionais buscam se atualizar frequentemente dentro dos procedimentos da fisioterapia, para fazer o melhor pelo retorno à função dos nossos pós-operatórios.',
    image: '/assets/servicos/reabilitacao-lca.webp',
  },
  {
    id: 79,
    slug: 'recovery',
    name: 'Recovery',
    letter: 'R',
    tagline: 'Recuperação de alta performance',
    summary:
      'Estratégias de recuperação para atletas: botas pneumáticas, crioterapia, laser e liberação miofascial.',
    bullets: [
      'Botas pneumáticas de compressão',
      'Crioterapia e laser',
      'Liberação miofascial e drenagem esportiva',
    ],
    description:
      'Cada vez mais corredores, jogadores e atletas amadores e profissionais vêm se dedicando a competições mais intensas. Uma das estratégias do Grupo SportFisio na prevenção e recuperação dentro do programa Recovery é a utilização das botas pneumáticas.',
    techTitle: 'Como funciona?',
    techBody: [
      'As botas pneumáticas proporcionam a recuperação das pernas através de ar comprimido por dispositivos de compressão dinâmica, para melhorar o fluxo sanguíneo e acelerar a recuperação, auxiliando junto a outras técnicas. Costumam ser utilizadas após um treinamento intenso ou na preparação para um grande desafio.',
      'A SportFisio também oferece outros processos de Recovery, como crioterapia por imersão, crio junto ao GameReady, laser, Compex com recuperação ativa, liberação miofascial, drenagem esportiva e Dry Needling.',
    ],
    image: '/assets/servicos/recovery.webp',
  },
  {
    id: 81,
    slug: 'rpg',
    name: 'RPG',
    letter: 'R',
    tagline: 'Reeducação Postural Global',
    summary:
      'Reeducação Postural Global para reorganizar e reequilibrar os músculos que firmam a postura.',
    bullets: ['Correção postural', 'Melhora de dores lombares', 'Melhora da parte respiratória'],
    description:
      'O método RPG — Reeducação Postural Global — tem como objetivo trabalhar as alterações posturais, permitindo a reorganização e o reequilíbrio dos músculos que firmam a postura. Identifica e alonga os músculos considerados responsáveis pela alteração postural. Por meio da avaliação e identificação destes músculos, os exercícios são realizados para promover o alongamento e a reeducação do segmento corporal.',
    techTitle: 'Indicações',
    techBody: [
      'O RPG tem objetivo de tratar dores lombares, dorsais e cervicais, desvio de coluna, hérnias de disco, torcicolos, proteger contra processos degenerativos articulares e tratar doenças respiratórias (asma/bronquite), somáticas (estresse) e problemas de períneo, como a incontinência urinária.',
      'Nossa sócia responsável pelos atendimentos é a Sthefany Dlugosz, que realizou a formação oficial do método Souchard de RPG em São Paulo.',
    ],
    image: '/assets/servicos/rpg.webp',
  },
  {
    id: 83,
    slug: 'terapia_manual',
    name: 'Terapia Manual',
    letter: 'T',
    tagline: 'Mãos que corrigem disfunções',
    summary:
      'Conjunto de técnicas manuais para corrigir disfunções musculares, fasciais, viscerais e articulares.',
    bullets: [
      'Restaura a amplitude do movimento',
      'Melhora a funcionalidade',
      'Corrige as disfunções do corpo',
    ],
    description:
      'A terapia manual é um conjunto de técnicas que tem por objetivo corrigir as disfunções do corpo humano — musculares, fasciais, viscerais, articulares, entre outras. Na terapia manual, o fisioterapeuta utiliza as mãos para pressionar ou tracionar determinada estrutura (fáscia, músculo, articulação e outras) com o intuito de mobilizá-la e, assim, corrigir desordens causadas pelas disfunções do dia a dia.',
    image: '/assets/servicos/terapia-manual.webp',
  },
  {
    id: 84,
    slug: 'home_care',
    name: 'Home Care',
    letter: 'H',
    tagline: 'Fisioterapia no conforto do lar',
    summary:
      'Atendimento fisioterapêutico domiciliar, com conforto, segurança e privacidade do seu lar.',
    bullets: [
      'Atendimento individualizado',
      'Tratamento com respaldo da clínica',
      'Horários flexíveis',
      'Avaliação do ambiente domiciliar',
    ],
    description:
      'Muitos pacientes nos procuram diariamente por um atendimento domiciliar e sempre ajudávamos. Porém, agora resolvemos organizar e melhorar para disponibilizar um atendimento personalizado nessa área. Um novo formato de atendimento do Grupo SportFisio, que chamamos de SportFisio Home Care: você não precisa sair de casa, nós vamos até você.',
    techTitle: 'Fisioterapia no conforto do seu lar',
    techBody: [
      'O SportFisio Home Care oferece tratamento às pessoas que precisam de fisioterapia no conforto, segurança e privacidade do seu lar, com acompanhamento constante da evolução do paciente.',
    ],
    image: '/assets/servicos/home-care.webp',
  },
]

// Team members preserved from the original "Profissionais" page.
export const team = [
  { name: 'Amanda Cristina Negri Masteguin', role: 'Fisioterapeuta', crefito: 'CREFITO: 325318-F', photo: '/assets/equipe/amanda.webp' },
  { name: 'Alysson Matheus dos Santos', role: 'Fisioterapeuta', crefito: 'CREFITO: 357273-F', photo: '/assets/equipe/alysson.webp' },
  { name: 'Andrei Vinicius Gonçalves', role: 'Fisioterapeuta', crefito: 'CREFITO: 324361-F', photo: '/assets/equipe/andrei.webp' },
  { name: 'Carlos Eduardo dos Santos Junior', role: 'Fisioterapeuta', crefito: 'CREFITO: 339814-F', photo: '/assets/equipe/carlos.webp' },
  { name: 'Eduardo Ruhling da Silva', role: 'Fisioterapeuta', crefito: 'CREFITO: 183216-F', photo: '/assets/equipe/eduardo.webp' },
  { name: 'Fabio Alexandre Moreschi Guastala', role: 'Fisioterapeuta', crefito: 'CREFITO: 180615-F', photo: '/assets/equipe/fabio.webp' },
  { name: 'Fernanda da Silva Rosa', role: 'Fisioterapeuta', crefito: 'CREFITO: 384163-F', photo: '/assets/equipe/fernanda.webp' },
  { name: 'Gabriela Athaides Cateli', role: 'Fisioterapeuta', crefito: 'CREFITO: 369426-F', photo: '/assets/equipe/gabriela.webp' },
  { name: 'Gustavo Meltior Cruz', role: 'Fisioterapeuta', crefito: 'CREFITO: 276317-F', photo: '/assets/equipe/gustavo.webp' },
  { name: 'João Pedro Rafanhin Maioque', role: 'Fisioterapeuta', crefito: 'CREFITO: 384191-F', photo: '/assets/equipe/joao-pedro.webp' },
  { name: 'Laiany Macedo Vieira de Lima', role: 'Fisioterapeuta', crefito: 'CREFITO: 326500-F', photo: '/assets/equipe/laiany.webp' },
  { name: 'Laura Vieira de Camargo Nielsen', role: 'Fisioterapeuta', crefito: 'CREFITO: 3294978-F', photo: '/assets/equipe/laura.webp' },
  { name: 'Leonardo Marcondes', role: 'Fisioterapeuta', crefito: 'CREFITO: 319131-F', photo: '/assets/equipe/leonardo.webp' },
  { name: 'Lucas Toffoli', role: 'Fisioterapeuta', crefito: 'CREFITO: 211477-F', photo: '/assets/equipe/lucas.webp' },
  { name: 'Márcio Hirata', role: 'Fisioterapeuta', crefito: 'CREFITO: 210820-F', photo: '/assets/equipe/marcio.webp' },
  { name: 'Maria Eduarda Mattiolli', role: 'Nutricionista', crefito: 'CRN: 12442', photo: '/assets/equipe/maria-eduarda.webp' },
  { name: 'Mariana Borges', role: 'Fisioterapeuta', crefito: 'CREFITO: 207855-F', photo: '/assets/equipe/mariana.webp' },
  { name: 'Nataly Beckert Takase', role: 'Fisioterapeuta', crefito: 'CREFITO: 191635-F', photo: '/assets/equipe/nataly.webp' },
  { name: 'Patricia Quintino', role: 'Fisioterapeuta', crefito: 'CREFITO: 263151-F', photo: '/assets/equipe/patricia.webp' },
  { name: 'Pedro Rogério Dias', role: 'Fisioterapeuta', crefito: 'CREFITO: 369436-F', photo: '/assets/equipe/pedro.webp' },
  { name: 'Renata dos Santos Ribeiro', role: 'Fisioterapeuta', crefito: 'CREFITO: 394972-F', photo: '/assets/equipe/renata.webp' },
  { name: 'Sthefany Dlugosz', role: 'Fisioterapeuta', crefito: 'CREFITO: 276723-F', photo: '/assets/equipe/sthefany.webp' },
  { name: 'Vinícios César Vilas Boas Melo', role: 'Fisioterapeuta', crefito: 'CREFITO: 320813-F', photo: '/assets/equipe/vinicios.webp' },
  { name: 'Yasmin R. Zorzi', role: 'Fisioterapeuta', crefito: 'CREFITO: 261042-F', photo: '/assets/equipe/yasmin.webp' },
]

export const structure = {
  clinicName: 'Clínica Av. Nóbrega',
  images: [
    {
      src: '/assets/estrutura/estrutura-1.webp',
      alt: 'Fachada do Grupo SportFisio na Av. Nóbrega, em Maringá',
      label: 'Fachada & recepção',
      feature: true,
    },
    {
      src: '/assets/estrutura/estrutura-2.webp',
      alt: 'Área de treino e reabilitação do Grupo SportFisio',
      label: 'Espaço de treino',
    },
    {
      src: '/assets/estrutura/estrutura-3.webp',
      alt: 'Sala de atendimento com equipamentos de fisioterapia esportiva',
      label: 'Sala de atendimento',
    },
    {
      src: '/assets/estrutura/estrutura-4.webp',
      alt: 'Espaço interno da clínica Grupo SportFisio',
      label: 'Área interna',
    },
    {
      src: '/assets/estrutura/estrutura-5.webp',
      alt: 'Equipamentos de reabilitação do Grupo SportFisio',
      label: 'Equipamentos',
    },
    {
      src: '/assets/estrutura/estrutura-6.webp',
      alt: 'Atendimento de fisioterapia esportiva no Grupo SportFisio',
      label: 'Atendimento',
    },
  ],
}

// Courses preserved from the original "Cursos" page.
export const courses = [
  {
    title: '3º Curso Prático — Complexo do Ombro',
    status: 'Inscrições encerradas',
    about: 'Curso prático voltado ao complexo do ombro para profissionais de fisioterapia.',
    note: 'Inscrições encerradas!',
    image: '/assets/cursos/curso-ombro.webp',
  },
]

export const homeCareHighlights = [
  'Avaliação criteriosa e protocolo individualizado',
  'Terapia manual, Dry Needling e ondas de choque',
  'Recovery e prevenção de lesões',
]
