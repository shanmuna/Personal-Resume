import ParticleBackground from './ParticleBackground'
import { usePageAnimation } from '../hooks/usePageAnimation'
import './Skills.css'

const skillsData = [
  {
    title: '后端技术（精通）',
    skills: [
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
      { name: 'Spring Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
      { name: 'MyBatis', logo: 'http://www.mybatis.cn/logo-bird.png' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    ],
  },
  {
    title: '前端技术（精通）',
    skills: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Vue3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'Element-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elementui/elementui-original.svg' },
      { name: 'Ajax', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'jQuery', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg' },
    ],
  },
  {
    title: '架构与运维（熟练）',
    skills: [
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg' },
      { name: 'Nacos', logo: 'https://nacos.io/img/nacos.png' },
      { name: 'RabbitMQ', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg' },
      { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
      { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
    ],
  },
  {
    title: '开发工具（熟练）',
    skills: [
      { name: 'IDEA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Maven', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg' },
      { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Ansible', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg' },
    ],
  },
]

const certificates = [
  { name: 'MCP证书', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { name: 'ACA阿里云助理工程师', logo: 'https://www.alibabacloud.com/favicon.ico' },
  { name: 'Microsoft Office Specialist', logo: 'https://ts1.tc.mm.bing.net/th/id/OIP-C.6WZeCfCJLIX0oHyZ-lQDpgHaHa?w=146&h=128&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1' },
]

export default function Skills() {
  usePageAnimation()

  return (
    <div className="skills-wrapper">
      <ParticleBackground />
      <div className="container">
        <h2 data-animate>技能展示</h2>
        <div className="skills-content">
          {skillsData.map((card, idx) => (
            <div
              key={idx}
              className="skill-section"
              data-animate
              data-delay={100 + idx * 100}
            >
              <h3>{card.title}</h3>
              <div className="skills-row">
                {card.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="skill-tag"
                    data-animate="scale"
                    data-delay={200 + idx * 100 + i * 50}
                  >
                    <img src={skill.logo} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="skill-section" data-animate data-delay="600">
            <h3>证书与认证</h3>
            <div className="skills-row">
              {certificates.map((cert, i) => (
                <div
                  key={i}
                  className="skill-tag certificate-tag"
                  data-animate="scale"
                  data-delay={700 + i * 50}
                >
                  <img src={cert.logo} alt={cert.name} className="skill-icon" />
                  <span className="skill-name">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
