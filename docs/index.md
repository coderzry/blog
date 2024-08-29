---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "coderzry的小站"
  text: "记录技术人生"
  tagline: 路虽远，行则将至
  image:
    src: /logo.svg
    alt: logo
  actions:
    - theme: brand
      text: 开始阅读
      link: /skill/内网开发提效指南
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/coderzry/blog

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

