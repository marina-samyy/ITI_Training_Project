import { useState } from 'react'
import MemberCard from '../MemberCard/MemberCard'
import styles from './Team.module.css'

function Team() {
  const members = [
    { id: 1, name: 'Sara Ahmed', role: 'Front-end Developer', icon: 'fa-code' },
    { id: 2, name: 'Omar Hassan', role: 'UI Designer', icon: 'fa-palette' },
    { id: 3, name: 'Nour Khaled', role: 'Project Manager', icon: 'fa-list-check' },
    { id: 4, name: 'Laila Mostafa', role: 'Tester', icon: 'fa-bug' },
  ]

  const [selectedId, setSelectedId] = useState(null)

  const selected = members.find((member) => member.id === selectedId)

  return (
    <section id="team" className="mb-5">
      <h2 className="section-title">
        <i className="fa-solid fa-users me-2"></i>
        Team (Parent)
      </h2>
      <div className="row g-4">
        {members.map((member) => (
          <div className="col-sm-6 col-lg-3" key={member.id}>
            <MemberCard
              name={member.name}
              role={member.role}
              icon={member.icon}
              active={member.id === selectedId}
              onSelect={() => setSelectedId(member.id)}
            />
          </div>
        ))}
      </div>
      <p className={styles.message}>
        {selected
          ? `Selected: ${selected.name} - ${selected.role}`
          : 'Select a member to see the details'}
      </p>
    </section>
  )
}

export default Team
