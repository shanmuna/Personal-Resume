import ParticleBackground from './ParticleBackground'
import { usePageAnimation } from '../hooks/usePageAnimation'
import './Projects.css'

const projectsData = [
  {
    title: 'SmartAlert Online',
    logo: 'smaralert.jpg',
    date: '2022-04 ~ 2023-12',
    role: '项目经理/开发',
    overview: '多租户云环境下的IT运维管理服务，采用前后端分离模式',
    value: '为企业提供安全、稳定、高效的数字生态系统',
    features: '集成云原生监控和报警技术，支持企业微信、钉钉、微信公众号、飞书等ChatOps工具',
    tech: 'Spring Boot Cloud & Alibaba + Kubernetes + Vue3 + MyBatis + Nacos + RabbitMQ + Redis',
    responsibilities: [
      '需求分析和系统设计，编写相关文档',
      '项目计划制定和进度协调',
      '自动化部署，环境配置和CI/CD优化',
      '核心代码和公共代码编写，确保代码质量',
      '租管、租户和公众号系统功能开发',
      'ChatOps聊天工具对接，实现消息推送',
    ],
  },
  {
    title: '车熙熙',
    logo: 'cxx.jpg',
    date: '2021-09 ~ 至今',
    role: '开发/实施/运维',
    overview: '根据国家相关主管部门要求开发的二手车交易服务平台',
    value: '为买卖车用户提供合法、权威、全面、实时的车辆历史信息',
    features: '与车信盟的车信报告和维保报告接口对接',
    tech: 'Spring Boot + Redis + Vue3 + MyBatis + Maven',
    responsibilities: [
      '整体需求分析，系统架构设计',
      '后端业务代码开发，数据处理和接口开发',
      '公众号页面设计和开发',
      '接口文档编写，系统测试',
      '第三方接口对接',
      '产品运维和优化，客户沟通',
    ],
  },
]

export default function Projects() {
  usePageAnimation()

  return (
    <div className="projects-wrapper">
      <ParticleBackground />
      <div className="container">
        <h2 data-animate>项目经历</h2>
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              data-animate
              data-delay={100 + idx * 150}
            >
              <div className="project-header">
                <div className="project-title-group">
                  {project.logo && <img src={`${import.meta.env.BASE_URL}${project.logo}`} alt={project.title} className="project-logo" />}
                  <h3>{project.title}</h3>
                </div>
                <span className="project-role">{project.role}</span>
              </div>
              <p className="date">{project.date}</p>
              
              <div className="project-section">
                <p className="section-label">项目概述：</p>
                <p className="section-content">{project.overview}</p>
              </div>

              <div className="project-section">
                <p className="section-label">业务价值：</p>
                <p className="section-content">{project.value}</p>
              </div>

              <div className="project-section">
                <p className="section-label">核心特性：</p>
                <p className="section-content">{project.features}</p>
              </div>

              <div className="project-section">
                <p className="section-label">技术栈：</p>
                <p className="tech">{project.tech}</p>
              </div>

              <div className="project-section">
                <p className="section-label">主要职责：</p>
                <ul className="responsibilities">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
