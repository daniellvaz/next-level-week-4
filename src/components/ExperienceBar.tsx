import style from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  return (
    <div className={style.experienceBar}>
      <strong>0 xp</strong>
      <div>
        <div style={{ width: '50%' }}/>
        <span className={style.currentExperience} style={{ left: '50%' }}>300 xp</span>
      </div>
      <strong>600 xp</strong>
    </div>
  )
}