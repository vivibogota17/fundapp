import { useState, type FormEvent } from 'react'
import '../App.css'
import fundLogo from '../assets/Fungenero_ Igualdad en Equilibrio (1).png'
import halloweenActivity from '../assets/¡Día de Halloween! Con Sorpresas y Refrigerio.png'
import amandaPhoto from '../assets/Amanda.jpeg'
import lilianaPhoto from '../assets/Liliana.jpeg'

const navItems = ['Inicio', 'Actividades'] as const
const monthNames = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

type Activity = {
  id: string
  day: number
  month: number
  year: number
  title: string
  time: string
  description: string
}

const octoberActivities: Activity[] = [
  {
    id: '2026-10-17',
    day: 17,
    month: 9,
    year: 2026,
    title: 'Taller de arte y creatividad',
    time: '10:00 a. m.',
    description: 'Un espacio para compartir, crear y expresarse en comunidad.',
  },
  {
    id: '2026-10-24',
    day: 24,
    month: 9,
    year: 2026,
    title: 'Encuentro de bienestar familiar',
    time: '2:00 p. m.',
    description: 'Actividades de integración y bienestar para las familias.',
  },
  {
    id: '2026-10-31',
    day: 31,
    month: 9,
    year: 2026,
    title: 'Día de Halloween',
    time: '3:00 p. m.',
    description: 'Una tarde de Halloween con sorpresas y refrigerio.',
  },
]

function MainPage() {
  const [activeItem, setActiveItem] = useState<(typeof navItems)[number]>('Inicio')

  return (
    <div className="landing-page">
      <header className="topbar">
        <div className="brand-block">
          <img src={fundLogo} alt="Fundación Fungenero" className="brand-logo" />
          <span className="brand-name">Fundación Fungenero</span>
        </div>
      </header>

      <main>
        {activeItem === 'Inicio' ? (
          <>
            <section className="home-welcome" aria-label="Saludo">
              <p className="welcome-message">¡Te damos la bienvenida!</p>
            </section>
            <section className="monthly-activity" aria-labelledby="monthly-activity-title">
              <p className="eyebrow">Conoce nuestras actividades</p>
              <h2 id="monthly-activity-title">Actividad del mes</h2>
              <article className="monthly-activity-card">
                <img
                  src={halloweenActivity}
                  alt="Día de Halloween con sorpresas y refrigerio"
                  className="monthly-activity-image"
                />
                <div className="monthly-activity-copy">
                  <h3>¡Día de Halloween! Con sorpresas y refrigerio</h3>
                </div>
              </article>
            </section>
            <section className="hero-section" aria-label="Inicio">
              <div className="hero-copy">
                <p className="eyebrow">Transformando vidas con acción y esperanza</p>
                <h1>Fundación Fungenero</h1>
                <p className="description">
                  Acompañamos a personas y comunidades con programas de apoyo, educación y
                  desarrollo para construir un futuro más justo, inclusivo y lleno de
                  oportunidades.
                </p>
                <section className="foundation-history" aria-labelledby="foundation-history-title">
                  <h2 id="foundation-history-title">Historia de Fungenero</h2>
                  <p>
                    Fungenero nació como una iniciativa de la Alcaldía en 2014, impulsada
                    por un grupo de mujeres víctimas de violencia que decidieron crear
                    una organización para brindar apoyo y bienestar a otras mujeres y sus
                    familias. La Fundación se constituyó oficialmente el 8 de agosto de
                    2016 y, desde entonces, trabaja para mejorar la calidad de vida de las
                    comunidades mediante programas de alimentación, salud, medio
                    ambiente, arte, cultura y aprovechamiento del tiempo libre.
                  </p>
                  <p>
                    Para cumplir su misión, Fungenero establece alianzas con entidades
                    públicas y privadas, y recibe donaciones de colaboradores y personas
                    solidarias. Su compromiso es ayudar a quienes más lo necesitan,
                    promoviendo la unión, la solidaridad y el bienestar familiar.
                  </p>
                </section>
                <section className="founder-profile" aria-labelledby="founder-profile-title">
                  <img
                    src={amandaPhoto}
                    alt="Amanda Rodríguez, fundadora de FUNGÉNERO"
                    className="founder-profile-image"
                  />
                  <div className="founder-profile-copy">
                    <p className="eyebrow">Nuestra fundadora</p>
                    <h2 id="founder-profile-title">Amanda Rodríguez</h2>
                    <p>
                      Amanda Rodríguez es trabajadora social, técnica administrativa y
                      secretaria bilingüe, con aproximadamente 12 años de experiencia en
                      procesos sociales y comunitarios con poblaciones vulnerables. Se
                      destaca por su compromiso, responsabilidad y vocación de servicio,
                      promoviendo la defensa de los derechos, la igualdad y el bienestar
                      comunitario. Su trayectoria y experiencia la motivaron a impulsar
                      la creación de FUNGÉNERO, una organización dedicada a la
                      transformación social y al mejoramiento de la calidad de vida
                      mediante el arte, la cultura y el acompañamiento social.
                    </p>
                  </div>
                </section>
                <section className="founder-profile" aria-labelledby="liliana-profile-title">
                  <img
                    src={lilianaPhoto}
                    alt="Liliana Martínez"
                    className="founder-profile-image"
                  />
                  <div className="founder-profile-copy">
                    <p className="eyebrow">Nuestro equipo</p>
                    <h2 id="liliana-profile-title">Liliana Martínez</h2>
                    <p>
                      Liliana Martínez es ingeniera ambiental, técnica en finanzas y
                      asesoría comercial, y Community Manager, con experiencia en gestión
                      administrativa, financiera, ambiental y trabajo social y comunitario.
                      Cuenta con habilidades en marketing digital, diseño web, educación
                      ambiental y formación en cosmética natural. Además, posee
                      conocimientos en prevención de feminicidios y se destaca por su
                      creatividad, responsabilidad y compromiso con la sostenibilidad, el
                      bienestar comunitario y la prevención de las violencias.
                    </p>
                  </div>
                </section>
              </div>

              <div className="hero-visual" aria-label="Ilustración de la fundación">
                <img src={fundLogo} alt="Fundación Fungenero" className="hero-image" />
              </div>
            </section>
          </>
        ) : (
          <ActivitiesPage />
        )}
      </main>

      <footer className="bottom-nav" aria-label="Menú inferior">
        {navItems.map((item) => (
          <button
            key={item}
            type="button"
            className={`bottom-nav-item ${activeItem === item ? 'active' : ''}`}
            aria-pressed={activeItem === item}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </button>
        ))}
      </footer>
    </div>
  )
}

