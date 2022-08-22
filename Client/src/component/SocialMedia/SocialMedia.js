import { link } from 'joi'
import React from 'react'
import './socialMedia.css'

import { Link } from 'react-router-dom'
const SocialMedia = () => {
  return (
    <div class="containerSocial">
      <div class="SocialIcons">
        <Link
          to="#"
          class="iconsSocialMedia"
          id="iconF"
          data-tooltip="Facebook"
        >
          <i class="fab fa-facebook"></i>
        </Link>

        <Link
          to="#"
          class="iconsSocialMedia"
          id="iconW"
          data-tooltip="Whatsapp"
        >
          <i class="fab fa-whatsapp"></i>
        </Link>

        <Link
          to="#"
          class="iconsSocialMedia"
          id="iconI"
          data-tooltip="Instagram"
        >
          <i class="fab fa-instagram"></i>
        </Link>

        <Link
          to="#"
          class="iconsSocialMedia"
          id="iconL"
          data-tooltip="Linkedin"
        >
          <i class="fab fa-linkedin"></i>
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;