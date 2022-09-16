export default {
  render(props) {
    return `${this.html(props)}
                ${this.css(props)}`;
  },
  html(props) {
    return `
        <div class="services__brand">
            <img class="services__brand-image"
                src=${props.img}
                alt=${props.alt}
            />
            <button class="services__brand-button"></button>
        </div>`;
  },
  css(props) {
    return `
    <style>
    .services__brand {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 240px;
        height: 72px;
        border: 1px solid #eaeaea;
        border-radius: 6px;
        background: #ffffff;
        
      }
      .services__brand-image {
        height: 40px;
        width: 100px;
        object-fit: contain;
        margin-inline: 1rem;
      }
      .services__brand-button {
        width: 40px;
        height: 40px;
        color: #ff3e79;
        background: #ffffff;
        border: 2px solid #ff3e79;
        border-radius: 50%;
        margin-inline: 1rem;
      }
      .services__brand-button::after {
        position: relative;
        display: block;
        content: "";
        width: 0.4rem;
        height: 0.4rem;
        border-top: 2px solid #ff3e79;
        border-right: 2px solid #ff3e79;
        transform: translateX(0.7rem) rotate(45deg);
      }
    </style>
    `;
  },
};
