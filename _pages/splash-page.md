---
title: "Thomas Miller"
layout: splash
permalink: /splash-page/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/siteimages/burnedchassis2096x913.jpg
  caption: "Photo: [**rellimmot**](https://www.rellimmot.com)"
excerpt: "This is my Project Log. This is my honest attempt at documenting my work, and my sharing creative methods. This site is in at early stage. I am a lifelong hobbyist, veteran, and early career Electrical Engineer currently living in New Orleans. I like to make and fix everything, especially airplanes, cars, robots, 3D printing, art, and electronics."
intro:
  - excerpt: 'View my Portfolio to find articles documenting my work. As of now I am still populating the site, so I have got some writing to do.'
feature_row:
  - image_path: https://www.rellimmot.com/assets/images/siteimages/poplatedbreadboard600x400.jpg
    alt: "Portfolio"
    title: <a href="/portfolio/" style="color:#494e52">Portfolio</a>
    excerpt: <a href="/portfolio/" style="color:#494e52;text-decoration:none">Writeups for a variety of projects I've done.</a>
  - image_path: assets/images/siteimages/meinthelab600x400.jpg
    alt: "Resume/About"
    title: <a href="/resume/" style="color:#494e52">Resume/About</a>
    excerpt: <a href="/resume/" style="color:#494e52;text-decoration:none">My resume and about me page.</a>
  - image_path: assets/images/siteimages/toomuchbenchstock600x400.jpg
    alt: "Project Gallery"
    title: <a href="/portfolio/project-gallery" style="color:#494e52">Project Gallery</a>
    excerpt: <a href="/portfolio/project-gallery" style="color:#494e52;text-decoration:none">A collection of project highlights.</a>
    permalink: https://www.rellimmot.com/portfolio/project-gallery
  - image_path: https://www.rellimmot.com/assets/images/siteimages/afbylakewbrak600x400.jpg
    alt: "Posts"
    title: <a href="/year-archive/" style="color:#494e52">Posts</a>
    excerpt: <a href="/year-archive/" style="color:#494e52;text-decoration:none">Blog type articles and writeups.</a>
#  feature_row2:
#   - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
#     alt: "placeholder image 2"
#     title: "Placeholder Image Left Aligned"
#     excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
#     url: "#test-link"
#     btn_label: "Read More"
#     btn_class: "btn--inverse"
# feature_row3:
#   - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
#     alt: "placeholder image 2"
#     title: "Placeholder Image Right Aligned"
#     excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
#     url: "#test-link"
#     btn_label: "Read More"
#     btn_class: "btn--inverse"
# feature_row4:
#   - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
#     alt: "placeholder image 2"
#     title: "Placeholder Image Center Aligned"
#     excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
#     url: "#test-link"
#     btn_label: "Read More"
#     btn_class: "btn--inverse"
---

{% include feature_row id="intro" type="center"%}

{% include feature_row %}




{% include sidebar-mod.html %}
Posts
{% capture written_year %}'None'{% endcapture %}
{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% include archive-single-posts.html %}
{% endfor %}
