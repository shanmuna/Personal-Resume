import ParticleBackground from './ParticleBackground'
import { usePageAnimation } from '../hooks/usePageAnimation'
import './About.css'

export default function About() {
  usePageAnimation()

  return (
    <div className="about-wrapper">
      <ParticleBackground />
      <div className="container">
        <h2 data-animate>关于我</h2>
        <div className="about-content">
          <div className="info-card" data-animate data-delay="100">
            <div className="card-header">
              <h3>基本信息</h3>
              <span className="card-icon">👨</span>
            </div>
            <div className="info-list">
              <div className="info-row">
                <span className="label">姓名</span>
                <span className="value">贾振华</span>
              </div>
              <div className="info-row">
                <span className="label">年龄</span>
                <span className="value">23岁</span>
              </div>
              <div className="info-row">
                <span className="label">性别</span>
                <span className="value">男</span>
              </div>
              <div className="info-row">
                <span className="label">经验</span>
                <span className="value">4 年 Java 全栈</span>
              </div>
              <div className="info-row">
                <span className="label">电话</span>
                <span className="value">185-7414-7975</span>
              </div>
              <div className="info-row">
                <span className="label">邮箱</span>
                <span className="value">zhenhua7975@163.com</span>
              </div>
            </div>
          </div>

          <div className="info-card" data-animate data-delay="200">
            <div className="card-header">
              <h3>求职意向</h3>
              <span className="card-icon">🎯</span>
            </div>
            <div className="info-list">
              <div className="info-row">
                <span className="label">岗位</span>
                <span className="value">Java开发 / 项目经理</span>
              </div>
              <div className="info-row">
                <span className="label">城市</span>
                <span className="value">上海</span>
              </div>
              <div className="info-row">
                <span className="label">薪资</span>
                <span className="value">13-15k</span>
              </div>
              <div className="info-row">
                <span className="label">入职</span>
                <span className="value">另行商议</span>
              </div>
            </div>
          </div>

          <div className="info-card" data-animate data-delay="300">
            <div className="card-header">
              <h3>教育背景</h3>
              <span className="card-icon">🎓</span>
            </div>
            <div className="info-list">
              <div className="info-row">
                <span className="label">学校</span>
                <span className="value">安阳职业技术学院</span>
              </div>
              <div className="info-row">
                <span className="label">专业</span>
                <span className="value">网站工程师</span>
              </div>
            </div>
          </div>

          <div className="info-card" data-animate data-delay="400">
            <div className="card-header">
              <h3>个人优势</h3>
              <span className="card-icon">⭐</span>
            </div>
            <div className="traits-list">
              <div className="trait-item">快速适应各种工作环境，具有良好的分析能力、自学能力和适应能力</div>
              <div className="trait-item">工作积极进取，对IT领域的软件开发和设计工作有浓厚兴趣</div>
              <div className="trait-item">具有良好的职业操守、组织及沟通协调能力、团队精神和强烈的自我实现要求</div>
            </div>
          </div>

          <div className="info-card" data-animate data-delay="500">
            <div className="card-header">
              <h3>职业规划</h3>
              <span className="card-icon">🚀</span>
            </div>
            <div className="traits-list">
              <div className="trait-item"><strong>短期：</strong>半年内把云原生与低代码平台深度结合，带队落地2个可复制的SaaS模板，让个人价值=公司营收增量</div>
              <div className="trait-item"><strong>长期：</strong>十年内沉淀为"懂商业的技术合伙人"，孵化出1个全球化多租户PaaS，用代码帮百万企业降本增效，也让自己实现财富自由</div>
            </div>
          </div>

          <div className="info-card" data-animate data-delay="600">
            <div className="card-header">
              <h3>团队管理</h3>
              <span className="card-icon">🤝</span>
            </div>
            <div className="info-list">
              <div className="info-row">
                <span className="label">管理规模</span>
                <span className="value">5人</span>
              </div>
              <div className="info-row">
                <span className="label">管理经验</span>
                <span className="value">项目协调与团队沟通</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
