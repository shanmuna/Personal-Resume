import ParticleBackground from './ParticleBackground'
import { usePageAnimation } from '../hooks/usePageAnimation'
import './Contact.css'

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const SalaryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

export default function Contact() {
  usePageAnimation()

  return (
    <div className="contact-wrapper">
      <ParticleBackground />
      <div className="container">
        <h2 data-animate>联系方式</h2>
        <div className="contact-content">
          <div className="contact-main">
            <div className="contact-left">
              <div className="contact-grid">
                <a href="tel:18574147975" className="contact-item" data-animate data-delay="100">
                  <div className="contact-icon"><PhoneIcon /></div>
                  <p>185-7414-7975</p>
                </a>
                <a href="mailto:zhenhua7975@163.com" className="contact-item" data-animate data-delay="150">
                  <div className="contact-icon"><EmailIcon /></div>
                  <p>zhenhua7975@163.com</p>
                </a>
                <div className="contact-item" data-animate data-delay="200">
                  <div className="contact-icon"><LocationIcon /></div>
                  <p>上海</p>
                </div>
                <div className="contact-item" data-animate data-delay="250">
                  <div className="contact-icon"><SalaryIcon /></div>
                  <p>13-15k</p>
                </div>
              </div>
            </div>
            <div className="contact-right" data-animate data-delay="300">
              <img src="/weixin.jpg" alt="微信二维码" className="weixin-qr" />
            </div>
          </div>
          <div className="contact-message" data-animate data-delay="350">
            <p>4年全栈经验，熟悉云原生与多租户架构，能独立带团队交付产品，也能自己写代码打通前后端，求上海13-15k 工程师/项目经理岗位。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
