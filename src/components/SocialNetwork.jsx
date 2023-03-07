import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import '../styles/components/socialnetwork.sass'


const socialNetWorks = [
    { name: "linkedin", icon: <a href="#" target="_blank">
      <FaLinkedinIn />
    </a>},
    { name: "github", icon: <a href="https://github.com/PedroHP-queiroz" target="_blank">
      <FaGithub />
    </a>},
    { name: "instagram", icon: <a href="https://www.instagram.com/ph__pq__/" target="_blank">
      <FaInstagram />
    </a>},
]

const SocialNetwork = () => {
  return <section id="social-networks">
    {socialNetWorks.map((network) => (
    <a href="#" className="social-btn" id={network.name} key={network.name}>
        {network.icon}
    </a>
    ))}
  </section>
}

export default SocialNetwork