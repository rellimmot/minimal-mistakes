---
layout: gallery
title: "Portfolio Project Ideas"
support: [jquery, gallery]
excerpt: "This is an image gallery of highlights (err..greatest hits?) of my past work."
header:
  image: /assets/images/unsplash-gallery-image-1.jpg
  teaser: assets/images/unsplash-gallery-image-1-th.jpg
---
<div class="isotope-lightgallery">
{% include gallery-sorting.html gallery=site.data.galleries.portfolio %}
</div>