function ActivitiesPage() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')
  const [submissionSuccess, setSubmissionSuccess] = useState('')
  const [maxBirthDate] = useState(() => {
    const currentDate = new Date()
    currentDate.setMinutes(currentDate.getMinutes() - currentDate.getTimezoneOffset())
    return currentDate.toISOString().slice(0, 10)
  })

  const handleActivitySelection = (activity: Activity) => {
    setSelectedActivity(activity)
    setSubmissionError('')
    setSubmissionSuccess('')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmissionError('')
    setSubmissionSuccess('')
    setIsSubmitting(true)

    const form = event.currentTarget

    try {
      const response = await fetch('https://formspree.io/f/xppqkldl', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        setSubmissionError(
          `No se pudo enviar el formulario (código ${response.status}). Inténtalo de nuevo.`,
        )
        return
      }

      form.reset()
      setSubmissionSuccess('Formulario enviado correctamente. Gracias.')
    } catch (error) {
      console.error('Error al enviar el formulario de actividad:', error)
      setSubmissionError('No se pudo conectar con el servicio. Revisa tu conexión e inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="activities-page" aria-labelledby="activities-title">
      <p className="eyebrow">Agenda de la fundación</p>
      <h1 id="activities-title">Actividades</h1>

      <div className="activity-options" aria-label="Selecciona una actividad">
        {octoberActivities.map((activity) => (
          <button
            type="button"
            className={`activity-option${selectedActivity?.id === activity.id ? ' selected' : ''}`}
            key={activity.id}
            onClick={() => handleActivitySelection(activity)}
            aria-pressed={selectedActivity?.id === activity.id}
            disabled={isSubmitting}
          >
            <span className="activity-option-date">
              {activity.day} de {monthNames[activity.month]} de {activity.year} · {activity.time}
            </span>
            <span className="activity-option-title">{activity.title}</span>
            <span className="activity-option-description">{activity.description}</span>
          </button>
        ))}
      </div>

      {selectedActivity ? (
        <section className="activity-details" aria-live="polite">
          <div>
            <p className="eyebrow">
              {selectedActivity.day} de {monthNames[selectedActivity.month]} de {selectedActivity.year}
              {' · '}{selectedActivity.time}
            </p>
            <h2>{selectedActivity.title}</h2>
            <p>{selectedActivity.description}</p>
          </div>
          <form className="activity-registration-form" onSubmit={handleSubmit}>
            <input type="hidden" name="activity" value={selectedActivity.title} />
            <div className="activity-form-field">
              <label htmlFor="activity-name">Nombre</label>
              <input
                id="activity-name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>
            <div className="activity-form-field">
              <label htmlFor="activity-phone">Teléfono</label>
              <input
                id="activity-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
              />
            </div>
            <div className="activity-form-field">
              <label htmlFor="activity-birth-date">Fecha de nacimiento</label>
              <input
                id="activity-birth-date"
                name="birthdate"
                type="date"
                max={maxBirthDate}
                autoComplete="bday"
                required
              />
            </div>
            <button
              type="submit"
              className="activity-form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando…' : 'Enviar formulario'}
            </button>
            {submissionError && (
              <p className="activity-form-error" role="alert">{submissionError}</p>
            )}
            {submissionSuccess && (
              <p className="activity-form-success" role="status">{submissionSuccess}</p>
            )}
          </form>
        </section>
      ) : (
        <p className="activity-selection-hint">
          Selecciona una actividad.
        </p>
      )}
    </section>
  )
}

export default MainPage
